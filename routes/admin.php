<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\ExamController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\BatchController;
use App\Http\Controllers\Admin\CourseController;
use App\Http\Controllers\Admin\StudentController;
use App\Http\Controllers\Admin\SubjectController;
use App\Http\Controllers\ImageUploaderController;
use App\Http\Controllers\Admin\QuestionController;
use App\Http\Controllers\Admin\ScheduleController;
use App\Http\Controllers\Admin\LiveClassController;
use App\Http\Controllers\Teacher\ProfileController;
use App\Http\Controllers\Admin\ExamCategoryController;
use App\Http\Controllers\Admin\ResultController;
use App\Http\Controllers\Teacher\ClassScheduleController;

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
|
| Here is where you can register admin's routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group and default prefix is 'admin'. 
| Now create something great!
| 
*/

Route::middleware(['auth', 'verified'])->group(function() {
    Route::prefix('admin')->name('admin.')->middleware('admin')->group(function() {
        Route::get('/', function () {
            return Inertia::render('Admin/Dashboard');
        })->name('dashboard');
    
        Route::resource('courses', CourseController::class)->scoped([
            'course' => 'slug',
        ]);
        Route::resource('batches', BatchController::class)->scoped([
            'batch' => 'slug',
        ]);
        Route::resource('subjects', SubjectController::class);
        Route::resource('schedules', ScheduleController::class);
        Route::get('/get-batches/{courseId}', [ScheduleController::class, 'getBatches']);

        Route::get('/students', [StudentController::class, 'allStudents'])->name('students.index');
        Route::get('/students/{student}', [StudentController::class, 'showStudent'])->name('students.show');

        Route::get('/applications', [StudentController::class, 'allApplication'])->name('applications.index');
        Route::get('/applications/{application}', [StudentController::class, 'showApplication'])->name('applications.show');
        Route::post('/applications/{application}', [StudentController::class, 'confirmApplication'])->name('applications.confirm');
        
        Route::resource('users', UserController::class); // admin and teacher

        Route::resource('exam-categories', ExamCategoryController::class);
        //exam
        Route::put('/exams/{exam}/publish', [ExamController::class, 'toogleExamPublication'])->name('exams.publish');
        Route::resource('exams', ExamController::class);
        // questions
        Route::get('/exams/{exam:exam_code}/questions', [QuestionController::class, 'index'])->name('questions.index');
        Route::get('/exams/{exam:exam_code}/questions/create/{type}', [QuestionController::class, 'create'])
                ->where('type', 'form|file')
                ->name('questions.create');

        Route::post('/questions/form', [QuestionController::class, 'store'])->name('questions.store.form');
        Route::get('/exams/{exam:exam_code}/questions/{question}/edit', [QuestionController::class, 'edit'])->name('questions.edit');
        Route::put('/questions/{question}', [QuestionController::class, 'update'])->name('questions.update');
        Route::delete('/questions/{question}', [QuestionController::class, 'destroy'])->name('questions.destroy');
        
        // results
        Route::get('exams/{exam:exam_code}/results', [ResultController::class, 'showExamResults'])->name('exams.results');
        Route::put('exams/{exam:exam_code}/publish-result', [ResultController::class, 'publishResults'])->name('exams.publish-results');

    });

    Route::prefix('teachers')->name('teachers.')->middleware('teacher')->group(function() {

        Route::get('/', function () {
            return Inertia::render('Teacher/Dashboard');
        })->name('dashboard');

        Route::get('/profile', [ProfileController::class, 'profile'])->name('profile');
        Route::put('/profile/update', [ProfileController::class, 'updateProfile'])->name('profile.update');

        Route::get('/password', [ProfileController::class, 'changePassword'])->name('password.change');
        Route::put('/password/update', [ProfileController::class, 'updatePassword'])->name('password.update');

        Route::get('/classes', [ClassScheduleController::class, 'allClasses'])->name('classes.index');
    }); 
    
    Route::get('/live/{class}/start', [LiveClassController::class, 'startClass'])->name('class.live.start');
    Route::post('/live-class-update/{classId}', [LiveClassController::class, 'updateLiveClass'])->name('class.live.update');
    Route::post('/live-class-end/{classId}', [LiveClassController::class, 'endLiveClass'])->name('class.live.end');

    // image uploader
    Route::post('images/upload', [ImageUploaderController::class, 'uploadImage'])->name('images.upload');
}); 


