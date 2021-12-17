import React from 'react';
import RegisterForms from '../forms/RegisterForms';

const RegisterPage = () => (
    <div className="row">
        <div className="col-md-5 offset-md-4 mt-5">
            <div className="card shadow">
                <div className="card-body">
                    <div className="text-center">
                        <h5 className='baloo'>Criar conta de usuário</h5>
                        
                    </div>
                    <RegisterForms/>
                </div>
            </div>
        </div>
    </div>
)
export default RegisterPage;