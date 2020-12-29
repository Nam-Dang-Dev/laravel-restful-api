<?php

namespace App\Services;

interface CustomerService
{
    public function getAll();

    public function create($customer);

    public function findById($id);

    public function getDataByMonth($month);

    public function update($id, $data);

    public function delete($id);
}
