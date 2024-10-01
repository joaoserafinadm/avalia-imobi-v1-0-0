import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";



export default function NoSubscriptionPage(props) {




    return (
        <div className="row">
            <div className="col-12">
                <div className="alert alert-danger">
                    <span>Você ainda não possui uma assinatura!</span>
                </div>
            </div>
            <div className="col-12 d-flex justify-content-center">
                <button className="btn btn-orange pulse" data-bs-toggle="modal" data-bs-target="#creditCardEditModal">
                    Assinar o Avalia Imobi!
                </button>
            </div>
            <div className="col-12 mt-3">
                <span className="fw-bold text-orange">Benefícios:</span>
            </div>
            <div className="col-12 d-flex flex-column">
                <span>
                    <FontAwesomeIcon icon={faCheck} className="text-success" /> Cadastro ilimitado de corretores
                </span>
                <span>
                    <FontAwesomeIcon icon={faCheck} className="text-success" /> Cadastro ilimitado de clientes
                </span>
            </div>
            <div className="col-12 mt-3">
                <span className="fw-bold text-orange">Conheça nossos planos:</span>
            </div>
            <div className="col-4">
                <div className="card">
                    <div className="card-body">
                        dsadsa
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card">
                    <div className="card-body">
                        dsadsa
                    </div>
                </div>
            </div>
        </div>
    )



}