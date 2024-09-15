<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;


Route::get('/', function () {
    return view('page');
})->name('home');

Route::get('/about', function () {
    return view('components/about');
})->name('about');

Route::get('/achievements', function () {
    return view('achievements');
})->name('achievements');

Route::get('/contacts', function () {
    return view('contacts');
})->name('contacts');