<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table = "product";
    protected $fillable = ["name", "description", "user_id"];

    public function tooping() {
        return $this->belongsTo(Tooping::class);
    }

    public function cost() {
        return $this->belongsTo(Cost::class);
    }
}
