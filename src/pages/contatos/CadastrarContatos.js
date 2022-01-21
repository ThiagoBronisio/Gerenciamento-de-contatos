import React from "react";
import CadastrarContatosForms from "../../forms/CadastrarContatosForms";

const CadastrarContatos = () => (
    <div className="container">
    <div className="row baloo justify-content-center">
        <div className="col-12">
            <div className="card mt-3">
                <div className="card-body">
                    <div>
                        <h5 className="card-title text-light text-center BaiJamjuree mb-4">Cadastrar contato</h5>
                        <CadastrarContatosForms/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
)

export default CadastrarContatos;