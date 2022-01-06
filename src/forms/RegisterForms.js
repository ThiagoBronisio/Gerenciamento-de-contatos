import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as accountServices from '../../src/services/account-services';
import textFieldValidation from '../validations/textfield-validation';
import passwordValidation from '../validations/password-validation';
import emailValidation from '../validations/email-validation';

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
                    setMensagemSucesso(result.message);
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
                    setMensagemErro(e.response.data);
                }
            );
    }
    
    
    
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {
                mensagemSucesso && <div className='alert alert-success'>
                    <strong>Parabéns, cadastro realizado!</strong> {mensagemSucesso}
                </div>
            }
            
            {
                mensagemErro && <div className='alert alert-danger'>
                    <strong>Erro!</strong> {mensagemErro}
                </div>
            }

            <div className='row justify-content-center d-flex mb-1 mt-3'>
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
                                        className='form-control baloo'
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
                                        className='form-control baloo'
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
                                            className='form-control baloo'
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
                                            className='form-control baloo'
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
                
            <input type='submit' value="Realizar Cadastro" className='btn btn-primary btn-sm col-12 mt-3' /> 

            <p className='text-center text-secondary mt-3' 
                style={{fontSize:11}}>Ao se cadastrar, você concorda com nossos Termos, Política de Dados e Política de Cookies.
            </p>
        </form>
    )
}