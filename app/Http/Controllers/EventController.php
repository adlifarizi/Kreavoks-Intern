<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EventController extends Controller
{
    public function show($slug)
    {
        $event = Event::where('slug', $slug)->firstOrFail();
        return Inertia::render('details/EventDetail', ['event' => $event]);
    }
}
