<?php

namespace App\ApiResource;

use ApiPlatform\Metadata\Get;
use App\State\PostStateProvider;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;


#[ApiResource(
    operations: [
        new Get(provider: PostStateProvider::class),
        new GetCollection(provider: PostStateProvider::class),
    ],
)]

class Post
{
    public int $id;

    public string $title;

    public string $content;

    public array $user;
}