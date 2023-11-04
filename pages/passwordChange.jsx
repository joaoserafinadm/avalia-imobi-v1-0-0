import { useEffect, useState } from "react"
import axios from "axios"
import Cookie from 'js-cookie'
import jwt from 'jsonwebtoken'
import Title from "../src/components/title/Title2"
import Link from "next/link"
import { FixedTopicsBottom } from "../src/components/fixedTopics"
import navbarHide from "../utils/navbarHide"
import { useDispatch } from "react-redux"




export default function passwordChange() {

    const token = jwt.decode(Cookie.get('auth'))

    const dispatch = useDispatch()

    //Form variables
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassaword, setConfirmPassword] = useState('')

    //validate Errors
    const [oldPasswordError, setOldPasswordError] = useState('')
    const [newPasswordError, setNewPasswordError] = useState('')

    //Render Elements
    const [loading, setLoading] = useState(false)
    const [loadingModal, setLoadingModal] = useState(false)
    const [emailSent, setEmailSent] = useState(false)


    useEffect(() => {

        navbarHide(dispatch)

    }, [])


    return (
        <div>
            <Title title={`Alterar senha`} subtitle={''} backButton='/' />
            <div className="pagesContent-sm shadow fadeItem">


                <div className="form-group row mb-2">
                    <div className="col-12 col-lg-6 ">
                        <label className=" ">Senha atual</label>
                        <input type="password" className="form-control akvo_form_control_sm "
                            required
                            name="email" value={oldPassword}
                            onChange={e => setOldPassword(e.target.value)} />
                        <small className="text-danger error_font_size">{oldPasswordError}</small>

                    </div>
                </div>
                <div className="form-group row mb-2">
                    <div className="col-12 col-lg-6 ">
                        <label className="">Nova senha</label>
                        <input type="password" className="form-control form-control-sm"
                            required
                            name="email" value={newPassword}
                            onChange={e => setNewPassword(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row mb-2">
                    <div className="col-12 col-lg-6 ">
                        <label className="">Confirmar nova senha</label>
                        <input type="password" className="form-control form-control-sm"
                            required
                            name="email" value={confirmPassaword}
                            onChange={e => setConfirmPassword(e.target.value)} />
                        <small className="text-danger error_font_size">{newPasswordError}</small>
                    </div>
                </div>

                <hr />

                <FixedTopicsBottom >

                    <div className="row">
                        <div className="col-12 d-flex justify-content-end">
                            <Link href="/">
                                <button className="btn btn-sm btn-secondary">Cancelar</button>
                            </Link>
                            {/* {loadingSave ?
                                <button className="ms-2 btn btn-sm btn-orange px-4" disabled><SpinnerSM /></button>
                                :
                                <button className="ms-2 btn btn-sm btn-orange" onClick={() => handleSave(token.company_id)}>Salvar</button>
                            } */}
                            <button className="ms-2 btn btn-sm btn-orange" onClick={() => handleSave(token.company_id)}>Salvar</button>
                        </div>
                    </div>
                </FixedTopicsBottom>
                <div className="row mt-3">
                    <div className="col-12">
                        <span type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#forgotPasswordModal"
                        >
                            <small className="text-primary">Esqueceu a senha?</small>
                        </span>
                    </div>
                </div>

                {/* Modal */}
                <div className="modal fade" id="forgotPasswordModal" tabIndex="-1" aria-labelledby="forgotPasswordModal" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header text-start">
                                <h5 className={`h5_modal modal-title`} id="exampleModalLabel">Esqueceu a senha?</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {/* Alert */}
                                {emailSent && (
                                    <div className="alert alert-success fadeItem" role="alert">
                                        Verifique seu email!
                                    </div>
                                )}
                                <p className="p">
                                    Um link para recuperação de senha será enviado para o seu e-mail.
                                </p>
                            </div>
                            <div className="modal-footer">
                                {loadingModal ?
                                    <button className="akvo_btn akvo_btn_primary btn-sm" type="button" disabled>
                                        <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                                        Enviando...
                                    </button>
                                    :
                                    <button type="button" className="akvo_btn akvo_btn_primary btn-sm" onClick={e => handleResetPassword(e)}>Enviar</button>
                                }
                                <button
                                    type="button"
                                    className="akvo_btn akvo_btn_secondary btn-sm ms-2"
                                    data-bs-dismiss="modal"
                                    onClick={() => { setEmailSent(false); setLoadingModal(false) }}>Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}