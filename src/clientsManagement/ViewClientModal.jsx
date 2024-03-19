
import { useEffect, useState } from "react"
import PropertyTypeCard from "../addClient/PropertyTypeCard"
import Sections from "../components/Sections"
import Map from "../pages/newClient/Map"
import { Swiper, SwiperSlide } from "swiper/react"
import ClientInfo from "./ClientInfo"
import Valuation from "./Valuation"







export default function ViewClientModal(props) {

    const client = props.clientSelected

    const [section, setSection] = useState('Informações')

    useEffect(() => {
        setSection('Informações')
    }, [client])



    return (
        <div class="modal fade" id="viewClientModal" tabindex="-1" aria-labelledby="Modal" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title title-dark bold">{client?.clientName} {client?.clientLastName}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body-lg">
                        <div className="container carousel  " data-bs-touch="false" data-bs-interval='false' id="clientManage">

                            <Sections
                                section={section} idTarget="clientManage"
                                setSection={value => setSection(value)}
                                sections={["Informações", "Avaliação"]} />

                            <div className="carousel-inner ">
                                <div className="carousel-item active">
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-12" >
                                            <ClientInfo client={client} />

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-inner ">
                                <div className="carousel-item ">
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-12" >
                                            <Valuation client={client} />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Fechar</button>
                    </div>

                </div>
            </div>
        </div>
    )
}