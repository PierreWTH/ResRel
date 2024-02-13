<?php

namespace App\State;

use App\Repository\UserRepository;
use ApiPlatform\Metadata\Operation;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\State\ProviderInterface;
use App\ApiResource\User as UserResource;

final class UserStateProvider implements ProviderInterface 
{
    public function __construct(private UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function provide(Operation $operation, array $uriVariables = [], array $context = []): object|array|null
    {
        if ($operation instanceof GetCollection) {
            
            $users = $this->userRepository->findAll();

            $resourceUsers = [];
            
            foreach($users as $user){
                $resourceUsers[] = $user->toResource();
            }
            
            return $resourceUsers;
        }
    }   
}