<?php

namespace App\Repositories\Eloquent;

use App\Repositories\Repository;
use Illuminate\Support\Facades\Log;

abstract class EloquentRepository implements Repository
{
    protected $model;

    public function __construct()
    {
        $this->model = $this->setModel();
    }

    abstract public function getModel();

    public function setModel()
    {
        return $this->model = app()->make($this->getModel());
    }

    public function getAll()
    {
        $result = $this->model->all();
        return $result;
    }

    public function create($customer)
    {
        try {
            $result = $this->model->create($customer);
        } catch (\Exception $e) {
            throw $e;
        }
        return $result;
    }

    public function findById($id)
    {
        try {
            $result = $this->model->findOrFail($id);
        } catch (\Exception $e) {
            throw $e;
        }
        return $result;
    }

    public function update($id, $data)
    {
        try {
            $result = $this->model->find($id);
            $result->update($data);
            $record = $result->refresh();
        } catch (\Throwable $e) {
            throw $e;
        }
        return $record;
    }

    public function delete($id)
    {
        try {
            $result = $this->model->find($id)->delete();
        } catch (\Throwable $e) {
            throw $e;
        }
        return $result;
    }
}
