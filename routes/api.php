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
//
Route::post('/logincheck', 'App\Http\Controllers\ControllerPostTest@checkLogin');
Route::post('/register', 'App\Http\Controllers\ControllerPostTest@Register');
Route::post('/media-form', 'App\Http\Controllers\ControllerPostmedia@postMedia');
Route::post('/update-media-form/{id}','App\Http\Controllers\ControllerMediaById@updateById');


Route::get('/media-table', 'App\Http\Controllers\ControllerGetmedia@getMedia');
Route::get('/get-media-id/{id}', 'App\Http\Controllers\ControllerMediaById@getById');
Route::get('/delete-media/{id}','App\Http\Controllers\ControllerdeleteMedia@deletedMedia');


Route::prefix('geturl/files')->group(function () {
    Route::post('/images', 'App\Http\Controllers\PostImgVideo@postImage');
    Route::post('/videos', 'App\Http\Controllers\PostImgVideo@postVideo');
});
