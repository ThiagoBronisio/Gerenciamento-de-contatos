import React from "react";
import ConsultarContatosGrid from "../../components/grids/ConsultarContatosGrid";

const ConsultarContatos = () => (
    <div className="container">
        <div className="row baloo">
            <div className="col-md-12">
                <div className="card mt-3">
                    <div className="card-body">
                        <div className="row">
                            <h5 className="card-title text-center mb-4 text-light BaiJamjuree">Consulta de contatos</h5>
                                <ConsultarContatosGrid />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default ConsultarContatos;