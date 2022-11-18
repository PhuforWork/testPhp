<?php

namespace App\Http\Controllers;

use App\Models\mediatest;
use App\Models\modify_media_test;
use Illuminate\Http\Request;

class ControllerPostmedia extends Controller
{
    //
    public function postMedia()
    {
        $request = request();
        if ($request->isMethod('POST')) {
            $data = request()->all();

            $name = isset($data['name']) ? $data['name'] : "";
            $type = isset($data['type']) ? $data['type'] : "";
            $creative = isset($data['link']) ? $data['link'] : "";

            $dataJson = [
                'name' => $name,
                'type' => $type,
                'creative' => $creative
            ];
            $mediaTest = new modify_media_test;
            $mediaTest->name = $name;
            $mediaTest->types = $type;
            $mediaTest->creative = $creative;
            $mediaTest->save();

            return response()->json($dataJson, 200);
        }
    }
}
