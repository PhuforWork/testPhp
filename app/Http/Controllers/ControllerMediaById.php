<?php

namespace App\Http\Controllers;

use App\Models\modify_media_test;
use Illuminate\Http\Request;

class ControllerMediaById extends Controller
{
    //
    public function getById($id)
    {
        $request = request();
        if ($request->isMethod('GET')) {
            $editMedia = modify_media_test::find($id);
            return response()->json($editMedia, 200);
        }
    }
    public function updateById($id)
    {
        $request = request();
        if ($request->isMethod('POST')) {
            // $data = request()->all();
            modify_media_test::whereId($id)->update(['name' => $request->name, 'types' => $request->type, 'creative' => $request->link]);
        }
    }
}
