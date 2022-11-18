<?php

namespace App\Http\Controllers;

use App\Models\modify_media_test;
use Illuminate\Http\Request;

class ControllerdeleteMedia extends Controller
{
    //
    public function deletedMedia($id)
    {
        $request = request();
        if ($request->isMethod('GET')) {
            $media = modify_media_test::findOrFail($id);
            if ($media) {
                $media->delete();
                echo $media;
            }
        }
    }
}
