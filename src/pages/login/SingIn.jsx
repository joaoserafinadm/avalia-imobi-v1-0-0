import Link from 'next/link'
import styles from './Login.module.scss'
import { AiOutlineLeft } from "@react-icons/all-files/ai/AiOutlineLeft";




export default function SignIn(props) {




    return (
        <div className="row fadeItem1s" style={{ height: '100%' }}>
            <div className="d-flex justify-content-center align-items-center">
                <div className={`card ${styles.cardSignIn} p-2`} >
                    <div className={`card-body  d-flex`} style={{ height: '100%' }}>




                        <div className="col-6 d-flex justify-content-center align-items-center px-5">
                            <div>

                                <div className="row mb-1">
                                    <h1 className={`${styles.title} title-dark`}>Cadastre-se</h1>
                                </div>
                                <div className="row mb-3">
                                    <span style={{ fontSize: '15px' }}>É rápido e fácil.</span>
                                </div>


                                <div className='d-flex mb-2'>

                                    <div className="col-6 pe-2">
                                        {/* <label for="exampleFormControlInput1" class="form-label">Email address</label> */}
                                        <input type="text" class="form-control" id="firstNameInput" placeholder="Nome" />
                                    </div>
                                    <div className="col-6 ps-2">
                                        <input type="text" class="form-control" id="lastNameInput" placeholder="Sobrenome" />
                                    </div>
                                </div>
                                <div className="col-12  mb-2">
                                    <input type="email" class="form-control" id="emailInput" placeholder="E-mail" />

                                </div>
                                <div className="col-12  mb-2">
                                    <input type="password" class="form-control" id="passwordInput" placeholder="Senha" />

                                </div>
                                <div className="col-12  mb-2">
                                    <span style={{ fontSize: '10px' }}>Ao clicar em Cadastre-se, você concorda com nossos <span className='span' type='button'>Termos, Política de Privacidade e Política de Cookies</span>. Você poderá receber notificações por SMS e cancelar isso quando quiser.</span>
                                </div>
                                <div className="col-12 d-flex justify-content-center my-3">
                                    <button className='btn btn-outline-oceanBlue px-5'>Cadastre-se</button>
                                </div>
                                <div className="col-12 d-flex justify-content-center mt-3">
                                    
                                    <span className='span' type='button' onClick={() => { props.setSection('login') }}>Já possui uma conta?</span>
                                </div>

                            </div>

                        </div>

                        <div className="col-6 d-flex justify-content-center align-items-center p-5">
                            <div>

                                <div id="carouselExampleFade" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="/LOGO_NAME.png" alt="" height={200} />

                                        </div>
                                        <div class="carousel-item">
                                            <img src="/LOGO_LIGHT.png" alt="" height={200} />

                                        </div>
                                        <div class="carousel-item">
                                            <img src="/LOGO_TITLE.png" alt="" height={200} />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="row mt-3">
                        <div className="col-12 d-flex justify-content-start">
                            <span className="span" type='button' onClick={() => { props.setSection('login') }}><AiOutlineLeft className="me-2" />  Voltar</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}