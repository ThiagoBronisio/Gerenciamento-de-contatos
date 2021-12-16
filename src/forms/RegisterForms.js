import React from 'react'

export default function RegisterForms() {
    return (
        <form>

            <div class="form-group row">
                <label className="mt-4 mb-1">Nome do usuário:</label>
                <input
                    type="text"
                    placeholder="Nome e sobrenome"
                    className="form-control">                   
                </input>                
            </div>

            <div class="form-group row">
                <label className="mt-3">Email de acesso:</label>
                <input
                    type="email"
                    placeholder="Endereço de e-mail"
                    className="form-control">                   
                </input>                
            </div>

            <div class="form-group row">
                <label className="mt-3">Senha de acesso</label>
                <input
                    type="password"
                    placeholder="Senha"
                    className="form-control">                  
                </input>
                <input
                    type="password"
                    placeholder="Confirme sua senha"
                    className="form-control">                  
                </input> 
            </div>

            <div class="form-group row">
            <div class="col-md-12">
            <div className="text-center mt-4">
                <button
                    type="submit" 
                    class="btn btn-primary">
                        Criar conta
                </button>
            </div>
            </div>
            </div>
        </form>
            )
}