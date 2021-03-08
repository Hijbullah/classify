<?php

namespace App\Http\Controllers\Teacher;

use Inertia\Inertia;
use App\Models\Schedule;
use Illuminate\Support\Carbon;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class ClassScheduleController extends Controller
{
    public function allClasses()
    {
        return Inertia::render('Teacher/Class/Index', [
            
            'schedules' => Schedule::where('user_id', Auth::id())
                            ->with('course:id,name')
                            ->with('batch:id,name')
                            ->latest('class_time')
                            ->paginate(10)
                            ->transform(function($class) {
                                return [
                                    'id' => $class->id,
                                    'name' => $class->name,
                                    'class_id' => $class->class_id,
                                    'subject' => $class->subject,
                                    'topics' => $class->topics,
                                    'class_time' => Carbon::parse($class->class_time)->toDayDateTimeString(),
                                    'status' => $class->status,
                                    'course' => $class->course->name,
                                    'batch' => $class->batch->name
                                ];
                            })
        ]);
    }
}
