<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture
{
    private $userPasswordHasher;
    
    public function __construct(UserPasswordHasherInterface $userPasswordHasher)
    {
        $this->userPasswordHasher = $userPasswordHasher;
    }

    // Add references to share fixtures with PostFixtures
    public const ADMIN_REFERENCE = 'admin';
    public const USER_REFERENCE = 'user';

    public function load(ObjectManager $manager): void
    {
        // Create a user
        $user = new User();
        $user->setEmail("user@resrel.com");
        $user->setRoles(["ROLE_USER"]);
        $user->setUsername("Heisenberg");
        $user->setLastname("White");
        $user->setFirstname("Walter");
        $user->setPassword($this->userPasswordHasher->hashPassword($user, "password"));
        $manager->persist($user);
        $manager->flush();
        
        $this->addReference(self::USER_REFERENCE, $user);
        
        // Create a user with admin role
        $userAdmin = new User();
        $userAdmin->setEmail("admin@resrel.com");
        $userAdmin->setRoles(["ROLE_ADMIN"]);
        $userAdmin->setUsername("CaptnCook");
        $userAdmin->setLastname("Pinkman");
        $userAdmin->setFirstname("Jessy");
        $userAdmin->setPassword($this->userPasswordHasher->hashPassword($userAdmin, "password"));
        $manager->persist($userAdmin);
        $manager->flush();

        $this->addReference(self::ADMIN_REFERENCE, $userAdmin);
    }
}