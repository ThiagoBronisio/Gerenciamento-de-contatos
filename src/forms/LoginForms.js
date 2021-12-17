import React from 'react'
import { NavLink } from 'react-router-dom'

export default function LoginForms() {
    return (
        <form>
            <div className="row mb-2">
                <div className="col-md-12">
                    <label className="baloo">E-mail:</label>
                    <input
                        type="email"
                        className='form-control'>
                    </input>
                    <div id="emailHelp" className="form-text">
                        Nunca compartilharemos seu e-mail com mais ninguém.
                    </div>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-md-12">

                    <label className="baloo">Senha:</label>
                    <input type="password" className="form-control" />
                </div>
            </div>

            <div className="text-center">
                <div className="col-md-12">
                    <button type="submit" className="btn btn-primary col-12 baloo">
                        Acessar
                    </button>
                    <NavLink to="esqueci-minha-senha"><button type="submit" className="btn btn-white col-12 mt-2 baloo text-primary">
                        Esqueci senha
                    </button></NavLink>
                    <hr />
                    <NavLink to="/criar-conta"> <button type="submit" className="btn btn-success col-6 mt-2 baloo">
                        Criar conta
                    </button></NavLink>
                </div>
            </div>
        </form>
    )
}