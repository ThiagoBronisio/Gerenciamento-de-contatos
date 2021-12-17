import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid">
                <div className="container">
                    
                    <a className="navbar-brand baloo" href="#"> 
                        <i className="fas fa-address-card mx-2 bg-secondary p-2 rounded-circle"></i>
                        Controle de Contatos
                    </a>

                    <button className="navbar-toggler" type="button"

                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>

                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto px-2">

                            <li className="nav-item mx-2">
                                <NavLink className="nav-link active baloo" aria-current="page" to="/">
                                    <i className="fas fa-sign-out-alt m-1"></i> Acessar conta
                                </NavLink>
                            </li>

                            <li className="nav-item mx-2">
                                <NavLink className="nav-link baloo" to="/criar-conta">
                                    <i className="fas fa-user-plus m-1"></i> Criar usuário
                                </NavLink>
                            </li>

                            <li className="nav-item mx-2">
                                <NavLink className="nav-link baloo" to="/esqueci-minha-senha">
                                    <i className="fas fa-unlock-alt m-1"></i>
                                    Esqueci senha
                                </NavLink>
                            </li>

                        </ul>

                    </div>

                </div>
            </nav>
        </>
    )
}