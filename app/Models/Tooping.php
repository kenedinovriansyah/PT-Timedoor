<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tooping extends Model
{
    use HasFactory;

    protected $table = "tooping";
    protected $fillable = ["name", "cost", "product_id"];
}
