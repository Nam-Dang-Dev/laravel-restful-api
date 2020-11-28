<?php

namespace App\Http\Middleware;

use Closure;

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\Middleware\Authenticate as Middleware;

class Authenticate extends Middleware
{
    // public function handle($request, Closure $next, ...$guards)
    // {
    //     // $error_status = $request->header('Authorization',"Bearer ".$request->bearerToken());
    //     // var_dump($request->header('Authorization'));
    //     $bearerToken = $request->header('Authorization', $request->bearerToken());
    //     // var_dump($bearerToken);
    //     if (!$bearerToken) {
    //         Log::info("Login Fail:Expired token  | Status:401");
    //         abort(401, 'Expired token');
    //     }
    //     return $next($request);
    // }
    protected function redirectTo($request)
    {
        var_dump(Auth::guard('api'));
        if (! $request->expectsJson()) {
            return route('login');
        }
    }
}
