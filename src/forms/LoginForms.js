import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as accountServices from "../../src/services/account-services";
import { NavLink } from "react-router-dom";
import passwordValidation from "../validations/password-validation";
import emailValidation from "../validations/email-validation";
import * as authHelpers from "../helpers/auth-helpers";
import Swal from "sweetalert2";




export default function LoginForms() {

    const [mensagemSucesso, setMensagemSucesso] = useState("");
    const [mensagemErro, setMensagemErro] = useState("");

    const {

        control, handleSubmit,
        formState: { errors },
        reset

    } = useForm();


    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const onSubmit = (data) => {

        setMensagemSucesso('');
        setMensagemErro('');

        accountServices.postLogin(data)
            .then(
                result => {
                    Toast.fire({
                        icon: 'success',
                        title: 'Conectado com sucesso'
                    });

                    authHelpers.singIn(result);

                    reset({
                        email: "",
                        senha: ""
                    });
                    window.location.href = "/consultar-contatos"
                }
            )

            .catch(
                e => {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'error',
                        text: e.response.data,
                        timer: 2300,
                        showConfirmButton: false,
                        iconHtml: '<i class="fas fa-times"></i>',
                        customClass: { popup: 'my-error' }

                    })
                }
            );
    }

    return (
        <form autoComplete="off" style={{ paddingTop: 25, paddingRight: 35, paddingLeft: 35, paddingBottom: 1 }} onSubmit={handleSubmit(onSubmit)}>

            {
                mensagemErro && <div className="alert alert-danger text-center">
                    <strong>{mensagemErro}</strong>
                </div>
            }


            <div className="row mb-2">
                <div className="col-md-12">


                    <label className="baloo text-light">E-mail:</label>
                    <Controller
                        control={control}
                        name="email"
                        defaultValue=''
                        rules={{ validate: emailValidation }}
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <input
                                    id="email"
                                    type="email"
                                    className="form-control baloo bgInp card"
                                    placeholder="Qual o seu e-mail ?"
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
                    <label className="baloo text-light">Senha:</label>
                    <Controller
                        control={control}
                        name="senha"
                        defaultValue=""
                        rules={{ validate: passwordValidation }}
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <input
                                    type="password"
                                    className="form-control baloo bgInp card"
                                    placeholder="Informe sua senha"
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
                    <button type="submit" className="btn col-12 baloo text-light" style={{ background: '#6A5ACD' }}>
                        Acessar
                    </button>
                    <NavLink to="esqueci-minha-senha"><button type="submit" className="btn btn-white col-12 mt-2 baloo text-light">
                        Esqueci senha
                    </button></NavLink>
                    <hr style={{ color: 'white' }} />
                    <NavLink to="/criar-conta"> <button type="submit" className="btn btn-outline-secondary col-6 mt-2 baloo text-light">
                        Criar conta
                    </button></NavLink>
                </div>
            </div>
        </form>
    )
}