import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SpinnerLG } from "../../components/loading/Spinners";



export default function FinalizarButton(props) {


    const teste = () => {

        setTimeout(() => {
            var myCarousel = document.getElementById('clientFormCarouselDesktop');
            var carousel = new bootstrap.Carousel(myCarousel);
            carousel.next();

        }, 2000)
    }

    return (
        <div className="row my-5">
            <div className="col-12 d-flex justify-content-center">
                {props.loadingSave ?
                    <span
                        className="fs-3 text-secondary ">
                        Salvando Informações <SpinnerLG />
                    </span>
                    :
                    <span onClick={() => props.handleSave()}
                        type='button'
                        className="fs-3 text-secondary fadeItem1s cardAnimation">
                        Finalizar <FontAwesomeIcon icon={faArrowRight} className="ms-1" />
                    </span>
                }

            </div>
        </div>
    )
}