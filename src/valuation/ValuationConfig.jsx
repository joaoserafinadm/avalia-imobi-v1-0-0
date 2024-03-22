import { Swiper, SwiperSlide } from "swiper/react"
import isMobile from "../../utils/isMobile"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouseMedical } from "@fortawesome/free-solid-svg-icons"
import PropertyCollection from "./PropertyCollection"
import PropertyAdd from "./PropertyAdd"
import { useState } from "react"





export default function ValuationConfig(props) {

    const client = props.client

    const [propertyArray, setPropertyArray] = useState([])
    const [forceUpdate, setForceUpdate] = useState(0)





    return (
        <>
            <div className="col-12">
                <label htmlFor="" className="fw-bold mb-2">Imóveis para comparação</label>

                <PropertyCollection propertyArray={propertyArray} />



                <PropertyAdd
                    client={client}
                    setPropertyArray={value => setPropertyArray(value)}
                    setForceUpdate={() => setForceUpdate(forceUpdate + 1)}
                    propertyArray={propertyArray} />
            </div>

            <div className="col-12 mt-5">
                <label htmlFor="" className="fw-bold mb-2">Preço médio dos imóveis</label>
                <div className="col-12 d-flex justify-content-center align-items-center fs-1 my-3">
                    <span className="text-orange me-1">R$</span>
                    <span className="text-secondary bold">132.456,00</span>
                </div>



            </div>

        </>
    )
}