import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LoginPage from "../pages/LoginPage";
import PasswordPage from "../pages/PasswordPage";
import RegisterPage from "../pages/RegisterPage";
import AlterarContatos from "../pages/contatos/AlterarContatos";
import CadastrarContatos from "../pages/contatos/CadastrarContatos";
import ConsultarContatos from "../pages/contatos/ConsultarContatos";

const Main = () => (
            <Routes>
                <Route path="/" exact element={<LoginPage/>} />
                <Route path="/criar-conta" element={<RegisterPage/>} />
                <Route path="/esqueci-minha-senha" element={<PasswordPage/>} />
                <Route path="/alterar-contatos" element={<AlterarContatos/>} />
                <Route path="/cadastrar-contatos" element={<CadastrarContatos/>} />
                <Route path="/consultar-contatos" element={<ConsultarContatos/>} /> 
            </Routes>
)
export default Main;