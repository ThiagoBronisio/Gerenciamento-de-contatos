import React from 'react';
import LoginForms from "../forms/LoginForms"

const LoginPage = () => (
    <div className="row">
        <div className="col-md-4 offset-md-4 mt-5">
            <div className="card">
                <div className="card-body">
                    <div className="text-center">                        
                        <h5 className="card-title" 
                            className="mb-4">
                            Acessar Conta</h5>
                    </div>
                    <LoginForms/>
                </div>
            </div>
        </div>
    </div>
)
export default LoginPage;