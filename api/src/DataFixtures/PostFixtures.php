<?php

namespace App\DataFixtures;

use App\Entity\Post;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class PostFixtures extends Fixture
{    
    public function load(ObjectManager $manager): void
    {
        $post = new Post();
        $post->setTitle("Mon premier post - Lorem Elsass ipsum");
        $post->setContent("Lorem Elsass ipsum Salut bisamme id, risus, pellentesque Verdammi purus aliquam Huguette ch'ai nüdle leverwurscht Kabinetpapier vulputate Pellentesque adipiscing nullam Oberschaeffolsheim Gal. hopla rhoncus hopla sed geïz schneck  Mauris varius amet tchao bissame");
        $manager->persist($post);

        $post = new Post();
        $post->setTitle("Mon deuxieme post - Salut bisamme id ");
        $post->setContent("Carola ornare wie merci vielmols tristique semper turpis Hans rossbolla tellus libero, salu quam. lacus eleifend Heineken kougelhopf tellus réchime sagittis mamsell elit sit météor amet Christkindelsmärik Miss Dahlias");
        $manager->persist($post);

        $manager->flush();
   }
}