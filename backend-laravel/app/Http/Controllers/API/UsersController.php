<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\UsersModel;

class UsersController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $userId = $request->route()->parameter('id');
        if (empty($userId)) {
            $data = UsersModel::all();
        } else {
            $data = UsersModel::find($userId);
        }

        return response()->json($data);
    }

    public function store(Request $request): JsonResponse
    {

        $validateData = $request->validate(['*' => 'required']);
    
        $user = new UsersModel($validateData);
        
        if ($user->save()) {
            return response()->json(['message' => 'success'], 201);
        } else {
            return response()->json(['message' => 'error'], 500);
        }
        
    }

    public function update(Request $request): JsonResponse
    {

        $validateData = $request->validate([
            'nome' => 'required',
            'idade' => 'required',
            'cep' => 'required',
            'rua' => 'required',
            'bairro' => 'required',
            'numero' => 'required',
            'cidade' => 'required',
            'estado' => 'required',
            'imagem' => 'required',
            'biografia' => 'required',
        ]);
        $userId = $request->route()->parameter('id');
        $user = UsersModel::find($userId);
        
        if (!empty($user)) {

            $user->fill($validateData);
            if ($user->save()) {
                return response()->json(['message' => 'success']);
            } else {
                return response()->json(['message' => 'error'], 500);
            }

        } else {
            return response()->json(['message' => 'not found'], 404);
        }
        
    }

    public function delete(Request $request): JsonResponse
    {
        $userId = $request->route()->parameter('id');
        $user = UsersModel::find($userId);

        if (!empty($user)) {

            if ($user->delete()) {
                return response()->json(['deleted' => true]);
            } else {
                return response()->json(['deleted' => false], 500);
            }

        } else {
            return response()->json(['message' => 'not found'], 404);
        }
    }
}
