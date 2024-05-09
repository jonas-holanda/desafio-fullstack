<div align='center'>

# Desafio Full Stack

</div>

**Neste desafio foi solicitado a criação de um CRUD de Usuários para o back-end. Juntamente com um front-end para fazer a integração e utilização dessa API.**

**Optei por fazer meu back-end com o PHP utilizando a framework Laravel. E no meu front-end utilizei o React com o Vite juntamente com o bootstrap.**

# Tecnologias Utilizadas no Back-end

<div align='center'>

![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white) ![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)  ![Dbeaver](https://img.shields.io/badge/dbeaver-382923?style=for-the-badge&logo=dbeaver&logoColor=white)

</div>

# Tecnologias Utilizadas no Front-end

<div align='center'>

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E) ![Axios](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white)

</div>

# O Processo de Desenvolvimento

## Back-end

- **Comecei pelo back-end, onde escolhi a framework PHP Laravel na versão 10.**
- **Após configurar o .env para a conexão com o banco de dados e criar model/controller, criei uma migration de Usuários e um seeder para popular a tabela com uns usuários de teste. Depois fui para o desenvolvimento da API.**
- **Implementei o softdelete, para que os dados possam ser recuperados e manter um histórico.**
- **No meu controller fiz os métodos de inserir, buscar, buscar pelo ID, atualizar e deletar os usuários. Onde coloquei verificações, para que não pudessem ser passados valores vazios para o banco de dados.**
- **Adicionei o CORS e coloquei o endereço do meu front-end. Para garantir uma navegação segura.**

## Front-end

- **Escolhi o react juntamente com o vite, que é uma tecnologia front-end que vi recentemente e estou achando interessante para a criação de SPAs(single pages applications).**
- **Bibliotecas que adicionei para o desenvolvimento do front: Bootstrap(para me auxiliar no desenvolvimento da interface), Axios(para fazer a conexão com o meu back-end) e o Yup(que utilizei para a validação dos dados).**
- **Também adicionei a biblioteca de ícones Iconify e o SweetAlert2 para janelas de alerta mais elegantes.**
- **Criei as páginas (Home, Adicionar Usuário, Editar Usuário, Listar Usuários, Não Encontrado) e os componentes de Cabeçalho e Rodapé.**
- **Sobre a página Listar Usuários, adicionei no botão de 'Excluir' uma janela de confirmação da exclusão dos dados. Onde só é excluído quando for confirmado nessa janela.**
- **E para as páginas de 'Editar' e 'Adicionar', inseri a busca pelo CEP, utilizando a API ViaCep para assim agilizar na hora do preenchimento dos dados. Ainda nessas páginas coloquei para que ao realizar uma ação de submissão por exemplo, o botão é substituído por um gif de carregando, assim evitando da pessoa realizar a mesma solicitação novamente.**

# Acesso aos Projetos

**Back-end: [https://github.com/jonas-holanda/desafio-fullstack/backend-laravel](https://github.com/jonas-holanda/desafio-fullstack/backend-laravel)**

**Front-end: [https://github.com/jonas-holanda/desafio-fullstack/frontend-react](https://github.com/jonas-holanda/desafio-fullstack/frontend-react)**

<p align="center">
    <strong>Copyright © <a href="https://github.com/jonas-holanda" target="_blank">Jonas Holanda</a>. All Rights Reserved.</strong>
</p>