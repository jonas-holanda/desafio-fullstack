<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id()->autoIncrement()->unsigned();
            $table->string('nome', 100);
            $table->integer('idade');
            $table->string('cep', 10);
            $table->string('rua', 100);
            $table->string('bairro', 100);
            $table->string('numero', 20);
            $table->string('cidade', 100);
            $table->string('estado', 100);
            $table->text('imagem');
            $table->text('biografia');
            $table->dateTime('created_at')->nullable(true)->default(null);
            $table->dateTime('updated_at')->nullable(true)->default(null);
            $table->dateTime('deleted_at')->nullable(true)->default(null);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
