<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Branch_office;
use Illuminate\Support\Facades\Validator;

class Branch_officeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name' =>'required|max:50',
            'address' =>'required|max:50'
        ]);
        if ($validator->fails()) {
            return $validator->errors();
        }

        $product = Product::create([
            'name' => $request->code,
            'address' => $request->name,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        Product::where('name', $request->name)
        ->update(['address' => $request->address]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $branches = Product::where('name', $request->name)->delete();
        echo $branches;
    }
    public function showToken()
    {
        echo csrf_token();
    }
}
