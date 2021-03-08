<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Batch;
use App\Models\Course;
use App\Models\Schedule;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;

class ScheduleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Admin/Class/Index', [
            'filters' => request()->all('search'),
            'schedules' => Schedule::filter(request()->only('search'))
                ->with(['course', 'batch', 'teacher'])
                ->latest()
                ->paginate(10)
                ->transform(function ($schedule) {
                    return [
                        'id' => $schedule->id,
                        'class_id' => $schedule->class_id,
                        'name' => $schedule->name,
                        'subject' => $schedule->subject,
                        'course' => $schedule->course->name,
                        'batch' => $schedule->batch->name,
                        'teacher' => $schedule->teacher ? $schedule->teacher->full_name : null,
                        'class_time' => Carbon::parse($schedule->class_time)->toDayDateTimeString(),
                        'status' => $schedule->status
                    ];
                })
        ]); 
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/Class/Create', [
            'courses' => Course::all()->map->only('id', 'name'),
            'teachers' => User::whereType('teacher')->get()->map->only('id', 'full_name'),        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'course' => ['required', 'numeric'],
            'batch' => ['required', 'numeric'],
            'teacher' => ['nullable', 'numeric'],
            'subject' => ['required', 'string', 'max:255'],
            'topics' => ['nullable', 'string'],
            'class_time' => ['required'],
        ]);

        Schedule::create([
            'class_id' => (string) Str::uuid(),
            'course_id' => $request->course,
            'batch_id' => $request->batch,
            'user_id' => $request->teacher,
            'name' => $request->name,
            'subject' => $request->subject,
            'topics' => $request->topics,
            'class_time' =>Carbon::parse($request->class_time),
        ]);

        return Redirect::route('admin.schedules.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Schedule  $schedule
     * @return \Illuminate\Http\Response
     */
    public function show(Schedule $schedule)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Schedule  $schedule
     * @return \Illuminate\Http\Response
     */
    public function edit(Schedule $schedule)
    {
        return Inertia::render('Admin/Class/Edit', [
            'schedule' => [
                'id' => $schedule->id,
                'class_id' => $schedule->class_id,
                'course' => $schedule->course()->first()->name,
                'batch' => $schedule->batch()->first()->name,
                'teacher' => $schedule->user_id,
                'name' => $schedule->name,
                'subject' => $schedule->subject,
                'topics' => $schedule->topics,
                'class_time' => Carbon::parse($schedule->class_time)
            ],
            'teachers' => User::whereType('teacher')->get()->map->only('id', 'full_name'),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Schedule  $schedule
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Schedule $schedule)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'teacher' => ['nullable', 'numeric'],
            'subject' => ['required', 'string', 'max:255'],
            'topics' => ['nullable', 'string'],
            'class_time' => ['required'],
        ]);

        $schedule->name = $request->name;
        $schedule->user_id = $request->teacher;
        $schedule->subject = $request->subject;
        $schedule->topics = $request->topics;
        $schedule->class_time = Carbon::parse($request->class_time);
        $schedule->save();

        return Redirect::route('admin.schedules.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Schedule  $schedule
     * @return \Illuminate\Http\Response
     */
    public function destroy(Schedule $schedule)
    {
        $schedule->delete();
        return back();
    }

    public function getBatches($courseId)
    {
        $batches = Batch::where('course_id', $courseId)->select('id', 'name')->get();
        return response()->json($batches);
    }
}
