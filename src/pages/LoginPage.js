import React from 'react';
import LoginForms from '../forms/LoginForms';


const LoginPage = () => (
    <div className="row justify-content-center d-flex">
        <div className="col-12 col-lg-3  mt-4" style={{width:500}}>
            <div className="card shadow" style={{borderRadius: 15}}>
                <div className="card-body p-0" style={{marginTop:5, marginLeft: 40, marginBottom: 30, marginRight:40}}>
                    <div className="text-center">             
                        <h5 className="card-title text-light baloo pt-4 fs-4"> 
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