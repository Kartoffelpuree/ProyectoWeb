<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;
    protected $fillable=[
        'name',
        'lastname',
        'email',
        'address',
        'id_branchOffice'
    ];
    public function branch_office(){
        return $this->belongsTo(Branch_office::class);
    }
}