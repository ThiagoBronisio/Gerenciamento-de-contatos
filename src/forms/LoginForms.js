import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as accountServices from "../../src/services/account-services";
import { NavLink } from "react-router-dom";
import passwordValidation from "../validations/password-validation";
import emailValidation from "../validations/email-validation";


export default function LoginForms() {

    const [mensagemSucesso, setMensagemSucesso] = useState("");
    const [mensagemErro, setMensagemErro] = useState("");

    const {

        control, handleSubmit,
        formState: { errors },
        reset

    } = useForm();

    const onSubmit = (data) => {
        
        setMensagemSucesso('');
        setMensagemErro('');

        accountServices.postLogin(data)
            .then( 
                result => {
                    setMensagemSucesso(result.message);
                    reset({
                        email: "",
                        senha: ""
                    });
                }
            )

            .catch(
                e => {
                    setMensagemErro(e.response.data)
                }
            );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            {
                mensagemErro && <div className="alert alert-danger text-center">
                        <strong>{mensagemErro}</strong> 
                </div>
            }


            <div className="row mb-2">
                <div className="col-md-12">

                    <label className="baloo">E-mail:</label>
                    <Controller
                        control={control}
                        name="email"
                        defaultValue=''
                        rules={{ validate: emailValidation }}
                        render={
                            ({field: {onChange, onBlur, value} }) => (
                                <input
                                    id="email"
                                    type="email"
                                    className="form-control baloo"
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    
                                />
                            )
                        }
                    />
                    {
                        errors.email && <div className="text-danger"> 
                                {errors.email.message}
                        </div>
                    }

                </div>
            </div>

            <div className="row mb-4">
                <div className="col-md-12">
                    <label className="baloo">Senha:</label>
                    <Controller
                        control={control}
                        name="senha"
                        defaultValue=""
                        rules={{ validate: passwordValidation }}
                        render={
                            ({field : {onChange, onBlur, value} }) => (
                                <input
                                    type="password"
                                    className="form-control baloo"
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )
                        }
                    />
                    {
                        errors.senha && <div className="text-danger">
                                {errors.senha.message}
                        </div>
                    }
                </div>
            </div>

            <div className="text-center">
                <div className="col-md-12">
                    <button type="submit" className="btn btn-primary col-12 baloo">
                        Acessar
                    </button>
                    <NavLink to="esqueci-minha-senha"><button type="submit" className="btn btn-white col-12 mt-2 baloo text-primary">
                        Esqueci senha
                    </button></NavLink>
                    <hr />
                    <NavLink to="/criar-conta"> <button type="submit" className="btn btn-success col-6 mt-2 baloo">
                        Criar conta
                    </button></NavLink>
                </div>
            </div>
        </form>
    )
}