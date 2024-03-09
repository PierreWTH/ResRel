<?php

namespace App\Services;

use App\Entity\Post;
use App\Repository\PostRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\JsonResponse;

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

    public function patchPost(Int $id, Array $data) 
    {   
        $post = $this->postRepository->find($id);

        if(!$post){
            throw new \Exception('Post not found', 404);
        }

        if (isset($data['title'])) {
            $post->setTitle($data['title']);
        }
    
        if (isset($data['content'])) {
            $post->setContent($data['content']);
        }
    
        $this->entityManager->persist($post);

        $this->entityManager->flush($post);

        return $post->toResource();
    }

    public function deletePost(Int $id) 
    {   
        $post = $this->postRepository->find($id);

        if(!$post){
            throw new \Exception('Post not found', 404);
        }

        $this->entityManager->remove($post);

        $this->entityManager->flush($post);

        return ['message' => 'Post deleted'];
    }

}