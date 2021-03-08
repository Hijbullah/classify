<?php

namespace App\Http\Controllers\Teacher;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class ProfileController extends Controller
{

    public function profile()
    {
        return Inertia::render('Teacher/Profile/Profile', [
            'teacher' => User::findOrFail(Auth::id())->only('id', 'first_name', 'last_name', 'email', 'phone')
        ]);
    }

    public function updateProfile(Request $request)
    {
        $request->validate([
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'phone' => ['nullable', 'min:11' ,'max:14', Rule::unique('users')->ignore(Auth::id())]
        ]);

        $teacher = Auth::user();

        $teacher->first_name = $request->first_name;
        $teacher->last_name = $request->last_name;
        $teacher->phone = $request->phone;
        $teacher->save();

        return back();
    }

    public function changePassword()
    {
        return Inertia::render('Teacher/Profile/UpdatePasswordForm');
    }

    public function updatePassword(Request $request)
    {
        $teacher = Auth::user();

        Validator::make($request->all(), [
            'current_password' => ['required', 'string'],
            'password' => ['required', 'string', 'confirmed',' min:8'],
        ])->after(function ($validator) use ($teacher, $request) {
            if (! isset($request->current_password) || ! Hash::check($request->current_password, $teacher->password)) {
                $validator->errors()->add('current_password', __('The provided password does not match your current password.'));
            }
        })->validate();

        $teacher->forceFill([
            'password' => Hash::make($request->password),
        ])->save();

        return back();
    }
}
