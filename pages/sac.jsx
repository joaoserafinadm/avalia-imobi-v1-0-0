import Title from "../src/components/title/Title2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import baseUrl from "../utils/baseUrl";
import { useState } from "react";
import Cookie from 'js-cookie'
import jwt from 'jsonwebtoken';
import { FixedTopicsBottom } from "../src/components/fixedTopics";
import isMobile from "../utils/isMobile";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import navbarHide from "../utils/navbarHide";




export default function Sac() {

    const token = jwt.decode(Cookie.get('auth'))
    const dispatch = useDispatch()

    const [text, setText] = useState('')
    const [errorText, setErrorText] = useState('')

    const [loading, setLoading] = useState(false)
    const [errorLoading, setErrorLoading] = useState(false)
    const [successAlert, setSuccessAlert] = useState(false)
    const [errorAlert, setErrorAlert] = useState(false)

    useEffect(() => {
        navbarHide(dispatch)
    }, [])



    const validate = (type) => {

        if (type === "question" && text) {
            return true
        }
        if (type === "error" && errorText) {
            return true
        } else {
            return false
        }
    }


    const handleSendEmail = async (type) => {

        const isValid = validate(type)

        if (isValid) {

            if (type === "question") setLoading(true)
            else setErrorLoading(true)

            await axios.post(`/api/sac`, {
                company_id: token.company_id,
                user_id: token.sub,
                type: type,
                text: type === "question" ? text : errorText
            }).then(res => {
                setLoading(false)
                setErrorLoading(false)
                setSuccessAlert(true)
            }).catch(e => {
                setLoading(false)
                setErrorLoading(false)
                setErrorAlert(true)
            })

        }


    }


    return (
        <div>
            <Title title={'Fale Conosco'} subtitle={'Seu suporte de comunicação direta com a nossa equipe'} backButton='/' />
            {successAlert && (
                <div className={`row d-flex justify-content-center  ${isMobile() ? "alertPositionMobile" : "alertPosition"} fadeItem`}>
                    <div className="col-12 col-xl-10">
                        <div className="alert alert-success alert-dismissible" role="alert">
                            <h4 className="alert-heading mb-3">Solicitação enviada com sucesso!</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setSuccessAlert(false)}></button>
                            <hr />
                            <div className="row d-flex justify-content-center">
                                <p className='mb-0'>Em breve retornaremos seu contato. Obrigado!</p>
                            </div>
                        </div>

                    </div>
                </div>
            )}
            {errorAlert && (
                <div className={`row d-flex justify-content-center ${isMobile() ? "alertPositionMobile" : "alertPosition"} fadeItem`}>
                    <div className="col-12 col-xl-10" >
                        <div className="alert alert-danger alert-dismissible" role="alert">
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setErrorAlert(false)}></button>
                            <div className="row d-flex justify-content-center">
                                <p>Desculpe pelo transtorno, ocorreu um problema ao enviar a solicitação.</p>
                                <p className='mb-0'>Por favor, tente novamente mais tarde!</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className={`${isMobile() && "mb-0"} pagesContent shadow fadeItem`} id="pageTop">
                <div className={`col-12 ${!isMobile() && "container py-5"} fadeItem d-flex justify-content-around flex-wrap`}>
                    <div className="col-sm-12 col-xl-6 ">
                        <div className="row d-flex justify-content-center">
                            <div className="col-12 text-center">
                                <h4>Digite sua pergunta ou comentário no campo abaixo</h4>
                                <p>ou entre em contato direto pelo <b>whatsapp</b> clicando no ícone no canto inferior direito.</p>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-12 col-xl-10">
                                <div className="input-group">
                                    <textarea
                                        className="form-control" value={text}
                                        aria-label="With textarea" onChange={e => setText(e.target.value)}
                                        style={{ "height": "75px" }}></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-12 d-flex justify-content-center">
                                {!loading ?
                                    <button type="button" className="btn btn-orange btn-lg" onClick={() => handleSendEmail('question')}>Enviar</button>
                                    :
                                    <button type="button" className="btn btn-orange btn-lg d-flex align-items-center ms-2" disabled >
                                        <div className="text-center me-2">
                                            <div className="spinner-border spinner-border-sm" role="status">
                                                <span className="visually-hidden">Enviando Solicitação</span>
                                            </div>
                                        </div>
                                        Enviando
                                    </button>
                                }
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-12 d-flex justify-content-center">
                                <p className="p">Deseja reportar algum erro na plataforma?</p>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-12 col-xl-10">
                                <div className="input-group">
                                    <textarea
                                        className="form-control" value={errorText}
                                        aria-label="With textarea" onChange={e => setErrorText(e.target.value)}
                                        style={{ "height": "75px" }}></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3 " >
                            <div className="col-12 d-flex justify-content-center">
                                {!errorLoading ?
                                    <button type="button" className="btn btn-danger" onClick={() => handleSendEmail('error')}>Reportar erro</button>
                                    :
                                    <button type="button" className="btn btn-danger  d-flex align-items-center ms-2" disabled >
                                        <div className="text-center me-2">
                                            <div className="spinner-border spinner-border-sm" role="status">
                                                <span className="visually-hidden">Enviando Solicitação</span>
                                            </div>
                                        </div>
                                        Enviando
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                    <div className={`col-12 col-xl-5 mt-5 mt-xl-0 text-light py-3 text-center d-flex flex-column justify-content-center ${!isMobile() ? "gap-5 px-5" : "gap-3"}`} style={{ "backgroundColor": "#585757" }}>
                        <div className="row my-2">
                            <div className="col-12 d-flex justify-content-center">
                                <img src="/LOGO_01.png" alt="" style={{ "width": "50%" }}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-12 d-flex justify-content-center">
                                        <p className="text-light my-0">Rua Pedro Alvares Cabral, 610, Apt 701<br /> Centro,<br /> Erechim, RS, 99700-252</p>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-12">
                                        <p className="text-light my-0">Telefone: (54) 99906-7474</p>
                                        <p className="text-light my-0">E-mail: contato@avaliaimobi.com.br</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-12 d-flex justify-content-center">
                                <a target="_blank" href="https://www.instagram.com/avaliaimobi/" className="text-light">
                                    <FontAwesomeIcon icon={faInstagram} className="fs-2 mx-2 iconGrow" />
                                </a>
                                <a target="_blank" href="https://www.facebook.com/avalia.imobi/" className="text-light">
                                    <FontAwesomeIcon icon={faFacebook} className="fs-2 mx-2 iconGrow" />
                                </a>
                                {/* <a target="_blank" href="https://www.linkedin.com/company/akvoesg/?originalSubdomain=br" className="text-light">
                                    <FontAwesomeIcon icon={faLinkedin} className="fs-2 mx-2 iconGrow" />
                                </a> */}

                            </div>
                        </div>
                        <a className="whatsappLink pulse" type="button" href="https://api.whatsapp.com/send?phone=5554999067474" target="_blank">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                    </div>
                </div>
            </div>
           
        </div>
    )
}