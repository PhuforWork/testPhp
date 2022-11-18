<?php

namespace App\Http\Controllers;

use App\Models\modify_media_test;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ControllerGetmedia extends Controller
{
    //
    public function getMedia()
    {
        $request = request();
        if ($request->isMethod('GET')) {
            $media = modify_media_test::all();
            return response()->json($media);
        }
    }
    
}
