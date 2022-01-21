import React, { useState, useEffect }  from "react";
import { useForm, Controller} from 'react-hook-form';
import textFieldValidation from "../validations/textfield-validation";
import emailValidation from "../validations/email-validation";
import * as contatosServices from "../services/contatos-services"
import Swal from "sweetalert2";
import InputMask from 'react-input-mask'
import { NavLink } from "react-router-dom";

export default function AlterarContatosForms() {

    const [mensagemSucesso, setMensagemSucesso] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');

    const {
        control,handleSubmit,
        formState: {
            errors
        },
        reset
    } = useForm()

    const obterContato = (idContato) => {

        contatosServices.getContatosById(idContato)
            .then(
                result => {
                    reset({
                        idContato: result.idContato,
                        nome: result.nome,
                        email: result.email,
                        telefone: result.telefone
                    });
                }
            )
            .catch(
                e => {
                    console.log(e)
                      }     
            );
            
    }

    useEffect(
        () => {
 
            const url = window.location.href;
            const idContato = url.substring(url.lastIndexOf('?id=') + 4);
 
            obterContato(idContato);
        }, []
    );

    const onSubmit = (data) => {

        setMensagemSucesso('');
        setMensagemErro('');

        contatosServices.putContatos(data)
            .then(
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
                }
            )
            .catch(
                e => {
                    setMensagemErro("Não foi possivel realizar a atualização")
                    console.log(e.response)
                }
            )   
    }

    return (
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>

            {
                mensagemSucesso && <div className="alert alert-success">
                    <strong>Sucesso!</strong> {mensagemSucesso}
                </div>
            }
 
            {
                mensagemErro && <div className="alert alert-danger">
                    <strong>Erro!</strong> {mensagemErro}
                </div>
            }

            <div className="row baloo">

                  {/* Campo oculto para capturar o id do contato */}
                  <Controller
                    control={control}
                    name="idContato"
                    defaultValue=""
                    render={
                        ({ field: { onChange, onBlur, value } }) => (
                            <input
                                type="hidden"
                                id="idContato"
                                onBlur={onBlur}
                                onChange={onChange}
                                value={value}
                            />
                        )
                    }
                />

                <div className="col-md-4">
                    <label className="text-light">Nome do Contato</label>

                    <Controller
                        control={control}
                        name="nome"
                        defaultValue=""
                        rules={{ validade: textFieldValidation}}
                        render={
                            ({field:{ onChange, onBlur, value} }) => (
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

                <div className="col-md-3">
                    <label className="text-light">E-mail</label>

                    <Controller
                    
                        control={control}
                        name="email"
                        defaultValue=""
                        rules={{ validade: emailValidation }}
                        render={
                            ({field:{ onChange, onBlur, value } }) => (
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

                <div className="col-md-3">
                    <label className="text-light">Número de telefone</label>
                    
                    <Controller
                        control={control}
                        name="telefone"
                        defaultValue=""
                        render={
                            ({field: {onChange, onBlur, value} }) => (
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
                
            <div className="col 1 mt-4">
                <div className="col-md-12">
                    <input type="submit" value="Salvar Alterações"
                        className="btn btn-primary" />
                    
                </div>
            </div>
            
            <NavLink className="btn btn-outline-secondary text-light col-2 container mt-4" to="/consultar-contatos">
                        Voltar
            </NavLink>

            </div>

        </form>
    )

}