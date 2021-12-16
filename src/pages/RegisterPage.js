import React from 'react';
import RegisterForms from '../forms/RegisterForms';

const RegisterPage = () => (
    <div className="row">
        <div className="col-md-5 offset-md-4 mt-5">
            <div className="card">
                <div className="card-body">
                    <div className="text-center">
                        <h5>Criar conta de usuário</h5>
                        <p className="card-text">Preencha os campos abaixo, para criar sua conta</p>
                    </div>
                    <RegisterForms/>
                </div>
            </div>
        </div>
    </div>
)
export default RegisterPage;