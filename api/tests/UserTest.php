<?php

namespace App\Tests;

use ApiPlatform\Symfony\Bundle\Test\ApiTestCase;

class UserTest extends ApiTestCase
{   
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
}