import React from 'react'

export default function LoginForms() {
    return (
        <form>
            <div className="row mb-3">
                <div className="col-md-12">
                <label className="mb-2">E-mail:</label>
                <input 
                    type="email"
                    placeholder='Endereço de e-mail'
                    className='form-control'>
                </input>
                    <div 
                        id="emailHelp" 
                        className="form-text">
                        Nunca compartilharemos seu e-mail com mais ninguém.
                    </div>
                </div>
            </div>
            <div className="row mb-4">
            <div className="col-md-12">
            
                <label className="mb-2 mt-2">Senha:</label>
                <input 
                    type="password"
                    placeholder='Digite sua senha'
                    className="form-control">
                </input>
            </div>    
            </div>

            <div className="text-center">
            <div className="col-md-12">
                <button 
                    type="submit" 
                    className="btn btn-primary">
                    Acessar
                </button>
            </div>
            </div>
        </form>
    )
}