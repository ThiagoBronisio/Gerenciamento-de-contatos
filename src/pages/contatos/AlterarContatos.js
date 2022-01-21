import React from "react";
import AlterarContatosForms from "../../forms/AlterarContatosForms"

const CadastrarContatos = () => (
    <div className="container">
    <div className="row baloo">
        <div className="col-md-10 offset-1">
            <div className="card mt-3">
                <div className="card-body">
                    <div>
                        <h5 className="card-title text-light BaiJamjuree mb-4 text-center ">Editar contato</h5>
                        <AlterarContatosForms/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
)

export default CadastrarContatos;