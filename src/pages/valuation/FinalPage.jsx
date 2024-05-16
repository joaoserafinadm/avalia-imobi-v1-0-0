import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import Icons from "../../components/icons"
import PdfConfigModal from "./PdfConfigModal"




export default function FinalPage(props) {

    const [comment, setCommet] = useState('')
    const [stars, setStars] = useState(0)


    return (
        <div className="col-12 ">


            <div className="row  d-flex justify-content-center align-items-center">
                <div className="card " style={{ height: '98vh', width: '98vw', overflowY: 'scroll' }} >
                    <div className="row d-flex">



                        <div className="col-12 d-flex justify-content-center mt-5 ">
                            <div className="col-12 col-lg-8 text-center">

                                <span className="fs-4">
                                    Gostaria de deixar alguma observação sobre esta avaliação?
                                </span>
                            </div>

                        </div>
                        <div className="col-12 d-flex justify-content-center ">
                            <div className="col-12 col-lg-8 text-center">

                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                            </div>

                        </div>

                        <div className="col-12 d-flex justify-content-center mt-5 ">
                            <div className="col-12 col-lg-8 text-center">

                                <span className="fs-4">
                                    Qual foi sua satisfação com a avaliação?
                                </span>
                            </div>

                        </div>
                        <div className="col-12 d-flex justify-content-center my-3 mb-5">
                            <div className="col-12 col-lg-8 text-center">

                                <span className="cardAnimation" type="button" onClick={() => { setStars(1) }}>
                                    <FontAwesomeIcon icon={faStar} className={`fs-1 mx-1 text-secondary ${stars >= 1 ? 'text-warning' : 'text-secondary'}`} />
                                </span>
                                <span className="cardAnimation" type="button" onClick={() => { setStars(2) }}>
                                    <FontAwesomeIcon icon={faStar} className={`fs-1 mx-1 text-secondary ${stars >= 2 ? 'text-warning' : 'text-secondary'}`} />
                                </span>
                                <span className="cardAnimation" type="button" onClick={() => { setStars(3) }}>
                                    <FontAwesomeIcon icon={faStar} className={`fs-1 mx-1 text-secondary ${stars >= 3 ? 'text-warning' : 'text-secondary'}`} />
                                </span>
                                <span className="cardAnimation" type="button" onClick={() => { setStars(4) }}>
                                    <FontAwesomeIcon icon={faStar} className={`fs-1 mx-1 text-secondary ${stars >= 4 ? 'text-warning' : 'text-secondary'}`} />
                                </span>
                                <span className="cardAnimation" type="button" onClick={() => { setStars(5) }}>
                                    <FontAwesomeIcon icon={faStar} className={`fs-1 mx-1 text-secondary ${stars >= 5 ? 'text-warning' : 'text-secondary'}`} />
                                </span>
                            </div>

                        </div>

                        <div className="col-12 d-flex justify-content-center my-3 mb-5">
                            <div className="col-12 col-lg-8 text-center">
                                <span className="fs-4">
                                    Clique o botão abaixo para fazer o download do PDF completo da avaliação do seu imóvel
                                </span>

                            </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center my-3 mb-5">
                            <div className="col-12 col-lg-8 text-center">
                                <button className="btn btn-secondary btn-lg"
                                    data-bs-toggle="modal" data-bs-target="#pdfConfigModal">
                                    Baixar PDF
                                </button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    )
}