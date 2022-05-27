<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
      //echo $request;  
      $products = Product::where('code',$request->code)->first();
       return $products;
      
        /* $products = Product::where('code',$request->code)->first();
        return $products;*/
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
            'code' =>'required|unique:products|max:50',
            'name' =>'required|max:50',
            'stock' =>'required|max:50',
            'categories_id' =>'required|exists:categories,id_categories',
        ]);
        if ($validator->fails()) {
            return $validator->errors();
        }

        $product = Product::create([
            'code' => $request->code,
            'name' => $request->name, 
            'price' => $request->price,
            'stock' => $request->stock, 
            'categories_id' => $request->categories_id
        ]);

        /*$product = new Product;
        $product->code = $request->code;
        $product->name = $request->name;
        $product->price = $request->price;
        $product->stock = $request->stock;
        $product->categories_id = $request->categories_id;
        $product->save();*/
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        return Product::all();
     
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
        Product::where('code', $request->code)
        ->update(['name' => $request->name, 
        'price' => $request->price,
        'stock' => $request->stock,
        'categories_id' => $request->categories_id]);
        $productos = DB::table('products')->get();
        return $productos;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $productos = Product::where('code', $request->code)->delete();
        $productos = DB::table('products')->get();
        return $productos;
    }
    public function showToken()
    {
        echo csrf_token();
    }
    
}
