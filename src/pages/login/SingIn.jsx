import Link from 'next/link'
import styles from './Login.module.scss'
import { AiOutlineLeft } from "@react-icons/all-files/ai/AiOutlineLeft";
import { useState } from 'react';
import removeInputError from '../../../utils/removeInputError';
import axios from 'axios';
// import CVanimation from '../../components/CVanimation';
import baseUrl from '../../../utils/baseUrl'
import { useRouter } from 'next/router';
import PolicyModal from './PolicyModal';




export default function SignIn(props) {

    const router = useRouter()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [authCode, setAuthCode] = useState('')

    //ERROR STATES
    const [firstNameError, setFirstNameError] = useState('')
    const [lastNameError, setLastNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [signUpError, setSignUpError] = useState('')

    //LOADING
    const [singUpLoading, setSignUpLoading] = useState(false)

    const validate = (firstNameValue, LastNameValue, emailValue, passwordValue) => {

        removeInputError()
        clearErrors()

        let firstNameError = ''
        let lastNameError = ''
        let emailError = ''
        let passwordError = ''

        if (!firstNameValue) firstNameError = 'Insira seu nome'
        if (!LastNameValue) lastNameError = 'Insira seu sobrenome'
        if (!emailValue || !emailValue.includes('@')) emailError = 'Insira um e-mail válido'
        if (passwordValue.length < 6 || !passwordValue) passwordError = 'Insira no mínimo 6 caracteres'

        if (firstNameError || lastNameError || emailError || passwordError) {
            if (firstNameError) document.getElementById('firstNameInput').classList.add('inputError')
            if (lastNameError) document.getElementById('lastNameInput').classList.add('inputError')
            if (emailError) { document.getElementById('emailInput').classList.add('inputError'); setEmailError(emailError) }
            if (passwordError) { document.getElementById('passwordInput').classList.add('inputError'); setPasswordError(passwordError) }

            return false

        } else {
            return true
        }

    }

    const clearErrors = () => {
        setFirstNameError('')
        setLastNameError('')
        setEmailError('')
        setPasswordError('')
    }


    const handleSignIn = async () => {

        setSignUpLoading(true)

        const isValid = validate(firstName, lastName, email, password)

        if (isValid) {

            const data = {
                firstName,
                lastName,
                email,
                password
            }

            await axios.post(`${baseUrl()}/api/login/signUp`, data)
                .then(res => {
                    router.push('/')
                }).catch(e => {
                    setSignUpError('Houve um problema no cadastro. Por favor, tente novamente mais tarde!')
                })
        }

    }




    return (
        <div className="row fadeItem1s" style={{ height: '100%' }}>
            <div className="d-flex justify-content-center align-items-center">
                <div className={`card ${styles.cardSignIn} p-2`} >
                    <div className={`card-body  d-flex justify-content-center`} style={{ height: '100%' }}>




                        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center px-5">
                            <div>

                                <div className="row mb-1">
                                    <h1 className={`${styles.title} title-dark`}>Cadastre-se</h1>
                                </div>
                                <div className="row mb-3">
                                    <span style={{ fontSize: '15px' }}>É rápido e fácil.</span>
                                </div>


                                <div className='d-flex mb-2'>

                                    <div className="col-6 pe-2">
                                        {/* <label for="exampleFormControlInput1" className="form-label">Email address</label> */}
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="firstNameInput"
                                            placeholder="Nome"
                                            value={firstName}
                                            onChange={e => setFirstName(e.target.value)} />
                                    </div>
                                    <div className="col-6 ps-2">
                                        <input
                                            type="text"
                                            className="form-control "
                                            id="lastNameInput"
                                            placeholder="Sobrenome"
                                            value={lastName}
                                            onChange={e => setLastName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="col-12  mb-2">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="emailInput"
                                        placeholder="E-mail"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)} />
                                    <span className='small text-danger fadeItem'>{emailError}</span>
                                </div>
                                <div className="col-12  mb-2">
                                    <input type="password"
                                        className="form-control"
                                        id="passwordInput"
                                        placeholder="Senha"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)} />
                                    <span className='small text-danger fadeItem'>{passwordError}</span>

                                </div>
                                <div className="col-12  mb-2" style={{ fontSize: '10px' }}>
                                    <span >Ao clicar em Cadastre-se, você concorda com nossos</span>
                                    <span className='span ms-1' type='button' data-bs-toggle="modal" data-bs-target="#policyModal">Termos, Política de Privacidade e Política de Cookies.</span>
                                    <span className='ms-1'> Você poderá receber notificações por SMS e cancelar isso quando quiser.</span>
                                </div>
                                <div className="col-12 d-flex justify-content-center my-3">
                                    <button
                                        className='btn btn-outline-oceanBlue px-5'
                                        onClick={() => handleSignIn()}>Cadastre-se</button>
                                </div>
                                <div className="col-12 d-flex justify-content-center mt-3">
                                    <span className='span' type='button' onClick={() => { props.setSection('login') }}>Já possui uma conta?</span>
                                </div>
                            </div>
                        </div>

                        {window.innerWidth > 990 && (

                            <div className="col-6 d-flex justify-content-center align-items-center p-5">
                                <div>
                                    <div id="carouselExampleFade" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src="/LOGO_NAME.png" alt="" height={200} />
                                            </div>
                                            <div className="carousel-item">
                                                <img src="/LOGO_LIGHT.png" alt="" height={200} />
                                            </div>
                                            <div className="carousel-item">
                                                <img src="/LOGO_TITLE.png" alt="" height={200} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )}

                    </div>
                    <div className="row mt-3">
                        <div className="col-12 d-flex justify-content-start">
                            <span className="span" type='button' onClick={() => { props.setSection('login') }}><AiOutlineLeft className="me-2" />  Voltar</span>
                        </div>
                    </div>

                </div>
            </div>
            <PolicyModal />
        </div>
    )
}