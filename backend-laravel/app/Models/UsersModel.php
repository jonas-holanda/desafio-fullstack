<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UsersModel extends Model
{
    use HasFactory;
    use SoftDeletes;
    
    protected $table = 'users';
    protected $fillable = ['nome', 'idade','cep', 'rua', 'bairro','numero',
                           'cidade', 'estado', 'imagem', 'biografia'];
}
