import { useEffect, useState } from "react";
import Title from "../src/components/title/Title2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserGear, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FixedTopicsBottom } from "../src/components/fixedTopics";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import Link from "next/link";
import { SpinnerSM } from "../src/components/loading/Spinners"
import { useDispatch } from "react-redux";
import navbarHide from "../utils/navbarHide";



export default function userAdd() {

    const token = jwt.decode(Cookies.get("auth"));
    const dispatch = useDispatch()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [userType, setUserType] = useState('')

    const [loadingSave, setLoadingSave] = useState(false)

    useEffect(() => {
        navbarHide(dispatch)
        
    }, [])


    const handleDisableSave = () => {

        if (!firstName || !email || !userType) {
            return true
        } else {
            return false
        }
    }

    const validate = () => {

        // removeInputError()

    }

    const handleSave = async (company_id) => {

        setLoadingSave(true)

        const isValid = validate()

        setLoadingSave(false)

    }


    return (
        <div >
            <Title title={'Adicionar usuário'} backButton='/' />
            <div className="pagesContent shadow fadeItem" id="pageTop">
                <div className="row d-flex ">
                    <label for="telefoneItem" className="form-label fw-bold">Informações do usuário</label>
                    <div className="col-12 col-lg-5 my-2">
                        <label for="userNameItem" className="form-label ">Nome*</label>
                        <input type="text" className="form-control form-control-sm" id="userNameItem" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="" />
                    </div>
                    <div className="col-12 col-lg-5 my-2 fadelItem">
                        <label for="userLastNameItem" className="form-label ">Sobrenome (opcional)</label>
                        <input type="text" className="form-control form-control-sm" id="userLastNameItem" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="" />
                    </div>
                    <div className="col-12 col-lg-10 my-2">
                        <label for="emailItem" className="form-label ">E-mail*</label>
                        <input type="text" className="form-control form-control-sm" id="emailItem" value={email} onChange={e => setEmail(e.target.value)} placeholder="" />
                    </div>
                </div>


                <div className="row d-flex mt-3">
                    <label for="telefoneItem" className="form-label fw-bold">Categoria*</label>
                    <div className="col-12 col-lg-5 my-2">
                        <div className={`card cardAnimation  ${userType === 'admin' ? 'border-selected' : ''}`} type="button" onClick={() => setUserType('admin')}>
                            <div className="card-body">
                                <div className="row">


                                    <h5 class="card-title text-orange d-flex align-items-center"> <FontAwesomeIcon icon={faUserGear} className="icon me-2" />Administrador</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">O maestro do sistema</h6>
                                    <div className="col-12 small">
                                        <span>
                                            Administradores têm controle total sobre todas as funcionalidades da plataforma, podendo adicionar, gerenciar usuários e ajustar configurações.

                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 my-2">
                        <div className={`card cardAnimation  ${userType === 'user' ? 'border-selected' : ''}`} type="button" onClick={() => setUserType('user')}>
                            <div className="card-body">
                                <div className="row">


                                    <h5 class="card-title text-orange d-flex align-items-center"> <FontAwesomeIcon icon={faUserTie} className="icon me-2" />Corretor</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Especialistas em avaliação</h6>
                                    <div className="col-12 small">
                                        <span>
                                            Corretores focam na criação e gestão de avaliações, contribuindo para a qualidade e confiabilidade do sistema, moldando a reputação dos clientes.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <hr />

                <FixedTopicsBottom >

                    <div className="row">
                        <div className="col-12 d-flex justify-content-end align-items-center">
                            <Link href="/">
                                <button className="btn btn-sm btn-secondary">Cancelar</button>
                            </Link>

                            {loadingSave ?
                                <button className="ms-2 btn btn-sm btn-orange px-5" disabled><SpinnerSM /></button>
                                :
                                <button className="ms-2 btn btn-sm btn-orange fadeItem" disabled={handleDisableSave()} onClick={() => handleSave(token.company_id)}>Cadastrar</button>
                            }
                        </div>
                    </div>
                </FixedTopicsBottom>
            </div>
        </div>
    )
}