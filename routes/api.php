<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group([
    'namespace' => 'Api',
    'prefix' => 'v2',
    // 'middleware' => ['auth:api']
], function() {
    Route::get('/customers', 'CustomerController@index');
    Route::post('/customer', 'CustomerController@store');
    Route::get('/customer/{id}', 'CustomerController@show');
    Route::get('/customer-by-month/{month}', 'CustomerController@getDataByMonth');
});

Route::group([
    'namespace' => 'Api',
    'prefix' => 'v2',
], function() {
    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');
});
