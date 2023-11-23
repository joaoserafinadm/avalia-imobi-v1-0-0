import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import slideNumber from "../../../utils/slideNumber";





export default function FixedButtons(props) {




    return (
        <div className="row ps-2 pe-3 fadeItem1s">
            {props.slide === 0 && (

                <button className="ms-2 btn btn-sm btn-orange fadeItem" data-bs-target="#carouselExampleControls" data-bs-slide="next" onClick={() => setTimeout(() => props.setSlide(slideNumber('carouselExampleControls')), 700)}>
                    Começar <FontAwesomeIcon icon={faArrowRight} className="icon ms-1" />
                </button>
            )}
            {props.slide === 1 && (
                <div className="fadeItem d-flex">
                    <div className="col-6">
                        <div className="row">
                            <span className="ms-2 text-center span" data-bs-target="#carouselExampleControls" data-bs-slide="previus" onClick={() => setTimeout(() => props.setSlide(slideNumber('carouselExampleControls')), 700)}>
                            <FontAwesomeIcon icon={faArrowLeft} className="icon ms-1" /> Voltar 
                            </span>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">

                            <button className="ms-2 btn btn-sm btn-orange" data-bs-target="#carouselExampleControls" data-bs-slide="next" onClick={() => setTimeout(() => props.setSlide(slideNumber('carouselExampleControls')), 700)}>
                                Continuar <FontAwesomeIcon icon={faArrowRight} className="icon ms-1" />
                            </button>
                        </div>
                    </div>
                </div>

            )}

        </div>
    )


}