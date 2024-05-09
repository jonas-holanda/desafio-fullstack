<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'nome' => 'João',
                'idade' => 35,
                'cep' => '10000-000',
                'rua' => 'Rua 001',
                'bairro' => 'Bairro 001',
                'numero' => '001',
                'cidade' => 'Cidade 001',
                'estado' => 'Estado 001',
                'imagem' => 'https://e7.pngegg.com/pngimages/698/39/png-clipart-computer-icons-user-profile-info-miscellaneous-face.png',
                'biografia' => 'Esta é a biografia de João...',
                'created_at' => date('Y-m-d H:i:s')
            ],
            [
                'nome' => 'Ana',
                'idade' => 28,
                'cep' => '20000-000',
                'rua' => 'Rua 002',
                'bairro' => 'Bairro 002',
                'numero' => '002',
                'cidade' => 'Cidade 002',
                'estado' => 'Estado 002',
                'imagem' => 'https://e7.pngegg.com/pngimages/439/19/png-clipart-avatar-user-profile-icon-women-wear-frock-face-holidays.png',
                'biografia' => 'Esta é a biografia da Ana...',
                'created_at' => date('Y-m-d H:i:s')
            ],
            [
                'nome' => 'Felipe',
                'idade' => 20,
                'cep' => '30000-000',
                'rua' => 'Rua 003',
                'bairro' => 'Bairro 003',
                'numero' => '003',
                'cidade' => 'Cidade 003',
                'estado' => 'Estado 003',
                'imagem' => 'https://e7.pngegg.com/pngimages/954/328/png-clipart-computer-icons-user-profile-avatar-heroes-head.png',
                'biografia' => 'Esta é a biografia de Felipe...',
                'created_at' => date('Y-m-d H:i:s')
            ],
        ]);
    }
}
