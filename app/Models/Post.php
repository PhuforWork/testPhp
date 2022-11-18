<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Http\Controllers\ControllerPostTest;


class Post extends Model
{
    use HasFactory;
    protected $table = 'posts';
    protected $fillable = ['email', 'password'];
    public function role(){
        return $this->belongsTo(roles::class,'role_id','role_id');
    }
}
