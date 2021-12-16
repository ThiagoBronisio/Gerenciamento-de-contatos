import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LoginPage from "../pages/LoginPage";
import PasswordPage from "../pages/PasswordPage";
import RegisterPage from "../pages/RegisterPage";

const Main = () => (
            <Routes>
                <Route path="/" exact element={<LoginPage/>}/>
                <Route path="/criar-conta" element={<RegisterPage/>}/>
                <Route path="/esqueci-minha-senha" element={<PasswordPage/>}/>
            </Routes>
)
export default Main;