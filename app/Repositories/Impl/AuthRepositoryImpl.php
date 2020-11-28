<?php

namespace App\Repositories\Impl;

use App\Repositories\AuthRepository;
use App\User;
use App\Repositories\Eloquent\EloquentRepository;

class AuthRepositoryImpl extends EloquentRepository implements AuthRepository
{
    // protected $model;

    // public function __construct()
    // {
    //     $this->model = $this->getModel();
    // }

    public function getModel()
    {
        $model = User::class;
        return $model;
    }
}
