<?php

namespace App\Services\Impl;

use App\Services\AuthService;
use App\Repositories\AuthRepository;

class AuthServiceImpl implements AuthService
{
    protected $authRepository;

    public function __construct(AuthRepository $authRepository)
    {
        $this->authRepository = $authRepository;
    }


    public function create($user)
    {
        $user = $this->authRepository->create($user);

        $statusCode = 201;
        if(!$user) {
            $statusCode = 500;
        }

        $data = [
            'statusCode' => $statusCode,
            'user' => $user
        ];

        return $data;
    }
}
