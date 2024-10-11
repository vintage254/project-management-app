<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    public function project()
    {
        return $this->belongsTo(project :: class);
    }

    public function assignedUser()
    {
        return $this->belongsTo(user :: class, 'assigned_user_id');
    }

    public function createdBy()
    {
        return $this->belongsTo(user :: class, 'created_by');
    }

    public function updatedBy()
    {
        return $this->belongsTo(user :: class, 'updated_by');
    }
}
