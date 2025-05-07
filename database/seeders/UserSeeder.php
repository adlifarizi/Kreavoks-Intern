<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'admin',
            'email' => 'admin@gmail.com',
            'role' => 'admin',
            'status' => 'active',
            'password' => 'admin123'
        ]);
 
        User::create([
            'name' => 'mentor',
            'email' => 'mentor@gmail.com',
            'role' => 'mentor',
            'status' => 'active',
            'password' => 'mentor123'
        ]);

        User::create([
            'name' => 'customer',
            'email' => 'customer@gmail.com',
            'role' => 'customer',
            'status' => 'active',
            'password' => 'customer123'
        ]);
    }
}
