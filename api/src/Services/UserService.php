<?php

namespace App\Services;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

use function PHPUnit\Framework\throwException;

class UserService{

    public function __construct(
        private UserRepository $userRepository, 
        private UserPasswordHasherInterface $passwordHasher,
        private EntityManagerInterface $entityManager
        ){
        }

    
    public function postUser( Array $data) 
    {   
        $isEmailTaken = $this->userRepository->findOneBy(['email' => $data['email']]);

        if($isEmailTaken){
            throw new \RuntimeException(sprintf('Cette adresse mail est déja utilisée. '));
        }
        $user = new User();

        $user->setEmail($data['email']);
        $user->setUsername($data['username']);
        $user->setRoles(['ROLE_USER']);
        $user->setPassword($this->passwordHasher->hashPassword($user, $data['password']));

        $this->entityManager->persist($user);
        $this->entityManager->flush($user);

        $userArray = $user->toResource();

        return $userArray;
    }

}