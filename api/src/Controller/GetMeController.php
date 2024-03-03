<?php

namespace App\Controller;

use App\Services\UserService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;

class GetMeController extends AbstractController
{   
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
}