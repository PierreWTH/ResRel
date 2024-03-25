<?php

namespace App\Services;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\SecurityBundle\Security;
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

    public function deleteUser(Int $id) 
    {   
        $user = $this->userRepository->find($id);

        if(!$user){
            throw new \Exception('User not found', 404);
        }

        $userPosts = $user->getPosts();

        if($userPosts){
            foreach($userPosts as $post){
                $post->setUser(null);
            }
        }

        $this->entityManager->flush();

        $this->entityManager->remove($user);

        $this->entityManager->flush($user);

        return ['message' => 'User deleted'];
    }

    public function patchUser(Int $id, Array $data) 
    {   
        $user = $this->userRepository->find($id);

        if(!$user){
            throw new \Exception('user not found', 404);
        }

        if (isset($data['username'])) {
            $user->setUsername($data['username']);
        }
    
        if (isset($data['firstname'])) {
            $user->setFirstname($data['firstname']);
        }

        if (isset($data['lastname'])) {
            $user->setLastname($data['lastname']);
        }

        if (isset($data['email'])) {
            $user->setEmail($data['email']);
        }
    
        $this->entityManager->persist($user);

        $this->entityManager->flush($user);

        return $user->toResource();
    }

    public function getSelf()
    {
        /** @var User */
        $user = $this->security->getUser();

        $userData = [
            'id' => $user->getId(),
            'username' => $user->getUsername(),
            'email' => $user->getEmail(),
            'roles' => $user->getRoles(),
        ];

        return $userData;
    }

}