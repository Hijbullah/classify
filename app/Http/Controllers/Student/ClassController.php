<?php

namespace App\Http\Controllers\Student;

use App\Models\Schedule;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Student;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ClassController extends Controller
{
    public function index()
    {
        $user = Student::where('user_id', Auth::id())->select('course_id', 'batch_id')->first();

        return Inertia::render('Student/Class/Index', [
            'currentClass' => Schedule::where([
                                'course_id' => $user->course_id, 
                                'batch_id' => $user->batch_id,
                                'status' => 'ongoing'
                            ])
                            ->whereNotNull('meeting_id')
                            // ->whereDate('class_time', now())
                            ->oldest('class_time')
                            ->with('teacher:id,first_name,last_name')
                            ->first(),

            'nextClasses' => Schedule::where([
                                'course_id' => $user->course_id, 
                                'batch_id' => $user->batch_id,
                                'status' => 'pending'
                            ])
                            ->whereDate('class_time', '>=', now())
                            ->oldest('class_time')
                            ->with('teacher:id,first_name,last_name')
                            ->take(10)
                            ->get()
                            ->transform(function($class) {
                                return [
                                    'id' => $class->id,
                                    'name' => $class->name,
                                    'class_id' => $class->class_id,
                                    'subject' => $class->subject,
                                    'topics' => $class->topics,
                                    'teacher' => $class->teacher->full_name,
                                    'class_time' => Carbon::parse($class->class_time)->toDayDateTimeString()
                                ];
                            })
        ]);
    }

    public function join($classId)
    {
        $schedule = Schedule::whereClassId($classId)
                    ->where('status', 'ongoing')
                    ->firstOrFail();  
                    
        return Inertia::render('LiveClass/LiveClass', [
            'classId' => $schedule->class_id,
            'subject' => $schedule->name,
            'meetingId' => $schedule->meeting_id,
            'userInfo' => [
                'name' => Auth::user()->full_name,
                'email' => Auth::user()->email
            ],
            'mode' => 'join',
            'backRoute' => 'students.classes.index'
        ]);
    }
}
