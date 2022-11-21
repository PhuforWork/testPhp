<?php

namespace App\Http\Controllers;

use Facade\FlareClient\Stacktrace\File;
use Illuminate\Auth\Events\Validated;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

// use Illuminate\Filesystem\FilesystemManager;


class PostImgVideo extends Controller
{
    //
    public function postImage()
    {
        $request = request();
        if ($request->isMethod('POST')) {
            $arrLink = "";
            if ($request->hasFile('File')) {
                $file = $request->file('File');
                $fileName = strtolower($file->getClientOriginalName());
                $patch = "uploads/hosted" . "/" . date('Y') . "/" . date('m');
                // $arrResult = UploadFTP::upload($patch, $file, $fileName);
                $arrResult = Storage::disk('public')->putFileAs($patch, $file, $fileName);
                $arrLink = asset($arrResult);
                return response()->json($arrLink, 200);
            }
        }
    }

    public function postVideo()
    {
        $request = request();
        if ($request->isMethod('POST')) {
            $arrLink = "";
            if ($request->hasFile('File')) {

                $file = $request->file('File');
                $fileName = strtolower($file->getClientOriginalName());
                $patch = "uploads/video" . "/" . date('Y') . "/" . date('m');
                // $arrResult = UploadFTP::upload($patch, $file, $fileName);
                $videoResult = Storage::disk('public')->putFileAs($patch, $file, $fileName);
                $arrLink = asset($videoResult);
            }

            return response()->json($arrLink, 200);
        }
    }
}
