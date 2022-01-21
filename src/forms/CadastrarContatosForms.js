import React, { useState } from "react";
import { useForm, Controller } from 'react-hook-form';
import textFieldValidation from "../validations/textfield-validation";
import emailValidation from "../validations/email-validation";
import * as contatosServices from "../services/contatos-services"
import Swal from "sweetalert2";
import InputMask from 'react-input-mask'
import { NavLink } from "react-router-dom";

export default function CadastrarContatosForms() {

    const [mensagemSucesso, setMensagemSucesso] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');

    const {
        control, handleSubmit,
        formState: {
            errors
        },
        reset
    } = useForm()

    const onSubmit = (data) => {

        setMensagemSucesso('');
        setMensagemErro('');

        contatosServices.postContatos(data)
            .then(
                result => {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        text: result.message,
                        showConfirmButton: false,
                        timer: 2500,
                        iconHtml: '<i class="fa fa-check"></i>',
                        customClass: { popup: 'my-swal' }
                    })
                    reset({
                        nome: "",
                        email: "",
                        telefone: ""
                    });
                }
            )
            .catch(
                e => {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'error',
                        text: 'Não foi possivel realizar o cadastro',
                        timer: 2500,
                        showConfirmButton: false,
                        iconHtml: '<i class="fas fa-times"></i>',
                        customClass: { popup: 'my-error' }

                    })
                    console.log(e.response);
                }
            )

    }

    return (
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>

            {
                mensagemErro && <div className="alert alert-danger">
                    <strong>Erro!</strong> {mensagemErro}
                </div>
            }

            <div className="row baloo">

                <div className="col-md-4">
                    <label className="text-light" >Nome do Contato</label>

                    <Controller
                        control={control}
                        name="nome"
                        defaultValue=""
                        rules={{ validade: textFieldValidation }}
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <input
                                    type="text"
                                    id="nome"
                                    className="form-control bgInp card"
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )
                        }
                    />

                    {
                        errors.nome && <div className="text-danger">
                            {errors.nome.message}
                        </div>
                    }

                </div>

                <div className="col-md-4">
                    <label className="text-light" >E-mail</label>

                    <Controller

                        control={control}
                        name="email"
                        defaultValue=""
                        rules={{ validade: emailValidation }}
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control bgInp card"
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

                <div className="col-md-2">
                    <label className="text-light" >Número de telefone</label>

                    <Controller
                        control={control}
                        name="telefone"
                        defaultValue=""
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <InputMask
                                    type="text"
                                    id="telefone"
                                    mask='(99) 99999-9999'
                                    placeholder="(00) 00000-0000"
                                    className="form-control bgInp card"
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )
                        }
                    />

                    {
                        errors.telefone && <div className="text-danger">
                            {errors.telefone.message}
                        </div>
                    }

                </div>

                <div className="col-2 mt-4 p-0">
                    <button type="submit" className="btn btn-primary">
                        <i className="fas fa-plus" ></i>
                    </button>

                    <NavLink to="/consultar-contatos" type="button" className='mx-2'>
                        <span className="btn btn-outline-secondary text-light ">Voltar</span>
                    </NavLink>
                </div>





            </div>

        </form>
    )

}