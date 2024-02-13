<?php

namespace App\ApiResource;

use ApiPlatform\Metadata\Get;
use App\State\UserStateProvider;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;

#[ApiResource(
    operations: [
        new Get(provider: UserStateProvider::class),
        new GetCollection(provider: UserStateProvider::class),
    ],
)]

class User
{
    public int $id;

    public string $email;
}