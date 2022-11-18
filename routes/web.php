<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RenderSpaView;
use Illuminate\Support\Facades\Artisan;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// giao diện
Route::get('/{path?}', function () {
    return view('reactapp');
})->where('path', '.*');

