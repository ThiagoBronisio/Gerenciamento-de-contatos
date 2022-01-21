import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as accountServices from '../../src/services/account-services';
import textFieldValidation from '../validations/textfield-validation';
import passwordValidation from '../validations/password-validation';
import emailValidation from '../validations/email-validation';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function RegisterForms() {
    
    const [mensagemSucesso, setMensagemSucesso] = useState("");
    const [mensagemErro, setMensagemErro] = useState("");

    const {
        control, handleSubmit, formState: {errors}, reset
    } = useForm();

    const onSubmit = (data) => {

        setMensagemSucesso('');
        setMensagemErro('');

        accountServices.postRegister(data)
            .then( //calback sucesso
                result => {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        text: result.message,
                        showConfirmButton: false,
                        timer: 2500,
                        iconHtml: '<i class="fa fa-check"></i>',
                        customClass: { popup: 'my-swal'}
                      })
                    reset({
                        nome: '',
                        email: '',
                        senha: '',
                        senhaConfirmacao: ''
                    });
                }
            )
            
            .catch( //calback erro
                e => {
                    switch(e.response.status){
                        case 422:
                            Swal.fire({
                                position: 'top-center',
                                icon: 'error',
                                text: e.response.data,
                                showConfirmButton: false,
                                timer: 3000,
                                iconHtml: '<i class="fas fa-times"></i>',
                                customClass: { popup: 'my-error' },     
                            })
                            break;
                        case 400: 
                            Swal.fire({
                                position: 'top-center',
                                icon: 'error',
                                text: "Senhas não conferem",
                                timer: 2500,
                                showConfirmButton: false,
                                iconHtml: '<i class="fas fa-times"></i>',
                                customClass: { popup: 'my-error' }
                            })
                            break;
                        default:
                            Swal.fire({
                                position: 'top-center',
                                icon: 'error',
                                text: 'Falha ao se registrar, tente mais tarde',
                                timer: 2500,
                                showConfirmButton: false,
                                iconHtml: '<i class="fas fa-times"></i>',
                                customClass: { popup: 'my-error' }
                              })
                            break;
                    }
                }
            );
    }
    
    
    
    
    return (
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>

            

            <div className='row justify-content-center d-flex mb-1 mt-4'>
                <div className='col-md-12 baloo'>
                <Controller
                        control={control}
                        name="nome"
                        defaultValue=""
                        rules={{ validate: textFieldValidation }}
                        render = {
                            ({ field: { onChange, onBlur, value } }) => (
                                    <input
                                        type= "text"
                                        placeholder='Nome completo'
                                        className='form-control baloo bgInp card'
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                    />
                                )
                         }
                   />
                    {
                    errors.nome && <div className='text-danger'>
                        {errors.nome.message}
                    </div>
                    } 
                </div>
            </div>
                     
            <div className='row mb-1'>
                <div className='col-md-12 baloo'>
                   <Controller
                        control={control}
                        name="email"
                        defaultValue=""
                        rules={{ validate: emailValidation }}
                        render = {
                            ({ field: { onChange, onBlur, value } }) => (
                                    <input
                                        type= "email"
                                        placeholder='E-mail'
                                        className='form-control baloo bgInp card'
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
                </div>
            </div>
                   
            <div className='row mb-1'>
                <div className='col-md-12 baloo'>
                    <Controller
                            control={control}
                            name="senha"
                            defaultValue=""
                            rules={{ validate: passwordValidation}}
                            render = {
                                ({ field: { onChange, onBlur, value } }) => (
                                        <input
                                            type= "password"
                                            placeholder='Senha'
                                            className='form-control baloo bgInp card'
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            value={value}
                                        />
                                    )
                            }
                    />
                    {
                    errors.senha && <div className='text-danger'>
                        {errors.senha.message}
                    </div>
                    }
                </div>
            </div>
                
            <div className='row mb-1'>
                <div className='col-md-12 baloo'>
                    <Controller
                            control={control}
                            name="senhaConfirmacao"
                            defaultValue=""
                            rules={{ validate: passwordValidation}}
                            render = {
                                ({ field: { onChange, onBlur, value } }) => (
                                        <input
                                            type= "password"
                                            placeholder='Confirme sua senha'
                                            className='form-control baloo bgInp card'
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            value={value}
                                        />
                                    )
                            }
                    />
                    {
                        errors.senhaConfirmacao && <div className='text-danger'>
                            {errors.senhaConfirmacao.message}
                        </div>
                    }
                </div>
            </div>

            <div className='text-center'>
                <div className='col-md-12'>   
                    <input type='submit' value="Realizar Cadastro" className='btn col-12 mt-3 baloo text-light' style={{background:'#6A5ACD'}} /> 
            
                    <p className='text-center text-secondary mt-1' 
                        style={{fontSize:11}}>Ao se cadastrar, você concorda com nossos Termos, Política de Dados e Política de Cookies.
                    </p>
            <hr style={{color: 'white'}}/>
                    <NavLink to="/">
                        <button className="btn btn-outline-secondary col-6 baloo text-light" type="submit">Acessar conta</button>
                    </NavLink>
            
                </div>
            </div>
        </form>
    )
}