import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import emailValidation from '../validations/email-validation';
import * as accountServices from '../services/account-services';
import Swal from 'sweetalert2';


export default function PasswordForms() {

    const [mensagemSucesso, setMensagemSucesso] = useState("")
    const [mensagemErro, setMensagemErro] = useState("")

    const { control, handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    const onSubmit = (data) => {

        setMensagemSucesso("");
        setMensagemErro("");

        accountServices.postPassword(data)
            .then(
                result => {
                    setMensagemSucesso(result.mensagem)
                    reset({
                        email: ''
                    });
                }
            )

            .catch(
                e => {
                    switch (e.response.status) {
                        case 422:
                            Swal.fire({
                                position: 'top-center',
                                icon: 'error',
                                text: e.response.data,
                                timer: 3200,
                                showConfirmButton: false,
                                iconHtml: '<i class="fas fa-times"></i>',
                                customClass: { popup: 'my-error' }

                            })
                            break;
                        default:
                            Swal.fire({
                                position: 'top-center',
                                icon: 'error',
                                text: 'Falha ao recuperar senha, tente mais tarde',
                                timer: 3200,
                                showConfirmButton: false,
                                iconHtml: '<i class="fas fa-times"></i>',
                                customClass: { popup: 'my-error' }

                            })

                            break;
                    }
                }
            )
    }

    return (

        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)} className='row justify-content-center d-flex'>

            <div className='col-9'>
                <h5 className='text-center text-light baloo mb-4 mt-2 '>Recuperar senha</h5>

                <label className='baloo text-light'>Digite seu e-mail</label>
                <Controller
                    control={control}
                    name="email"
                    defaultValue=""
                    rules={{ validate: emailValidation }}
                    render={
                        ({ field: { onChange, onBlur, value } }) => (

                            <input
                                type="email"
                                className="form-control baloo bgInp card"
                                placeholder='Qual o seu e-mail ?'
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                            />
                        )
                    }
                />

                {
                    errors.email && <div className='text-danger'>
                        {errors.email.message}
                    </div>
                }

                <div className="d-grid gap-2 col-12 mx-auto m-4">
                    <button className="btn text-light baloo" type="submit" style={{ background: '#6A5ACD' }} >Enviar</button>

                    <NavLink to="/">
                        <button className="btn btn-white mt-2 text-light col-12 baloo" type="submit">Voltar</button>
                    </NavLink>
                </div>
            </div>

        </form>
    )
}