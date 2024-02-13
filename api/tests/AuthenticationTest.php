<?php

namespace App\Tests;

use ApiPlatform\Symfony\Bundle\Test\ApiTestCase;

class AuthenticationTest extends ApiTestCase
{   
     /**
     * @test
     */
    public function user_can_get_a_token(): void
    {
        $client = self::createClient();

        // Get a token 

        $response = $client->request('POST', '/api/login_check', [
            'json' => [
                'username' => 'user@resrel.com',
                'password' => 'password',
            ],
        ]);

        $this->assertResponseIsSuccessful(200);
    }
}