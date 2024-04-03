import { Swiper, SwiperSlide } from "swiper/react"
import isMobile from "../../utils/isMobile"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouseMedical } from "@fortawesome/free-solid-svg-icons"
import PropertyCollection from "./PropertyCollection"
import PropertyAddModal from "./PropertyAdd"
import { useState } from "react"
import { maskMoney } from "../../utils/mask"





export default function ValuationConfig(props) {

    const client = props.client
    const propertyArray = props.propertyArray

    const [forceUpdate, setForceUpdate] = useState(0)

    const priceAverage = (array) => {
        console.log(array)

        const average = (array.reduce((a, b) => a + +b.propertyPrice.replace(/\./g, ''), 0) / array.length).toFixed(0)

        console.log(average.toString())

        return maskMoney(average.toString())
    }







    return (
        <>
            <div className="col-12">
                <label htmlFor="" className="fw-bold mb-2">Imóveis para comparação</label>

                <PropertyCollection
                    propertyArray={propertyArray}
                    setPropertyArray={value => props.setPropertyArray(value)} />



                <PropertyAddModal
                    client={client}
                    setPropertyArray={value => props.setPropertyArray(value)}
                    setForceUpdate={() => setForceUpdate(forceUpdate + 1)}
                    propertyArray={propertyArray} />
            </div>

            <div className="col-12 mt-5">
                <label htmlFor="" className="fw-bold mb-2">Preço médio dos imóveis</label>
                <div className="col-12 card d-flex justify-content-center align-items-center fs-1 my-3">
                    <div className="card-body">

                        <span className="text-orange me-1">R$</span>
                        <span className="text-secondary bold">{priceAverage(propertyArray) !== 'NaN' ? priceAverage(propertyArray) + ',00' : 0}</span>
                    </div>
                </div>



            </div>

        </>
    )
}