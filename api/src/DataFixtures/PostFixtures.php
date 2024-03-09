<?php

namespace App\DataFixtures;

use App\Entity\Post;
use App\DataFixtures\UserFixtures;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class PostFixtures extends Fixture implements DependentFixtureInterface
{    
    public function load(ObjectManager $manager): void
    {
        $post = new Post();
        $post->setTitle("Mon premier post - Lorem Elsass ipsum");
        $post->setContent("Lorem Elsass ipsum Salut bisamme id, risus, pellentesque Verdammi.");
        $post->setUser($this->getReference(UserFixtures::USER_REFERENCE));
        $manager->persist($post);

        $post = new Post();
        $post->setTitle("Mon deuxieme post - Salut bisamme id ");
        $post->setContent("Carola ornare wie merci vielmols tristique semper turpis Hans rossbolla tellus libero, salu quam. lacus eleifend Heineken kougelhopf tellus réchime sagittis mamsell elit sit météor amet Christkindelsmärik Miss Dahlias");
        $post->setUser($this->getReference(UserFixtures::ADMIN_REFERENCE));
        $manager->persist($post);

        $manager->flush();
   }

   public function getDependencies()
    {
        return [
            UserFixtures::class,
        ];
    }
}