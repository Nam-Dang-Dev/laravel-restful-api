<?php

namespace App\Services;

interface AuthService
{
    public function create($user);

    public function login($user);
}
