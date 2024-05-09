import api from "./api";

export async function getUsers() {
    return await api.get('/usuarios').then(response => response);
}

export async function getUser(id) {
    return await api.get(`/usuario/${id}`).then(response => response);
}

export async function deleteUser(id) {
    return await api.delete(`/usuario/${id}`).then(response => response);
}

export async function insertUser(usuario) {
    return await api.post('/usuario', usuario).then(response => response);
}

export async function updateUser(id, usuario) {
    return await api.put(`/usuario/${id}`, usuario).then(response => response).catch(error => {
        if (error.response) {
          console.log(error.response);
        }
      });
}