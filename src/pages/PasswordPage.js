import React from 'react';
import PasswordForms from '../forms/PasswordForms';


const PasswordPage = () => (
    <div className="row">
        <div className="col-md-4 offset-md-4 justify-content-center mt-5">
            <div className="card shadow" style={{borderRadius: 15}}>
                <div className="card-body">   
                    <PasswordForms/>
                </div>
            </div>

        </div>       
    </div>
)
export default PasswordPage;