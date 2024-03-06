<?php

namespace App\State;

use App\Repository\PostRepository;
use ApiPlatform\Metadata\Operation;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\State\ProviderInterface;
use App\ApiResource\Post as PostResource;

final class PostStateProvider implements ProviderInterface 
{
    public function __construct(private PostRepository $postRepository)
    {
        $this->postRepository = $postRepository;
    }

    public function provide(Operation $operation, array $uriVariables = [], array $context = []): object|array|null
    {
        if ($operation instanceof GetCollection) {
            
            $posts = $this->postRepository->findAll();

            $resourceUsers = [];
            
            foreach($posts as $user){
                $resourcePosts[] = $user->toResource();
            }
            
            return $resourceUsers;
        }
    }   
}