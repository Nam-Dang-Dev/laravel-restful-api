<?php

namespace App\Services\Impl;

use App\Repositories\CustomerRepository;
use App\Services\CustomerService;

class CustomerServiceImpl implements CustomerService
{
    protected $customerRepository;

    public function __construct(CustomerRepository $customerRepository)
    {
        $this->customerRepository = $customerRepository;
    }

    public function getAll()
    {
        $customers = $this->customerRepository->getAll();
        return $customers;
    }

    public function create($customer)
    {
        $customer = $this->customerRepository->create($customer);

        $statusCode = 201;
        if(!$customer) {
            $statusCode = 500;
        }

        $data = [
            'statusCode' => $statusCode,
            'customer' => $customer
        ];

        return $data;
    }

    public function findById($id)
    {
        $customer = $this->customerRepository->findById($id);

        $statusCode = 201;
        if(!$customer) {
            $statusCode = 500;
        }

        $data = [
            'statusCode' => $statusCode,
            'customer' => $customer
        ];

        return $data;
    }

    public function getDataByMonth($month)
    {
        $user = $this->customerRepository->getDataByMonth($month);
        return $user;
    }
}
