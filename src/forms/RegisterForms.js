import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

export default function RegisterForms() {
    
    const [mensagemSucesso, setMensagemSucesso] = useState("")
    const [mensagemErro, setMensagemErro] = useState("")

    const {
        control, handleSubmit, formState: {erros}, reset
    } = useForm();

    const onSubmit = (dados) => {
        alert(JSON.stringify(dados));
    }
    
    
    
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className='row justify-content-center d-flex mb-1 mt-3'>
                <div className='col-md-12 baloo'>
                <Controller
                        control={control}
                        name="text"
                        defaultValue=""
                        render = {
                                ({field: { onChange, onBlur, value } }) => (
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
                </div>
            </div>

        
            <div className='row mb-1'>
                <div className='col-md-12 baloo'>
                   <Controller
                        control={control}
                        name="email"
                        defaultValue=""
                        render = {
                                ({field: { onChange, onBlur, value } }) => (
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

                </div>
            </div>

            <div className='row mb-1'>
                <div className='col-md-12 baloo'>
                    <Controller
                            control={control}
                            name="senha"
                            defaultValue=""
                            render = {
                                    ({field: { onChange, onBlur, value } }) => (
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
                </div>
            </div>

            <div className='row mb-1'>
                <div className='col-md-12 baloo'>
                    <Controller
                            control={control}
                            name="senhaConfirmação"
                            defaultValue=""
                            render = {
                                    ({field: { onChange, onBlur, value } }) => (
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
                </div>
            </div>

            <button type='submit' className='btn btn-primary btn-sm col-12 mt-3'>Cadastre-se</button>

            <p className='text-center text-secondary mt-3' 
                style={{fontSize:11}}>Ao se cadastrar, você concorda com nossos Termos, Política de Dados e Política de Cookies.
            </p>
        </form>
    )
}