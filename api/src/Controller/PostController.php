<?php

namespace App\Controller;

use App\Services\PostService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

#[Route('/posts')]
class PostController extends AbstractController
{   
    #[Route(methods: 'post')]
    public function postPost(PostService $postService, Request $request)
    {
        try{

            $data = $request->toArray();
            
            $user = $postService->postPost($data); 
            
            return new JsonResponse($user, 200);
        } catch (\Exception $e) {
            return new JsonResponse(['code' => $e->getCode(), 'message' => $e->getMessage()], 500);
        }

    }
}