import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <section className="container-fluid">
            <div className="row mt-5">
                <div className="col-md-8 offset-md-2">
                            <h2 className="card-title text-center"><span className="iconify-inline me-2" data-icon="line-md:alert-loop"></span>Página não encontrada!</h2>
                            <div className="alert alert-warning mt-5 text-center" role="alert">
                                A página que você tentou acessar não existe!
                            </div>
                            <div className="d-flex justify-content-center ">
                                <Link to={'..'} className="btn btn-lg btn-success">Voltar para a Página Inicial</Link>
                            </div>

                </div>
            </div>
        </section>
    );
}