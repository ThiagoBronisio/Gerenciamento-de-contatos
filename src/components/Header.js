import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"> 
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
                    <div className="collapse navbar-collapse"
                        id="navbarSupportedContent">

                        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto px-2">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link active"
                                    aria-current="page" to="/">                           
                                    Acessar conta
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/criar-conta">
                                    Criar conta de usuário
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/esqueci-minha-senha">
                                    Esqueci minha senha
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}