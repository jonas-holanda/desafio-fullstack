import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../../services/user-requests";

export default function Home() {

    const [qtdUsuarios, setqtdUsuarios] = useState('');
    useEffect(() => {
        carregaUsuarios();
    },[]);

    const carregaUsuarios = async () => {
        const usuariosResponse = await getUsers();
        const dadosUsuarios = await usuariosResponse.data;
        setqtdUsuarios(dadosUsuarios.length === 0 ? 0 : dadosUsuarios.length);
    }

    return (
        <>
        <section className="container-fluid">
            <div className="row mt-5">
                <div className="col-md-8 offset-md-2">
                
                            <h2 className="card-title text-center"><span className="iconify-inline me-2" data-icon="line-md:home"></span>Página Inicial</h2>
                            <div className="alert alert-success mt-5 text-center" role="alert">
                                Bem-vindo ao sistema!
                            </div>
                            
                            <div className="col-md-4 offset-md-4 text-center">

                                <div className="card mb-4 rounded-3 shadow-sm border-success">
                                    <div className="card-header py-3 text-bg-success border-success">
                                        <h4 className="my-0 fw-normal">Usuários Cadastrados</h4>
                                    </div>
                                    <div className="card-body">
                                        <h1 className="card-title pricing-card-title display-1"><strong>{qtdUsuarios}</strong></h1>
                                        <ul className="list-unstyled mt-3 mb-4">
                                            <li>Há {qtdUsuarios} usuários cadastrados no sistema.</li>
                                            <li>Para uma lista completa, clique no botão abaixo.</li>
                                        </ul>
                                        <Link to={'../usuario/view'} className="w-100 btn btn-lg btn-success">Ver Usuários</Link>
                                    </div>
                                </div>
                            </div>
                       

                </div>
            </div>
        </section>
        </>
    );
}