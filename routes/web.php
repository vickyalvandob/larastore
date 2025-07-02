<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Shop\HomeController;

Route::get('/', [HomeController::class, 'get_home_data'])->name('home');

Route::get('/detail', function () {
    return Inertia::render('product-details');
})->name('detail');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard/index');
    })->name('dashboard');
     Route::get('dashboard/products', function () {
        return Inertia::render('dashboard/products/index');
    })->name('products');
     Route::get('dashboard/categories', function () {
        return Inertia::render('dashboard/categories/index');
    })->name('categories');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
