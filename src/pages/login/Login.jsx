
import Head from 'next/head'
import styles from './Login.module.scss'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from 'axios'
import removeInputError from '../../../utils/removeInputError'
import baseUrl from '../../../utils/baseUrl'



export default function Login(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //RENDER
    const [loadedImages, setLoadedImages] = useState(0)

    //ERROR
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const validate = () => {

        removeInputError()
        clearErrors()

        let emailError = ''
        let passwordError = ''

        if (!email || !email.includes('@')) emailError = 'Insira um e-mail válido'
        if (!password) passwordError = 'Insira sua senha'

        if (emailError || passwordError) {
            if (emailError) { document.getElementById('emailInput').classList.add('inputError'); setEmailError(emailError) }
            if (passwordError) { document.getElementById('passwordInput').classList.add('inputError'); setPasswordError(passwordError) }
            return false
        } else {
            setEmailError('')
            setPasswordError('')
            return true
        }

    }

    const clearErrors = () => {
        setEmailError('')
        setPasswordError('')
    }

    const handleSignIn = async () => {

        const isValid = validate()

        if (isValid) {

            const data = {
                email,
                password
            }

            await axios.post(`${baseUrl()}/api/login/signIn`, data)
                .then(res => {
                    
                }).catch(e => {
                    setPasswordError('E-mail ou senha incorretos')
                })


        }

    }



    return (
        <>

            <div className="row fadeItem1s d-flex justify-content-center" style={{ height: '100%' }}>
                {window.innerWidth > 990 && (

                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <img src="/LOGO_LIGHT.png" alt="" className={`${styles.logoImg}`} onLoad={() => setLoadedImages(loadedImages + 1)} />
                    </div>
                )}


                <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                    <div class={`card ${styles.cardSize}`}>
                        <div class="card-body">
                            <div className="row mb-3">
                                <h1 className={`${styles.title} title-dark`}>Login</h1>
                            </div>
                            <div className="row">
                                <div className="col-12 col-xl-6 d-flex justify-content-start">


                                    <span>Não possui uma conta?</span>
                                </div>
                                <div className="col-12 col-xl-6 d-flex justify-content-start">
                                    <span className='span' type='button' onClick={() => { props.setSection('signIn') }}>Cadastre-se</span>
                                </div>
                            </div>
                            <hr />

                            <div className="row mt-3 mb-3">
                                <input
                                    type="email" id="emailInput"
                                    class="form-control"
                                    placeholder="E-mail"
                                    value={email} onChange={e => setEmail(e.target.value)} />
                                <span className='small text-danger fadeItem'>{emailError}</span>
                            </div>
                            <div className="row mb-3">
                                <input
                                    type="password" id="passwordInput"
                                    class="form-control"
                                    placeholder="Senha"
                                    value={password} onChange={e => setPassword(e.target.value)} />
                                <span className='small text-danger fadeItem'>{passwordError}</span>
                            </div>
                            <div className="row mb-3">
                                <button className='btn btn-outline-oceanBlue' onClick={() => handleSignIn()}>Entrar</button>
                            </div>
                            <div className="row mb-1">
                                <small>
                                    <span className='span' type='button' onClick={() => props.setSection('rescuePassword')}>
                                        Esqueceu a senha?
                                    </span>
                                </small>
                            </div>
                            <div className="row d-flex">

                                <div className="col">
                                    <hr />
                                </div>
                                <div className='col-1 d-flex justify-content-center align-items-center'>
                                    <span>
                                        <small>
                                            Ou
                                        </small>
                                    </span>
                                </div>
                                <div className="col">
                                    <hr />
                                </div>

                            </div>
                            <div className="row">

                                <span className='card py-2 px-1 my-2 cardAnimation' type='button'>
                                    <div className="row ">
                                        <div className="col-12 d-flex justify-content-center">
                                            <div className='icon-start'>
                                                <img src="/ICON-GOOGLE.png" alt="" className='socialIcon' />
                                            </div>
                                            <div>
                                                <span>
                                                    Continuar com o Google
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                                <span className='card py-2 px-1 my-2 cardAnimation' type='button'>
                                    <div className="row ">
                                        <div className="col-12 d-flex justify-content-center">
                                            <div className='icon-start'>
                                                <img src="/ICON-FACEBOOK.png" alt="" className='socialIcon' />
                                            </div>
                                            <div>
                                                <span>
                                                    Continuar com o Facebook
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}