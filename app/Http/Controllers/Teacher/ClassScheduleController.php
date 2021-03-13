<?php

namespace App\Http\Controllers\Teacher;

use Inertia\Inertia;
use App\Models\Schedule;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Spatie\MediaLibrary\Support\MediaStream;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class ClassScheduleController extends Controller
{
    public function index()
    {
        return Inertia::render('Teacher/Class/Index', [
            
            'schedules' => Schedule::where('user_id', Auth::id())
                            ->with(['batch' => function($query) {
                                $query->select('id', 'name', 'course_id')->with('course:id,name');
                            }])
                            ->with('subject:id,name')
                            ->latest('class_time')
                            ->paginate(10)
                            ->transform(function($class) {
                                return [
                                    'id' => $class->id,
                                    'class_id' => $class->class_id,
                                    'course' => $class->batch->course->name,
                                    'batch' => $class->batch->name,
                                    'subject' => $class->subject->name,
                                    'name' => $class->name,
                                    'class_time' => $class->class_time->toDayDateTimeString(),
                                    'status' => $class->status,
                                ];
                            })
        ]);
    }

    public function show(Schedule $schedule)
    {
        $schedule->load(['batch' => function($query) {
                        $query->select('id', 'name', 'course_id')->with('course:id,name');
                    }]);
        $schedule->load('subject:id,name');

        return Inertia::render('Teacher/Class/Show', [
            'schedule' => [
               'id' => $schedule->id,
                'class_id' => $schedule->class_id,
                'course' => $schedule->batch->course->name,
                'batch' => $schedule->batch->name,
                'subject' => $schedule->subject->name,
                'name' => $schedule->name,
                'topics' => $schedule->topics,
                'class_time' => $schedule->class_time->toDayDateTimeString(),
                'status' => $schedule->status,
            ],
        ]);
    }

    public function showClassNotes(Schedule $schedule)
    {
        // $schedule->getMedia('class-notes')->dd();
        return Inertia::render('Teacher/Class/Note', [
            'schedule' => [
                'id' => $schedule->id,
                'class_id' => $schedule->class_id,
                'name' => $schedule->name
            ],
            'classNotes' => $schedule->getMedia('class-notes')->map(function(Media $media) {
                return [
                    'id' => $media->id,
                    'name' => $media->file_name,
                    'type' => $media->mime_type,
                    'size' => $media->human_readable_size,
                ];
            })
    
        ]);
    }

    public function uploadClassNote(Request $request, Schedule $schedule)
    {
        $request->validate([
            'file' => ['required', 'mimes:jpg,jpeg,png,svg,csv,xlsx,xls,pdf,doc,docx', 'max:2048']
        ]);

        $schedule->addMedia($request->file('file'))->toMediaCollection('class-notes');
        return back();
    }

    public function downloadAllNotes(Schedule $schedule)
    {
        return MediaStream::create($schedule->name . '.zip')->addMedia($schedule->getMedia('class-notes'));
    }

    public function downloadSingleNote(Media $media)
    {
        return $media;
    }

    public function deleteClassNote(Media $media)
    {
        $media->delete();
        return back();
    }
}
