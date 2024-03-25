<?php

namespace App\Tests;

use App\Entity\Post;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use ApiPlatform\Symfony\Bundle\Test\ApiTestCase;

class PostTest extends ApiTestCase
{   
    private EntityManager $entityManager;
    
     /**
     * @test
     */
    public function admin_can_retrieves_all_posts(): void
    {
        $client = self::createClient();

        // Get a token 
        $token = $this->loginAsAdmin();

        $response = $client->request('GET', '/posts', [
            'auth_bearer' => $token,
            'headers' => [
                'Content-Type' => 'application/json',
                'Accept' => 'application/json'
            ],
        ]);


        $posts = $response->toArray();

        $this->assertResponseIsSuccessful(200);
        $this->assertCount(8, $posts, "Incorrect number of posts retrieved");

    }

    /**
     * @test
     */
    public function admin_can_limit_retrieved_posts(): void
    {
        $client = self::createClient();

        // Get a token 
        $token = $this->loginAsAdmin();

        $response = $client->request('GET', '/posts?limit=5', [
            'auth_bearer' => $token,
            'headers' => [
                'Content-Type' => 'application/json',
                'Accept' => 'application/json'
            ],
        ]);


        $posts = $response->toArray();

        $this->assertResponseIsSuccessful(200);
        $this->assertCount(5, $posts, "Incorrect number of posts retrieved");

    }
    /**
     * @test
     */
    public function admin_can_retrieve_post_by_id(): void
    {
        $client = self::createClient();

        // Get a token 
        $token = $this->loginAsAdmin();

        $post = $this->getEntityManager()->getRepository(Post::class)->findOneBy([
            'title' => 'Mon premier post - Lorem Elsass ipsum']);

            $response = $client->request('GET', '/posts/' . $post->getId(), [
                'auth_bearer' => $token,
                'headers' => [
                    'Content-Type' => 'application/json',
                    'Accept' => 'application/json'
                ],
            ]);


        $retrievedPost = $response->toArray();

        $this->assertResponseIsSuccessful(200);
        $this->assertEquals('Mon premier post - Lorem Elsass ipsum', $retrievedPost['title'], "Incorrect post retrieved");

    }

    /**
     * @test
     */
    public function admin_can_create_new_post(): void
    {
        $client = self::createClient();

        // Get a token 

        $token = $this->loginAsAdmin();

        $response = $client->request('POST', '/posts', [
            'auth_bearer' => $token,
            'headers' => ['Content-Type' => 'application/json'],
            'json' => $this->makePostData()
        ]);

        $email = 'skyler@resrel.com';

        $this->assertResponseIsSuccessful(200);

        $post = $this->getEntityManager()->getRepository(Post::class)->findOneBy([
            'title' => $response->toArray()['title']
        ]);

        $this->assertNotNull($post, 'Post creation failed');


    }

    /**
     * @test
     */
    public function admin_can_modify_a_post(): void
    {
        $client = self::createClient();

        // Get a token 

        $post = $this->getEntityManager()->getRepository(Post::class)->findOneBy([
            'content' => 'Lorem Elsass ipsum Salut bisamme id, risus, pellentesque Verdammi.']);

        $token = $this->loginAsAdmin();

        $response = $client->request('PATCH', '/posts/' . $post->getId(), [
            'auth_bearer' => $token,
            'headers' => ['Content-Type' => 'application/json'],
            'json' => [
                'content' => 'TEST']
        ]);

        $this->assertResponseIsSuccessful(200);

        $title = $response->toArray()['content'];

        $this->assertEquals($title, 'TEST');

    }

     /**
     * @test
     */
    public function admin_can_delete_a_post(): void
    {
        $client = self::createClient();

        // Get a token 

        $post = $this->getEntityManager()->getRepository(Post::class)->findOneBy([
            'title' => 'Mon premier post - Lorem Elsass ipsum']);

        $token = $this->loginAsAdmin();

        $response = $client->request('DELETE', '/posts/' . $post->getId(), [
            'auth_bearer' => $token,
            'headers' => ['Content-Type' => 'application/json'],
        ]);

        $this->assertResponseIsSuccessful(200);

        $post = $this->getEntityManager()->getRepository(Post::class)->findOneBy([
            'title' => 'Mon premier post - Lorem Elsass ipsum']);

        $this->assertNull($post, 'Post deletion failed');

    }

    

    protected function makePostData()
    {
        return [
            'title' => 'Title test',
            'description' => 'Description test',
            'content' => 'Content test',
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