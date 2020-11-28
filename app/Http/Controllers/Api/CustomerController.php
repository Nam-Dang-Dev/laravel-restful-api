<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Services\CustomerService;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class CustomerController extends Controller
{
    /**
     * @OA\Get(
     *     path="/api/v2/customers",
     *     @OA\Response(response="200",
     *     description="get all customers"),
     *     security={{"bearerAuth":{}}},
     * )
     */
    /**
     * @OA\Post(
     *     path="/api/v2/customer",
     *     @OA\Response(response="200",
     *     description="add new a customer"),
     *     security={{"bearerAuth":{}}},
     * 
     * @OA\Parameter(
     *      name="first_name",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *   ),
     * @OA\Parameter(
     *      name="last_name",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *   ),
     * )
     */

    protected $customerService;

    public function __construct(CustomerService $customerService)
    {
        $this->customerService = $customerService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        dd(Auth::user()->token());
        $customers = $this->customerService->getAll();
        return response()->json($customers, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $this->customerService->create(($request->all()));

        return response()->json($data['customer'], $data['statusCode']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = $this->customerService->findById($id);

        return response()->json($data['customer'], $data['statusCode']);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function getDataByMonth($month)
    {
        return $this->customerService->getDataByMonth($month);
    }
}
