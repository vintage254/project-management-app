<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        $user = $this -> route("user");
        return [
            "name" => ["required", "string", "max:255"],
            "email" => ["required", "string", "email" ,"unique:users,email".Rule::unique('users')->ignore($user->id),],
            "password" => ["nullable","confirmed", Password::min(8)->letters()->symbols()]
        ];
    }
}
