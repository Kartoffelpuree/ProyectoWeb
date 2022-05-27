<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PassportAuthController;
use App\http\Controllers\ProductController;
use App\http\Controllers\Branch_office;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register', [PassportAuthController::class, 'register']);
Route::post('login', [PassportAuthController::class, 'login']);
//Rutas para los productos
Route::post('/product', [ProductController::class,'index']);
Route::get('/productToken', [ProductController::class,'showToken']);
Route::post('/productStore', [ProductController::class,'store']);
Route::post('/productUpdate', [ProductController::class,'update']);
Route::post('/productDelete', [ProductController::class,'destroy']);
Route::post('productShow', [ProductController::class,'show']);
//Rutas para las sucursales
Route::get('/branchestToken', [Branch_office::class,'showToken']);
Route::post('/branchestStore', [Branch_office::class,'store']);
Route::post('/branchestUpdate', [Branch_office::class,'update']);
Route::post('/branchestDelete', [Branch_office::class,'destroy']);

