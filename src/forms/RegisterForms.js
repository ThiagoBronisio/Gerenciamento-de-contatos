import React from 'react'

export default function RegisterForms() {
    return (
        <form>
            <div className='row justify-content-center d-flex mb-1 mt-3'>
                <div className='col-md-12 baloo'>
                    <input 
                        type="text" 
                        className='form-control'
                        placeholder='Nome completo'>
                    </input>
                </div>
            </div>

            <div className='row mb-1'>
                <div className='col-md-12 baloo'>
                    <input 
                        type="email" 
                        className='form-control'
                        placeholder='Endereço de e-mail'>
                    </input>
                </div>
            </div>

            <div className='row mb-1'>
                <div className='col-md-12 baloo'>
                    <input 
                        type="password" 
                        className='form-control'
                        placeholder='Senha'>
                    </input>
                </div>
            </div>

            <div className='row mb-1'>
                <div className='col-md-12 baloo'>
                    <input 
                        type="password" 
                        className='form-control'
                        placeholder='Confirme a senha'>
                    </input>
                </div>
            </div>
            <button type='submit' className='btn btn-primary btn-sm col-12 mt-3'>Cadastre-se</button>
            <p className='text-center text-secondary mt-3' 
                style={{fontSize:11}}>Ao se cadastrar, você concorda com nossos Termos, Política de Dados e Política de Cookies.
            </p>
        </form>
    )
}