<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Services\AuthService;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\BaseApiController;

class AuthController extends BaseApiController
{
    /**
     * @OA\Post(
     *     path="/api/v2/register",
     *     @OA\Response(response="200",
     *     description="Register success"),
     *     tags={"Auth"},
     * 
     * @OA\Parameter(
     *      name="name",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string",
     *           description="User unique email address"
     *      )
     *   ),
     * @OA\Parameter(
     *      name="email",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string",
     *           format="email",
     *           description="User unique email address"
     *      )
     *   ),
     * @OA\Parameter(
     *      name="password",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string",
     *           format="password"
     *      )
     *   ),
     * )
     */

     /**
     * @OA\Post(
     *     path="/api/v2/login",
     *     @OA\Response(response="200",
     *     description="Login success"),
     *     tags={"Auth"},
     * 
     * @OA\Parameter(
     *      name="email",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string",
     *           format="email",
     *           description="User unique email address"
     *      )
     *   ),
     * @OA\Parameter(
     *      name="password",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string",
     *           format="password"
     *      )
     *   ),
     * )
     */



    protected $authService;

    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
    }

    public function register(Request $request)
    {
        $rules = [
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6'
        ];

        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            $error = "Request validation error";
            Log::error($error . " Abort.");
            return $this->sendJsonError($error, $validator->errors(), 422);
        }
        $request['password'] = bcrypt($request['password']);
        $data = $this->authService->create($request->all());
        return response()->json($data, $data['statusCode']);
    }

    public function login(Request $request) {
        $data = $this->authService->login($request->only(['email', 'password']));
        return response()->json($data['user'], $data['statusCode']);
    }
}
