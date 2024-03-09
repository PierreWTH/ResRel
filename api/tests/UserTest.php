<?php

namespace App\Tests;

use App\Entity\User;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use ApiPlatform\Symfony\Bundle\Test\ApiTestCase;

class UserTest extends ApiTestCase
{   
    private EntityManager $entityManager;
    
     /**
     * @test
     */
    public function admin_can_retrieves_all_user(): void
    {
        $client = self::createClient();

        // Get a token 
        $token = $this->loginAsAdmin();

        $response = $client->request('GET', '/users', [
            'auth_bearer' => $token,
            'headers' => [
                'Content-Type' => 'application/json',
                'Accept' => 'application/json'
            ],
        ]);


        $users = $response->toArray();

        $this->assertResponseIsSuccessful(200);
        $this->assertCount(2, $users, "Incorrect number of users retrieved");

    }

    /**
     * @test
     */
    public function admin_can_create_new_user(): void
    {
        $client = self::createClient();

        // Get a token 

        $token = $this->loginAsAdmin();

        $response = $client->request('POST', '/users', [
            'auth_bearer' => $token,
            'headers' => ['Content-Type' => 'application/json'],
            'json' => $this->makeUserData()
        ]);

        $email = 'skyler@resrel.com';

        $this->assertResponseIsSuccessful(200);

        $user = $this->getEntityManager()->getRepository(User::class)->findOneBy([
            'email' => $response->toArray()['email']
        ]);

        $this->assertNotNull($user, 'User creation failed');


    }

    /**
     * @test
     */
    public function admin_can_modify_a_user(): void
    {
        $client = self::createClient();

        // Get a token 

        $user = $this->getEntityManager()->getRepository(User::class)->findOneBy([
            'email' => 'user@resrel.com']);

        $token = $this->loginAsAdmin();

        $response = $client->request('PATCH', '/users/' . $user->getId(), [
            'auth_bearer' => $token,
            'headers' => ['Content-Type' => 'application/json'],
            'json' => [
                'username' => 'TEST']
        ]);

        $this->assertResponseIsSuccessful(200);

        $username = $response->toArray()['username'];

        $this->assertEquals($username, 'TEST');

    }

     /**
     * @test
     */
    public function admin_can_delete_a_user(): void
    {
        $client = self::createClient();

        // Get a token 

        $user = $this->getEntityManager()->getRepository(User::class)->findOneBy([
            'email' => 'user@resrel.com']);

        $token = $this->loginAsAdmin();

        $response = $client->request('DELETE', '/users/' . $user->getId(), [
            'auth_bearer' => $token,
            'headers' => ['Content-Type' => 'application/json'],
        ]);

        $this->assertResponseIsSuccessful(200);

        $user = $this->getEntityManager()->getRepository(User::class)->findOneBy([
            'email' => 'user@resrel.com']);

        $this->assertNull($user, 'User deletion failed');

    }

    protected function makeUserData()
    {
        return [
            'email' => 'skyler@resrel.com',
            'password' => 'password',
            'firstname' => 'Skyler',
            'lastname' => 'White',
            'username' => 'Sky'
        ];

    }

    protected function getEntityManager()
    {
        return self::$kernel->getContainer()
            ->get('doctrine')
            ->getManager();
    }

    protected function loginAsAdmin(): string
    {
        $client = self::createClient();

        $response = $client->request('POST', '/login_check', [
            'json' => [
                'email' => 'admin@resrel.com',
                'password' => 'password'
            ]
        ]);

        $data = $response->toArray();

        return $data['token'];
    }

    


}