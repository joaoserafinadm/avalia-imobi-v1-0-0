import { faArrowLeft, faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import slideNumber from "../../../utils/slideNumber";
import { setSlide } from "../../../store/NewClientForm/NewClientForm.actions";





export default function FixedButtons(props) {

    const newClientForm = useSelector(state => state.newClientForm)

    const dispatch = useDispatch()


    const handleSlide = (id) => {
        setTimeout(() => {

            dispatch(setSlide(slideNumber(id)))
        }, 700)
    }


    const handleDisabled = (form) => {

        if (form.slide === 1) {
            if (!form.clientName || !form.celular) {
                return true
            } else {
                return false
            }
        }

        if (form.slide === 2) {

            if (form.propertyType === 'Apartamento') {
                if (!form.areaTotal || !form.areaTotalPrivativa || !form.quartos || !form.suites || !form.banheiros || !form.vagasGaragem) {
                    return true
                } else {
                    return false
                }
            } else {
                return true
            }
        }

    }




    return (
        <div className="row ps-2 pe-3 fadeItem1s">
            {newClientForm.slide === 0 && (

                <button className="ms-2 btn btn-sm btn-orange fadeItem" data-bs-target="#carouselExampleControls" data-bs-slide="next" onClick={() => handleSlide('carouselExampleControls')}>
                    Começar <FontAwesomeIcon icon={faArrowRight} className="icon ms-1" />
                </button>
            )}
            {(newClientForm.slide === 1 ||
                newClientForm.slide === 2 ||
                newClientForm.slide === 3 ||
                newClientForm.slide === 4 ||
                newClientForm.slide === 5) && (
                    <div className="fadeItem d-flex">
                        <div className="col-6">
                            <div className="row">
                                <span className="ms-2 text-center text-secondary"
                                    data-bs-target="#carouselExampleControls"
                                    data-bs-slide="previus"
                                    onClick={() => handleSlide('carouselExampleControls')}>
                                    <FontAwesomeIcon icon={faArrowLeft} className="icon ms-1 " /> Voltar
                                </span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="row">

                                <button className="ms-2 btn btn-sm btn-orange"
                                    data-bs-target="#carouselExampleControls"
                                    disabled={handleDisabled(newClientForm)}
                                    data-bs-slide="next"
                                    onClick={() => handleSlide('carouselExampleControls')}>
                                    Continuar <FontAwesomeIcon icon={faArrowRight} className="icon ms-1" />
                                </button>
                            </div>
                        </div>
                    </div>

                )}

            {newClientForm.slide === 6 && (

                <div className="fadeItem d-flex">
                    <div className="col-6">
                        <div className="row">
                            <span className="ms-2 text-center text-secondary"
                                data-bs-target="#carouselExampleControls"
                                data-bs-slide="previus"
                                onClick={() => handleSlide('carouselExampleControls')}>
                                <FontAwesomeIcon icon={faArrowLeft} className="icon ms-1 " /> Voltar
                            </span>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">

                            <button className="ms-2 btn btn-sm btn-orange"
                                data-bs-target="#carouselExampleControls"
                                disabled={handleDisabled(newClientForm)}
                                data-bs-slide="next"
                                onClick={() => handleSlide('carouselExampleControls')}>
                                Finalizar <FontAwesomeIcon icon={faArrowRight} className="icon ms-1" />
                            </button>
                        </div>
                    </div>
                </div>
            )}


        </div>
    )


}