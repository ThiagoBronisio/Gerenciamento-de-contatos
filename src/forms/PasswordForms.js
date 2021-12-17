import React from 'react'
import {NavLink} from 'react-router-dom'


export default function PasswordForms() {
    return (

        <form className='row justify-content-center d-flex'>

            <div className='col-9'>
                <h5 className='text-center text-primary baloo mb-4 mt-2'>Recuperar senha</h5>

                <label className='baloo text-black-75'>Digite seu e-mail</label>
                <input className='form-control' />

                <div className="d-grid gap-2 col-12 mx-auto m-4">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                            
                    <NavLink to="/">
                        <button className="btn btn-white mt-2 text-primary col-12" type="submit">Voltar</button>
                    </NavLink>
                </div>
            </div>

        </form>
    )
}