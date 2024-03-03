<?php

namespace App\Services;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;

use function PHPUnit\Framework\throwException;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserService{

    public function __construct(
        private UserRepository $userRepository, 
        private UserPasswordHasherInterface $passwordHasher,
        private EntityManagerInterface $entityManager,
        private Security $security
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

    public function getSelf()
    {
        /** @var User */
        $user = $this->security->getUser();

        $userData = [
            'id' => $user->getId(),
            'username' => $user->getUsername(),
            'email' => $user->getEmail(),
        ];

        return $userData;
    }

}