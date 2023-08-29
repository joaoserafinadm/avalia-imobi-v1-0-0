import { faLeftLong } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AiOutlineLeft } from "@react-icons/all-files/ai/AiOutlineLeft";





export default function RescuePassword(props) {




    return (
        <div className="row fadeItem" style={{ height: '100%' }}>
            <div className="d-flex justify-content-center align-items-center">

                <div className="card p-2">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12">
                                <h5 className="title-primary">Recuperar senha</h5>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-12">
                                <span className="title-primary">Insira o endereço de e-mail associado à sua conta Corretor de Valor.</span>
                            </div>
                        </div>
                        <div className="row my-3">
                            <input type="email" class="form-control" id="loginEmail" placeholder="E-mail" />

                        </div>
                        <div className="row my-1">
                            <button className='btn btn-oceanBlue '>Enviar</button>
                        </div>
                        <div className="row mt-3">
                            <div className="col-12 d-flex justify-content-start">
                                <span className="span" type='button' onClick={() => { props.setSection('signIn') }}><AiOutlineLeft className="me-2"/>  Voltar</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>





        </div>
    )
}