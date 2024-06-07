import * as Yup from 'yup';

export const mensagem = (titulo, texto, icone) => {
    Swal.fire({
        title: titulo,
        text: texto,
        icon:  icone,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33"
    });
}

export const schema = Yup.object().shape({
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
}).noUnknown();