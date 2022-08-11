<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->get('/authenticated', function () {
    return true;
});


Route::group(['prefix' => 'admin'], function(){
    // Auth::routes();
    Route::post('login', [LoginController::class, 'login']);
    Route::post('register', [RegisterController::class, 'register']);
    Route::post('logout', [LoginController::class, 'logout'])->name('logout');
});

Route::get('categories', [CategoryController::class, 'index']);

Route::post('add/category', [CategoryController::class, 'store']);

Route::get('delete/category/{id}', [CategoryController::class, 'destroy']);

Route::post('update/category/{id}', [CategoryController::class, 'update']);

Route::post('add/product', [ProductController::class, 'store']);

Route::get('products', [ProductController::class, 'index']);

Route::get('delete/product/{id}', [ProductController::class, 'destroy']);

Route::post('update/product/{id}', [ProductController::class, 'update']);

Route::get('latestProducts', [ProductController::class, 'latestProducts']);

Route::get('category/products/{id}', [CategoryController::class, 'categoryProducts']);
