<?php

namespace App\Controller;

use App\Services\UserService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

#[Route('/users')]
class UserController extends AbstractController
{   
    #[Route(methods: 'post')]
    public function postUser(UserService $userService, Request $request)
    {
        try{

            $data = $request->toArray();
            
            $user = $userService->postUser($data); 
            
            return new JsonResponse($user, 200);
        } catch (\Exception $e) {
            return new JsonResponse(['code' => $e->getCode(), 'message' => $e->getMessage()], 500);
        }

    }

    #[Route('/{id}',methods: 'delete')]
    public function deleteUser(UserService $userService, int $id)
    {
        try{
            
            $response = $userService->deleteUser($id); 

            return new JsonResponse($response, 200);
        } catch (\Exception $e) {
            return new JsonResponse(['code' => $e->getCode(), 'message' => $e->getMessage()], 500);
        }

    }

    #[Route('/me', methods: 'get')]
    public function getMe(UserService $userService)
    {
        try{
            $user = $userService->getSelf(); 
            
            return new JsonResponse($user, 200);
        } catch (\Exception $e) {
            return new JsonResponse(['code' => $e->getCode(), 'message' => $e->getMessage()], 500);
        }

    }

    #[Route('/{id}',methods: 'patch')]
    public function patchUser(UserService $userService, int $id, Request $request)
    {
        try{
            $data = $request->toArray();

            $response = $userService->patchUser($id, $data); 
            
            return new JsonResponse($response, 200);
        } catch (\Exception $e) {
            return new JsonResponse(['code' => $e->getCode(), 'message' => $e->getMessage()], 500);
        }

    }
}