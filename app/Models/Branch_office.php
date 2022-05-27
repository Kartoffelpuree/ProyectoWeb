<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Branch_office extends Model
{
    use HasFactory;
    protected $fillable=[
        'name',
        'address',
    ];
    public function employee(){
        return $this->hasMany(Employee::class);
    }
}