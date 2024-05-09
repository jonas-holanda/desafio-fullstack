import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../../services/user-requests";

export default function ViewUsers() {

    const [usuarios, setUsuarios] = useState([]);
    useEffect(() => {
        carregaUsuarios();
    },[]);

    const carregaUsuarios = async () => {
        const usuariosResponse = await getUsers();
        setUsuarios(await usuariosResponse.data);
    }

    const deleteUsuario = async (id) => {
        const usuariosResponse = await deleteUser(id);
        if (usuariosResponse.status === 200) {
            carregaUsuarios();
            return true;
        } else {
            return false;
        }
    }



    const modalConfirm = (nome, imagem, id) => {
        Swal.fire({
            imageUrl: imagem,
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: `imagem de ${nome}`,
            title: `Você deseja excluir o usuário: ${nome}`,
            showDenyButton: true,
            confirmButtonText: "Excluir",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            denyButtonText: `Fechar`
          }).then((result) => {
            if (result.isConfirmed) {
              if (deleteUsuario(id)) {
                  Swal.fire("Excluído!", "Usuário excluído com sucesso!", "success");
              } else {
                  Swal.fire("Erro!", "Não foi possível excluir o usuário!", "error");

              }

            }
          });
       
    }

    return (
        <>         
            <h2 className="card-title text-center mb-3"><span className="iconify-inline me-1" data-icon="mdi:people-group"></span> Lista de Usuários</h2>

            <div className="card border-0 rounded-4  text-center mb-3">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover  table-bordered border-info mb-5">
                            <thead>
                                <tr className="table-light border-info">
                                    <th>Nome</th>
                                    <th>Idade</th>
                                    <th>Endereço</th>
                                    <th>Imagem</th>
                                    <th>Biografia</th>
                                    <th>Ações</th>
                        
                                </tr>
                            </thead>
                            <tbody>
                                { usuarios.map( usuario => {

                                    return (
                                        <tr key={usuario.id} role="button">
                                            <td data-label="nome">{usuario.nome}</td>
                                            <td data-label="idade">{usuario.idade}</td>
                                            <td data-label="endereço">{usuario.rua}, {usuario.numero}, {usuario.bairro}, {usuario.cidade} - {usuario.estado}, {usuario.cep}</td>
                                            <td data-label="biografia">{usuario.biografia}</td>
                                            <td data-label="imagem"><img src={usuario.imagem} width="50" height="50" /></td>
                                            <td>
                                                <Link to={`../../usuario/edit/${encodeURIComponent(usuario.id)}`}><button className="btn btn-primary m-1" title={'Editar Usuario '+usuario.nome}><span className="iconify-inline" data-icon="mingcute:user-edit-fill"></span> Editar</button></Link>
                                                <button className="btn btn-danger m-1" onClick={() => modalConfirm(usuario.nome,usuario.imagem,usuario.id)}><span className="iconify" data-icon="mdi:trash"></span>Excluir</button>  
                                            </td>    
                                        </tr>
                                    );
                                    
                                })}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center mb-3">
                <Link className="btn btn-secondary" to={'../../usuario'}>Adicionar Usuário</Link>
            </div>
        </>
    );
}