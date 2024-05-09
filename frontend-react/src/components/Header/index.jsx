import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
        <nav className="navbar navbar-expand-md bg-light p-3">
            <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDesafio" aria-controls="navbarDesafio" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <span className="navbar-brand text-info"><strong>Desafio Full Stack</strong></span>
            <div className="collapse navbar-collapse" id="navbarDesafio">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={'..'}><span className="iconify-inline me-1" data-icon="line-md:home"></span><strong>Home</strong></Link>
                       
                    </li>
                    <li className="nav-item"> 
                    <Link className="nav-link " to={'../usuario/view'}><span className="iconify-inline me-1" data-icon="mdi:people-group"></span><strong>Usuários</strong></Link>
                    </li>
                    <li className="nav-item"> 
                    <Link className="nav-link" to={'../usuario'}><span className="iconify-inline me-1" data-icon="fa-solid:user-plus"></span><strong>Adicionar Usuário</strong></Link>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item"> 
                        <a className="nav-link" href="https://www.github.com/jonas-holanda" target="_blank"><span className="iconify-inline me-1" data-icon="line-md:github-loop"></span>Github</a>
                    </li>
                    <li className="nav-item"> 
                        <a className="nav-link" href="https://www.instagram.com/_jonasholanda" target="_blank"><span className="iconify-inline me-1" data-icon="line-md:instagram"></span>Instagram</a>
                    </li>
                    <li className="nav-item"> 
                        <a className="nav-link" href="https://www.linkedin.com/in/jonas-holanda/" target="_blank"><span className="iconify-inline me-1" data-icon="line-md:linkedin"></span>Linkedin</a>
                    </li>
                    <li className="nav-item"> 
                        <a className="nav-link" href="mailto:jonasholanda15@gmail.com" target="_blank"><span className="iconify-inline me-1" data-icon="line-md:email-twotone"></span>Contato</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
        </>
    );
}