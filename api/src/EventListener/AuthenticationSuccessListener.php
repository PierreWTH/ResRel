<?php

declare(strict_types=1);

namespace App\EventListener;

use App\Repository\UserRepository;
use Doctrine\Persistence\ManagerRegistry;
use Lexik\Bundle\JWTAuthenticationBundle\Event\AuthenticationSuccessEvent;

class AuthenticationSuccessListener
{
    private $userRepository;

    public function __construct(ManagerRegistry $registry)
    {
        $this->userRepository = new UserRepository($registry);
    }

    public function onAuthenticationSuccessResponse(AuthenticationSuccessEvent $event)
    {
        $user = $this->userRepository->findOneBy([
            'email' => $event->getUser()->getUserIdentifier(),
        ]);

        $event->setData([
            'code' => $event->getResponse()->getStatusCode(),
            'token' => $event->getData()['token'],
            'username' => $user ? $user->getUsername() : null,
            'email' => $event->getUser()->getUserIdentifier(),
        ]);
    }
}
