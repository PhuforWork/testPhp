<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class modify_media_test extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'modify_media_tests';
    protected $fillable = ['name', 'types', 'creative'];
}
