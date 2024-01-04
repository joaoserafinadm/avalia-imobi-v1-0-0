import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import isMobile from "../../utils/isMobile"
import { handleIcon, handleIconColor } from "../components/icons/propertyTypeIcons"
import styles from './ClientCard.module.scss'
import { faEye, faTrashAlt } from "@fortawesome/free-solid-svg-icons"



export default function ClientCard_02(props) {


    const client = props.elem

    const handleShowClient = (elem) => {


        if (elem.propertyType) return true
        else return false
    }



    return (
        <div class="card my-2 cardAnimation shadow" style={{ width: "16rem" }}>
            {client?.propertyType && (

                <span className={`${styles.propertyTypeHeader} d-flex align-items-center  ${handleIconColor(props.elem.propertyType)}`}>

                    {!isMobile() ?
                        <div className="small fadeItem me-2" >
                            {client?.propertyType}
                        </div>
                        :
                        <div className="small fadeItem me-1" style={{ fontSize: '12px' }} >
                            {client?.propertyType}
                        </div>

                    }
                    <FontAwesomeIcon icon={handleIcon(client?.propertyType)} className={`icon`} />
                </span>
            )}

            {!client?.files?.length ?
                <div className=" d-flex card-img-top justify-content-center align-items-center bg-light bg-gradient" style={{ height: '150px' }}>
                    <span className="text-secondary">Sem fotos</span>
                </div>
                :
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {client?.files?.map((elem, index) => (
                            <div key={index} className={`carousel-item active d-flex justify-content-center`}>
                                <img src={elem.url} className="card-img-top headerImgEdit" alt="..." />
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
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
                            <span>dsad</span>
                            <span>dsad</span>
                            <div className="col-12 my-2">
                                {client?.logradouro}, {client?.numero} - {client?.bairro}, {client?.cidade} / {client?.uf}
                            </div>


                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-12 d-flex justify-content-center">

                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" class="btn btn-light border" id="viewClientButton"><FontAwesomeIcon icon={faEye} className="icon  text-secondary" /></button>

                                    <button
                                        type="button"
                                        class="btn btn-light border"
                                        id="deleteClientButton"
                                        data-bs-toggle="modal"
                                        data-bs-target={"#deleteClientModal" + props.elem._id}>
                                        <FontAwesomeIcon icon={faTrashAlt} className="icon text-secondary" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>

                    :
                    <div className="row my-5 d-flex justify-content-center">
                        <span>Não cadastrado</span>
                    </div>
                }

            </div>
        </div>
    )
}