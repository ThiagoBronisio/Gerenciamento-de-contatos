import React from 'react'

export default function RegisterForms() {
    return (
        <form>
        
            <div className="form-group row">
            <div className="col-12">
                <label className="mt-4 mb-1">Nome do usuário:</label>
                <input
                    type="text"
                    placeholder="Nome e sobrenome"
                    className="form-control">        
                               
                </input>  
            </div>              
            </div>

            <div className="form-group row">
            <div className="col-12">
                <label className="mt-3 mb-1">Email de acesso:</label>
                <input
                    type="email"
                    placeholder="Endereço de e-mail"
                    className="form-control">                   
                </input>
            </div>               
            </div>

            <div className="row mt-2">
            <div className="col-md-6">
                <label className="mt-4">Senha de acesso:</label>
                <input
                    type="password"
                    placeholder="Senha"
                    className="form-control">                  
                </input>
            </div>
            <div className="col-md-6 mt-5">
                <input
                    type="password"
                    placeholder="Confirme sua senha"
                    className="form-control">                  
                </input> 
            </div>
            </div>

            <div className="form-group row">
            <div className="col-md-12">
            <div className="text-center mt-4">
                <button
                    type="submit" 
                    className="btn btn-primary">
                        Criar conta
                </button>
            </div>
            </div>
            </div>
        </form>
            )
}