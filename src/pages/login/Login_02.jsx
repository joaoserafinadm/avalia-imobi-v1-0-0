
import Head from 'next/head'
import styles from './Login.module.scss'
import Link from 'next/link'



export default function Login(props) {




    return (
        <>

            <div className="row fadeItem1s" style={{ height: '100%' }}>

                <div className="col-6 d-flex justify-content-center align-items-center">
                    <img src="/LOGO_LIGHT.png" alt="" className={`${styles.logoImg}`} />
                </div>

                <div className="col-6 d-flex justify-content-center align-items-center">
                    <div class={`card ${styles.cardSize}`}>
                        <div class="card-body">
                            <div className="row mb-3">
                                <h1 className={`${styles.title} title-dark`}>Login</h1>
                            </div>
                            <div className="row">
                                <div className=" d-flex justify-content-start">

                                    <span>Não possui uma conta? </span>
                                    <span className='span ms-2' type='button' onClick={() => { props.setSection('signIn') }}>Cadastre-se</span>
                                </div>
                            </div>
                            <hr />

                            <div className="row mt-3 mb-3">
                                {/* <label for="exampleFormControlInput1" class="form-label">Email address</label> */}
                                <input type="email" class="form-control" id="loginEmail" placeholder="E-mail" />
                            </div>
                            <div className="row mb-3">
                                <input type="password" class="form-control" id="loginPassword" placeholder="Senha" />
                            </div>
                            <div className="row mb-3">
                                <button className='btn btn-outline-oceanBlue'>Entrar</button>
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