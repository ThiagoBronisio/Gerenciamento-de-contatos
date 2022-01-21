import React from 'react';
import RegisterForms from '../forms/RegisterForms';

const RegisterPage = () => (
    <div className="row justify-content-center d-flex">
        <div className="col-12 col-lg-3 mt-4">
                <div className="card shadow" style={{borderRadius: 15}}>
                    <div className="card-body p-4">
                        <div className="text-center">
                            <i className="far fa-address-book text-light p-3" style={{fontSize:"65px"}}></i>
                            <h5 className='baloo text-secondary'>Cadastre-se para acessar seus contatos.</h5>                      
                        </div>
                    <RegisterForms/>
                    </div>
                </div>
        </div>
    </div>


    
)
export default RegisterPage;