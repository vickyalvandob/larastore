<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    protected $fillable =[
        'name',
        'slug',
        'image',
        'description',
        'color'
    ];
    public function products() : HasMany{
        return $this->hasMany(Product::class);
    }
}