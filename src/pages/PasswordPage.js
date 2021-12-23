import React from 'react';
import PasswordForms from '../forms/PasswordForms';


const PasswordPage = () => (
    <div className="row">
        <div className="col-md-4 offset-md-4">
           <div className="justify-content-center d-flex"> 
                <i className="fab fa-react text-primary p-3" style={{fontSize:"80px"}}></i>
           </div>
            <div className="card shadow">
                <div className="card-body">   
                    <PasswordForms/>
                </div>
            </div>

        </div>       
    </div>
)
export default PasswordPage;