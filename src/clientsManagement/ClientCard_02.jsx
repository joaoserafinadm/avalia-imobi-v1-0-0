import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import isMobile from "../../utils/isMobile"
import { handleIcon, handleIconColor } from "../components/icons/propertyTypeIcons"
import styles from './ClientCard.module.scss'
import { faEye, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import tippy from "tippy.js";



export default function ClientCard_02(props) {


    const client = props.elem

    useEffect(() => {
        tippy("#viewClientButton" + props.elem._id, {
            content: "Visualizar",
            placement: 'bottom'
        });
        tippy("#deleteClientButton" + props.elem._id, {
            content: "Deletar",
            placement: 'bottom'
        });
    }, [])

    const handleShowClient = (elem) => {


        if (elem.propertyType) return true
        else return false
    }

    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? client?.files.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === client?.files.length - 1 ? 0 : prevIndex + 1));
    };



    return (
        <div class="card my-2 cardAnimation shadow" style={{ width: "100%" }} >
            {client?.propertyType && (

                <span className={`${styles.propertyTypeHeader} d-flex align-items-center  ${handleIconColor(props.elem.propertyType)}`}  >

                    {!isMobile() ?
                        <div className="small  me-2" >
                            {client?.propertyType}
                        </div>
                        :
                        <div className="small  me-1" style={{ fontSize: '12px' }} >
                            {client?.propertyType}
                        </div>

                    }
                    <FontAwesomeIcon icon={handleIcon(client?.propertyType)} className={`icon`} />
                </span>
            )}

            {!client?.files?.length ?
                <div className=" d-flex card-img-top justify-content-center align-items-center bg-light bg-gradient" style={{ height: '170px' }}>
                    <span className="text-secondary">Sem fotos</span>
                </div>
                :
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{ zIndex: 0 }}>
                    <div className="carousel-inner card-img-top  ">
                        {client?.files?.map((elem, index) => (
                            <div key={index} className={`carousel-item text-center bg-secondary  ${index === activeIndex ? 'active' : ''}`}>
                                <img src={elem.url} className={`card-img-top  ${styles.clientCardImage}`} alt={`Slide ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-slide="prev" onClick={handlePrev} >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-slide="next" onClick={handleNext} >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            }

            {/* </div> */}
            <div class="card-body">

                <h5 class="card-title">{client?.clientName} {client.clientLastName}</h5>
                {handleShowClient(client) ?
                    <>
                        <div className="row small">

                            <div className="col-12 my-2">
                                {client?.bairro && client?.cidade && client?.uf && (
                                    <>
                                        {client?.bairro}, {client?.cidade} / {client?.uf}
                                    </>
                                )}
                            </div>


                        </div>
                        <div className="row d-flex justify-content-end">

                            <span className="d-flex align-items-center">
                                <div className="me-2">
                                    <img className="cardProfileImg"
                                        src="https://res.cloudinary.com/joaoserafinadm/image/upload/v1700622419/AVALIA%20IMOBI/USERS_IMG/xwsqidtdw3srsnjvom50.jpg" alt="" />
                                </div>
                                <div className="small">

                                    Juliane Kosloski
                                </div>
                            </span>

                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-12 d-flex justify-content-center">

                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" class="btn btn-light border" id={"viewClientButton" + props.elem._id}><FontAwesomeIcon icon={faEye} className="icon  text-secondary" /></button>

                                    <button
                                        type="button"
                                        class="btn btn-light border"
                                        id={"deleteClientButton" + props.elem._id}
                                        data-bs-toggle="modal"
                                        data-bs-target={"#deleteClientModal" + props.elem._id}>
                                        <FontAwesomeIcon icon={faTrashAlt} className="icon text-secondary" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>

                    :
                    <div className="row my-5 ">
                        <div className="col-12 d-flex justify-content-center">
                            <span>Desatualizado</span>

                        </div>
                    </div>
                }



            </div>
        </div>
    )
}