<?php

namespace App\Repositories;

interface Repository
{
    public function getAll();

    public function create($data);

    public function findById($id);

    public function update($id, $customer);

    public function delete($id);

}
