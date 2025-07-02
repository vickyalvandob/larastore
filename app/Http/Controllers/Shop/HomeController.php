<?php

namespace App\Http\Controllers\Shop;

use Inertia\Inertia;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    public function get_home_data(){
        $categories = Category::select('id', 'name', 'slug', 'image', 'color')->latest()->get();
        return Inertia::render('home', [
            'categories' => $categories,
        ]);
    }
}
