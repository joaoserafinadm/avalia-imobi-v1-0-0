import { useState } from "react";
import { SpinnerSM } from "../../components/loading/Spinners";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";

export default function AuthModal(props) {

    const [code, setCode] = useState('')
    const [codeLoading, setCodeLoading] = useState(false)
    const [resendEmailError, setResendEmailError] = useState('')
    const [resendEmailCheck, setResendEmailCheck] = useState('')

    const validate = async (code) => {


    }

    const handleSignUp = (authCode, code, firstName, lastName, email, password) => {

        setCodeLoading(true)

        const isValid = validate(code)

    }

    const resendEmail = async (email, firstName) => {


        setResendEmailCheck('')
        setResendEmailError('')
        const data = {
            email: email,
            firstName: firstName
        }

        await axios.post(`${baseUrl()}/api/login/authMail`, data)
            .then(res => {
                props.setAuthCode(res.data.secureCode)
                setResendEmailError('')
                setResendEmailCheck('Verifique seu e-mail')
            }).catch(e => {
                setResendEmailCheck('')
                setResendEmailError('Verifique seus dados de cadastro')
            })
    }


    return (
        <div
            className="modal fade"
            id="authModal"
            tabindex="-1"
            aria-labelledby="authModalLabel"
            aria-hidden="true"
        >

            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title title-dark" id="authModalLabel">
                            Verifique seu e-mail!
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-12">
                                <span>
                                    Enviamos em seu e-mail um código de autenticação. Insira o
                                    código no campo abaixo:
                                </span>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-12 d-flex justify-content-center">
                                <div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={code}
                                        onChange={e => setCode(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center">
                                <span className="small span" type="button" onClick={() => resendEmail(props.email, props.firstName)}>
                                    Enviar código novamente
                                </span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center">
                                <small className="small text-danger fadeItem">{resendEmailError}</small>
                                <small className="small text-success fadeItem">{resendEmailCheck}</small>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary btn-sm"
                            data-bs-dismiss="modal"
                            onClick={() => props.setSignUpLoading(false)}
                        >
                            Cancelar
                        </button>
                        {!props.signUpLoading ? (
                            <button
                                type="button"
                                className="btn btn-oceanBlue btn-sm"
                                onClick={() => handleSignUp(props.authCode, code, props.firstName, props.lastName, props.email, props.password)}
                            >
                                Continuar
                            </button>
                        ) : (
                            <button
                                type="button"
                                disabled
                                className="btn btn-oceanBlue btn-sm px-3"
                                onClick={() => props.handleSignUp()}
                            >
                                <SpinnerSM />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
