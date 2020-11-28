<?php

namespace App\Repositories;

interface Repository
{
    public function getAll();

    public function create($data);

    public function findById($id);
}
