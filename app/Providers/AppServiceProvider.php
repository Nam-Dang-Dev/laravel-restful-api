<?php

namespace App\Providers;

use App\Services\AuthService;
use App\Services\CustomerService;
use App\Repositories\AuthRepository;
use App\Services\Impl\AuthServiceImpl;
use Illuminate\Support\ServiceProvider;
use App\Repositories\CustomerRepository;
use App\Services\Impl\CustomerServiceImpl;
use App\Repositories\Impl\AuthRepositoryImpl;
use App\Repositories\Impl\CustomerRepositoryImpl;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(
            CustomerRepository::class,
            CustomerRepositoryImpl::class
        );
        $this->app->singleton(
            CustomerService::class,
            CustomerServiceImpl::class
        );

        $this->app->singleton(
            AuthRepository::class,
            AuthRepositoryImpl::class
        );
        $this->app->singleton(
            AuthService::class,
            AuthServiceImpl::class
        );
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
