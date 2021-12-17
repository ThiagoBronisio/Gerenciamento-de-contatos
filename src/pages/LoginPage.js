import React from 'react';
import LoginForms from "../forms/LoginForms";
import logo from '../imagens/logo-react.png';

const LoginPage = () => (
    <div className="row justify-content-center d-flex">
        <div className="col-md-4  mt-5">
            <div className="card shadow">
                <div className="card-body">
                    <div className="text-center">
                        <i className="fab fa-react text-primary p-3" style={{fontSize:"110px"}}></i>              
                        <h5 className="card-title mb-3 fw-bold text-dark baloo"> 
                            Acesse sua conta
                        </h5>
                    </div>
                    <LoginForms/>
                </div>
            </div>
        </div>
    </div>
)
export default LoginPage;