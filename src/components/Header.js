import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import * as authHelpers from '../helpers/auth-helpers'
import logo from '../imagens/logo.png'

export default function Header() {

    const [nomeUsuario, setNomeUsuario] = useState('');
    const [autenticado, setAutenticado] = useState(false);

    useEffect(
        () => {
            if (authHelpers.isAuthenticated()) {
                setNomeUsuario(authHelpers.getUsuario());
                setAutenticado(true);
            } else if (authHelpers.isAuthenticated()) {
                setAutenticado(false);
            }
        }, []
    );

    const sairPage = () => {
        if (window.confirm('Deseja realmente sair do sistema?')) {
            authHelpers.singOut();
            window.location.href = "/";
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark body container-fluid">
                <div className="container">

                    <NavLink to="/" className="navbar-brand fw-bolder BaiJamjuree" style={{color: '#6A5ACD'}} href="#">
                        <img src={logo} style={{width:43, marginRight:10}} className='rounded-circle p-1 bg-dark border border-secondary'/>
                        Controle de Contatos
                    </NavLink>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto px-2">

                            {
                                !autenticado && (
                                    <li className="nav-item mx-2">
                                        <NavLink className="nav-link BaiJamjuree text" aria-current="page" to="/" >
                                            <i className="fas fa-sign-out-alt m-1"></i> Acessar conta
                                        </NavLink>
                                    </li>
                                )
                            }

                            {
                                !autenticado && (
                                    <li className="nav-item mx-2">
                                        <NavLink className="nav-link BaiJamjuree" to="/criar-conta">
                                            <i className="fas fa-user-plus m-1"></i> Criar usuário
                                        </NavLink>
                                    </li>
                                )
                            }

                            {
                                !autenticado && (
                                    <li className="nav-item mx-2">
                                        <NavLink className="nav-link BaiJamjuree" to="/esqueci-minha-senha">
                                            <i className="fas fa-unlock-alt m-1"></i>
                                            Esqueci senha
                                        </NavLink>
                                    </li>
                                )
                            }






                            {
                                autenticado && (

                                    <li class="nav-item dropdown BaiJamjuree mx-5 px-3 mt-2">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Gerenciador de contatos
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-right shadow dropdown-menu-dark w-100">
                                            <li>
                                                <NavLink className='dropdown-item text-light m-2' to="/consultar-contatos">Consultar contatos</NavLink>
                                            </li>
                                            <li>
                                                <NavLink className='dropdown-item text-light m-2' to="/cadastrar-contatos">Cadastrar contatos</NavLink>
                                            </li>
                                        </ul>
                                    </li>

                                )
                            }


                            {
                                autenticado && (
                                    <div className='text-white mt-3 px-2 baloo'>
                                        <small>Olá, {nomeUsuario}</small>
                                    </div>
                                )
                            }


                            {
                                autenticado && (

                                    <a href='#' class="btn btn-sm btn-outline-danger baloo m-2 mx-2" type="button"
                                        onClick={
                                            () => sairPage()
                                        }>
                                        Encerrar sessão
                                    </a>

                                )
                            }


                        </ul>

                    </div>

                </div>
            </nav>
        </>
    )
}