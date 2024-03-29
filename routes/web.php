<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\Student\ExamController;
use App\Http\Controllers\Student\ClassController;
use App\Http\Controllers\Student\ResultController;
use App\Http\Controllers\Student\AdmissionController;
use App\Http\Controllers\Student\LectureSheetController;
use App\Http\Controllers\Student\ProfileController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('/apply', [AdmissionController::class, 'showAdmissionForm'])->name('students.admission');
Route::post('/apply', [AdmissionController::class, 'storeAdmission']);
Route::get('/apply/confirmation', [AdmissionController::class, 'showConfirmation'])->name('students.admission-confirmation');


Route::prefix('students')->name('students.')->middleware('auth')->group(function() {
    Route::get('/', function () {
        return Inertia::render('Student/Dashboard');
    })->name('dashboard');

    Route::get('/classes', [ClassController::class, 'index'])->name('classes.index');
    Route::get('/classes/{schedule:class_id}', [ClassController::class, 'show'])->name('classes.show');
    Route::get('/classes/{class_id}/live', [ClassController::class, 'join'])->name('classes.join');
    
    // lecturesheets
    Route::get('/lecture-sheets', [LectureSheetController::class, 'index'])->name('lectureSheets.index');
    Route::get('/lecture-sheets/{lectureSheet}/download', [LectureSheetController::class, 'download'])->name('lectureSheets.download');

    //exams
    Route::get('/exams', [ExamController::class, 'index'])->name('exams.index');
    Route::get('/exams/{exam:exam_code}', [ExamController::class, 'startExam'])->name('exams.start');
    Route::post('/exam/{exam:exam_code}/finish', [ExamController::class, 'finishExam'])->name('exams.finish');

    // results
    Route::get('/results', [ResultController::class, 'index'])->name('results.index');
    Route::get('/results/{result:result_code}', [ResultController::class, 'resultSummary'])->name('results.summary');
    Route::get('/results/{result:result_code}/details', [ResultController::class, 'detailsResult'])->name('results.details');

    // profiles
    Route::get('/profile', [ProfileController::class, 'showProfile'])->name('profile.show');
    Route::put('/password/update', [ProfileController::class, 'updatePassword'])->name('password.update');
});

require __DIR__.'/auth.php';
