<?php

namespace App\Repositories\Impl;

use App\Repositories\AuthRepository;
use App\User;
use App\Repositories\Eloquent\EloquentRepository;

class AuthRepositoryImpl extends EloquentRepository implements AuthRepository
{
    protected $model;

    public function __construct()
    {
        $this->model = app()->make($this->getModel());
    }

    public function getModel()
    {
        $model = User::class;
        return $model;
    }

    public function login($user)
    {
        $user = auth()->attempt($user);
        if(!$user) {
            return ['message' => 'Invalid Credentials'];
        }
        $accessToken = auth()->user()->createToken('authToken')->accessToken;
        return (['user' => auth()->user(), 'access_token' => $accessToken]);
    }
}
