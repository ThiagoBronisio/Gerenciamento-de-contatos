import React, { useState, useEffect } from "react";
import * as contatosServices from '../../services/contatos-services';
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";

export default function ConsultarContatosGrid() {

    const [contatos, setContatos] = useState([]);
    const [mensagemSucesso, setMensagemSucesso] = useState('');


    const consultarContatos = () => {
        contatosServices.getContatos()
            .then(
                result => {
                    setContatos(result);
                }
            )
            .catch(
                e => {
                    console.log(e);
                }
            )
    }

    const excluirContato = (idContato) => {


        if (window.confirm("Deseja excluir o contato ?")) {
            contatosServices.deleteContatos(idContato)
                .then(
                    result => {
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            text: result.message,
                            showConfirmButton: false,
                            timer: 2300,
                            iconHtml: '<i class="fa fa-check"></i>',
                            customClass: { popup: 'my-swal' }
                        })
                        setTimeout(function () {
                            window.location.reload(1);
                        }, 2300);
                    }
                )
                .catch(
                    e => {
                        console.log(e);
                    }
                )
        }
    }

    useEffect(
        () => {
            consultarContatos();
        }, []
    );

    return (



        <div>

            {
                mensagemSucesso && <div className="alert alert-success">
                    <strong>Sucesso!</strong> {mensagemSucesso}
                </div>
            }


            <table className="table table-hover">


                <thead>
                    <tr className="text-light fs-5 BaiJamjuree">
                        <th>Nome do Contato</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        contatos.map(
                            function (contato, i) {
                                return (
                                    <tr key={i}>
                                        <td className="text-light pt-3" >{contato.nome}</td>
                                        <td className="text-light pt-3" >{contato.email}</td>
                                        <th className="text-light pt-3" >{contato.telefone}</th>

                                        <td >
                                            <a href="#" className="btn btn-outline-primary  btn-sm rounded-circle" style={{ width: 40, fontSize: 20, marginRight: 5 }}
                                                onClick={
                                                    () => window.location.href = "/alterar-contatos?id=" + contato.idContato
                                                }>
                                                <i className="fas fa-pen"></i>
                                            </a>

                                            <a className="btn btn-outline-danger  btn-sm rounded-circle" href="#" style={{ width: 40, fontSize: 20 }}
                                                onClick={
                                                    () => excluirContato(contato.idContato)
                                                }>
                                                <i className="fas fa-trash-alt "></i>
                                            </a>
                                        </td>
                                    </tr>
                                )
                            }
                        )
                    }
                </tbody>
            </table>

            <h5 className="text-end mt-4 px-5 text-light">Contatos cadastrado: {contatos.length}</h5>
        </div>
    )
}
