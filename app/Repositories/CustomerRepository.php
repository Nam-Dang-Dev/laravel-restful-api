<?php

namespace App\Repositories;

interface CustomerRepository extends Repository
{
    public function getDataByMonth($month);
}
