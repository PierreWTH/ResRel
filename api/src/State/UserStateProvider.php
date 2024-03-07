<?php

namespace App\State;

use App\Repository\UserRepository;
use ApiPlatform\Metadata\Operation;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Get;
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

        if ($operation instanceof Get) {
            $user = $this->userRepository->find($uriVariables['id']);
        
            if(!$user){
                throw new \Exception('User not found', 404);
            }

            return $user->toResource();
        
        }
    }
}