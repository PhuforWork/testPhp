<?php

namespace App\Http\Controllers;

use App\Models\getPer;
use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\Support\Facades\Hash;

class ControllerPostTest extends Controller
{
    //
    public function Register()
    {
        $request = request();
        if ($request->isMethod('POST')) {
            $data = request()->all();

            $email = isset($data['email']) ? $data['email'] : "";
            $password = isset($data['password']) ? $data['password'] : "";
            $dataJson = [
                'email' => $email,
                'password' => Hash::make($password)
            ];
            $Post = new Post;
            $Post->role_id = 2;
            $Post->email = $email;
            $Post->password = Hash::make($password);
            $Post->save();
            return response()->json($dataJson, 200);
        }
    }
    public function checkLogin()
    {
        $request = request();
        $data = request()->all();
        $email = $request->input('email');
        $password = $request->input('password');

        $user = Post::where('email', '=', $email)->with('role')->first();
        if (!$user) {
            return response()->json(['success' => false, 'message' => 'Login Fail, please check email'],400);
        }
        if (!Hash::check($password, $user->password)) {
            return response()->json(['success' => false, 'message' => 'Login Fail, please check password'], 400);
        } else {
            return response()->json(['success' => true, 'message' => 'success', 'data' => $user], 200);
        }

    }
}
