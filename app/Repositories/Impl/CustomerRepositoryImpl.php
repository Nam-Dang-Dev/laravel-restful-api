<?php

namespace App\Repositories\Impl;

use App\Customer;
use App\Repositories\CustomerRepository;
use App\Repositories\Eloquent\EloquentRepository;

class CustomerRepositoryImpl extends EloquentRepository implements CustomerRepository
{
    // protected $model;

    // public function __construct()
    // {
    //     $this->model = $this->getModel();
    // }


    public function getModel()
    {
        $model = Customer::class;
        return $model;
    }

    public function getDataByMonth($month){
        return $month;
    }
}
