<?php

namespace App\Repositories;

interface AuthRepository extends Repository
{
    public function login($user);
}
