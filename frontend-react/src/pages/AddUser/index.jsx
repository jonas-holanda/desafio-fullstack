import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { insertUser } from "../../services/user-requests";
import * as Yup from 'yup';

export default function AddUser() {

    const navigate = useNavigate();
    const [usuario, setUsuario] = useState({
        nome: '',
        idade: '',
        cep: '',
        rua: '',
        bairro: '',
        numero: '',
        cidade: '',
        estado: '',
        imagem: '',
        biografia: '',
    });
    
    const schema = Yup.object().shape({
        nome: Yup.string().required('O campo nome é obrigatório!'),
        idade: Yup.number().typeError('O campo idade só aceita números!').required('O campo idade é obrigatório!'),
        cep: Yup.string().required('O campo CEP é obrigatório!'),
        rua: Yup.string().required('O campo rua é obrigatório!'),
        bairro: Yup.string().required('O campo bairro é obrigatório!'),
        numero: Yup.string().required('O campo número é obrigatório!'),
        cidade: Yup.string().required('O campo cidade é obrigatório!'),
        estado: Yup.string().required('O campo estado é obrigatório!'),
        imagem: Yup.string().required('O campo imagem é obrigatório!'),
        biografia: Yup.string().required('O campo biografia é obrigatório!'),
    });

    const [erros, setErros] = useState({});
    const [loading, setLoading] = useState(false);
    const [loadingCep, setLoadingCep] = useState(false);

    const handleChange = (event) => {

        const { name, value } = event.target;
        setUsuario((usuarioAnterior) => {
            return {
                ...usuarioAnterior,
                [name]: value
            }
        }
        );
    }

    const fetchCep = async () => {
        setLoadingCep(true);
        let cepValidado = usuario.cep.replace(/[^0-9]/g,'');

        if (cepValidado.length === 8) {
            const url = `https://viacep.com.br/ws/${cepValidado}/json/`;

            const response = await fetch(url);
            
            if (response.status === 200) {
                const data = await response.json();

                if (!(data.erro == true)) {
                    setUsuario((usuarioAnterior) => {
                        return {
                            ...usuarioAnterior,
                            cep: data.cep,
                            rua : data.logradouro,
                            bairro: data.bairro,
                            cidade: data.localidade,
                            estado: data.uf
                        }
                    });
                    setLoadingCep(false);
                }
                setLoadingCep(false);
            }
        } else {
            setLoadingCep(false);
            return;
        }
    }

    const salvaUsuario = async (event) => {
        event.preventDefault();
        const novosErros = {};

        for (const campo in usuario) {
            if (campo === 'idade') {
                if (usuario[campo]) usuario[campo] = parseInt(usuario[campo], 10);
            }

            try {
                await schema.validateAt(campo,usuario);
            } catch (error) {
                novosErros[campo] = error.message;
            }
        }

        setErros(novosErros);

        if (Object.keys(novosErros).length === 0) {
            setLoading(true);
            await insertUser(usuario);
            setLoading(false);
            navigate('/usuario/view');
            mensagem("Adicionado!", "Usuário adicionado com sucesso!", "success");
        }

    }

    const mensagem = (titulo, texto, icone) => {
        Swal.fire({
            title: titulo,
            text: texto,
            icon:  icone,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33"
        });
      }

    return (
        <>
        <h2 className="card-title text-center mb-4"><span className="iconify-inline me-1" data-icon="fluent:people-add-32-regular"></span> Adicionar Usuário</h2>
        <div className="d-flex card border-2 border-info p-2 rounded-4  text-center col-md-8 offset-md-2 mb-3 mb-5">
            <div className="card-body">
            <form className="row g-3" onSubmit={salvaUsuario} noValidate>
                    <div className="col-md-6">
                        <label role="button" htmlFor="inputNome"><strong><span className="iconify-inline me-1" data-icon="line-md:person-twotone"></span>Nome</strong></label>
                        <input
                            type="text" className="form-control border-info border-2" id="inputNome" required
                            name="nome"
                            value={usuario.nome}
                            onChange={handleChange} />
                            {erros.nome ? <p className="text-danger">{erros.nome}</p> : ''}
                    </div>
                    <div className="col-md-3">
                        <label role="button" htmlFor="inputIdade"><strong><span className="iconify-inline me-1" data-icon="fluent:clipboard-number-123-28-regular"></span>Idade</strong></label>
                        <input
                            type="number" className="form-control border-info border-2" id="inputIdade" required
                            name="idade"
                            min={0}
                            max={150}
                            value={usuario.idade}
                            onChange={handleChange} />
                            {erros.idade ? <p className="text-danger">{erros.idade}</p> : ''}
                    </div>
                    <div className="col-md-3">
                        <label role="button" htmlFor="inputCep"><strong><span className="iconify-inline me-1" data-icon="line-md:map-marker-alt"></span>Cep</strong></label>
                        <input
                            type="text" className="form-control border-info border-2" id="inputCep" required
                            name="cep"
                            value={usuario.cep}
                            onChange={handleChange} />
                            {erros.cep ? <p className="text-danger">{erros.cep}</p> : ''}
                            {loadingCep ?  <img src="/images/loading.gif" /> : <button type="button" onClick={fetchCep} className="btn btn-sm btn-secondary mt-1 rounded-4"><span className="iconify-inline me-2" data-icon="line-md:search-twotone"></span>Buscar Cep</button>}
                    </div>
                
                    <div className="col-md-5">
                        <label role="button" htmlFor="inputRua"><strong><span className="iconify-inline me-1" data-icon="line-md:map-marker-alt"></span>Rua</strong></label>
                        <input
                            type="text" className="form-control border-info border-2" id="inputRua" required
                            name="rua"
                            value={usuario.rua}
                            onChange={handleChange} />
                            {erros.rua ? <p className="text-danger">{erros.rua}</p> : ''}
                    </div>
                    <div className="col-md-5">
                        <label role="button" htmlFor="inputBairro"><strong><span className="iconify-inline me-1" data-icon="line-md:map-marker-alt"></span>Bairro</strong></label>
                        <input
                            type="text" className="form-control border-info border-2" id="inputBairro" required
                            name="bairro"
                            value={usuario.bairro}
                            onChange={handleChange} />
                            {erros.bairro ? <p className="text-danger">{erros.bairro}</p> : ''}
                    </div>
                    <div className="col-md-2">
                        <label role="button" htmlFor="inputNumero"><strong><span className="iconify-inline me-1" data-icon="line-md:map-marker-alt"></span>Número</strong></label>
                        <input
                            type="text" className="form-control border-info border-2" id="inputNumero" required
                            name="numero"
                            value={usuario.numero}
                            onChange={handleChange} />
                            {erros.numero ? <p className="text-danger">{erros.numero}</p> : ''}
                    </div>
            
               
                    <div className="col-md-6">
                        <label role="button" htmlFor="inputCidade"><strong><span className="iconify-inline me-1" data-icon="line-md:map-marker-alt"></span>Cidade</strong></label>
                        <input
                            type="text" className="form-control border-info border-2" id="inputCidade" required
                            name="cidade"
                            value={usuario.cidade}
                            onChange={handleChange} />
                            {erros.cidade ? <p className="text-danger">{erros.cidade}</p> : ''}
                    </div>
                    <div className="col-md-6">
                        <label role="button" htmlFor="inputEstado"><strong><span className="iconify-inline me-1" data-icon="line-md:map-marker-alt"></span>Estado</strong></label>
                        <input
                            type="text" className="form-control border-info border-2" id="inputEstado" required
                            name="estado"
                            value={usuario.estado}
                            onChange={handleChange} />
                            {erros.estado ? <p className="text-danger">{erros.estado}</p> : ''}
                    </div>
              
                <div className="col-md-12">
                    <label role="button" htmlFor="inputImagem"><strong><span className="iconify-inline me-1" data-icon="line-md:image-twotone"></span>Imagem</strong></label>
                    <input
                        type="text" className="form-control border-info border-2" id="inputImagem" required
                        name="imagem"
                        value={usuario.imagem}
                        onChange={handleChange} />
                        {erros.imagem ? <p className="text-danger">{erros.imagem}</p> : ''}
                </div>
                <div className="col-md-12">
                    <label role="button" htmlFor="inputBiografia"><strong><span className="iconify-inline me-1" data-icon="line-md:coffee-half-empty-twotone-loop"></span>Biografia</strong></label>
                    <textarea
                         className="form-control border-info border-2" id="inputBiografia" required
                        name="biografia"
                        value={usuario.biografia}
                        onChange={handleChange} />
                        {erros.biografia ? <p className="text-danger">{erros.biografia}</p> : ''}
                </div>
                <div className="d-flex justify-content-center">
                    { loading ? <img src="/images/loading.gif" /> : <button type="submit" className="btn btn-success"><span className="iconify-inline me-1" data-icon="fa-solid:user-plus"></span>Adicionar Usuário</button>}
                </div>
                </form>
            </div>
        </div>
        </>
    );
}