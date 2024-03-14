<?php

namespace App\State;

use App\Repository\PostRepository;
use ApiPlatform\Metadata\Operation;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Get;
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

            if(isset($context['filters']['limit'])){
                $limit = $context['filters']['limit'];

                $posts = $this->postRepository->findBy([], [], $limit);
            }
            else {
                $posts = $this->postRepository->findAll();
            }

            

            $resourcePosts = [];

            
            foreach($posts as $post){
                $resourcePosts[] = $post->toResource();
            }

            return $resourcePosts;
        }

        if ($operation instanceof Get) {
            $post = $this->postRepository->find($uriVariables['id']);
        
            if(!$post){
                throw new \Exception('Post not found', 404);
            }

            return $post->toResource();
        
        }
    }   
}