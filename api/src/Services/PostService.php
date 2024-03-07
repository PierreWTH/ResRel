<?php

namespace App\Services;

use App\Entity\Post;
use App\Repository\PostRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\SecurityBundle\Security;

class PostService{

    public function __construct(
        private PostRepository $postRepository, 
        private EntityManagerInterface $entityManager,
        private Security $security
        ){
        }
    
    public function postPost(Array $data) 
    {   
        $post = new Post();

        $post->setTitle($data['title']);
        $post->setContent($data['content']);
        $post->setUser($this->security->getUser());

        $this->entityManager->persist($post);
        $this->entityManager->flush($post);

        $postArray = $post->toResource();

        return $postArray;
    }

}