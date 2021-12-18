import React from 'react';
import RegisterForms from '../forms/RegisterForms';

const RegisterPage = () => (
    <div className="row justify-content-center d-flex">
        <div className="col-md-3 mt-5">
                <div className="card shadow">
                    <div className="card-body">
                        <div className="text-center">
                            <i className="fab fa-react text-primary p-3" style={{fontSize:"80px"}}></i>
                            <h5 className='baloo text-secondary'>Cadastre-se para acessar seus contatos.</h5>                      
                        </div>
                    <RegisterForms/>
                    </div>
                </div>
        </div>
    </div>


    
)
export default RegisterPage;