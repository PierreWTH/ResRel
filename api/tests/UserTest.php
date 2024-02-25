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

        $response = $client->request('GET', '/users', [
            'headers' => [
                'Content-Type' => 'application/json',
                'Accept' => 'application/json',
            ]

        ]);

        $users = $response->toArray();

        $this->assertResponseIsSuccessful(200);
        $this->assertCount(2, $users, "Incorrect number of users retrieved");

    }

    /**
     * @test
     */
    public function can_create_new_user(): void
    {
        $client = self::createClient();

        // Get a token 

        $email = 'skyler@resrel.com';
        $client->request('POST', '/users', [
            'json' => $this->makeUserData()
        ]);

        $this->assertResponseIsSuccessful(200);

        $user = $this->getEntityManager()->getRepository(User::class)->findOneBy([
            'email' => $email
        ]);

        $this->assertNotNull($user, 'User creation failed');


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

    


}