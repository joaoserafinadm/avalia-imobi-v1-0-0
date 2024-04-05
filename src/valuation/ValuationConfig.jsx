import { Swiper, SwiperSlide } from "swiper/react"
import isMobile from "../../utils/isMobile"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouseMedical } from "@fortawesome/free-solid-svg-icons"
import PropertyCollection from "./PropertyCollection"
import PropertyAddModal from "./PropertyAdd"
import { useState } from "react"
import { maskMoney } from "../../utils/mask"
import PropertyCalc from "./PropertyCalc"





export default function ValuationConfig(props) {

    const client = props.client

    const [propertyArray, setPropertyArray] = useState([])
    const [areaTotalStatus, setAreaTotalStatus] = useState(false)
    const [valorIdealRange, setValorIdealRange] = useState(0)
    const [curtoPrazoRange, setCurtoPrazoRange] = useState(7)
    const [longoPrazoRange, setLongoPrazoRange] = useState(7)

    const [forceUpdate, setForceUpdate] = useState(0)

    const priceAverage = (array) => {
        console.log(array)

        const average = (array.reduce((a, b) => a + +b.propertyPrice.replace(/\./g, ''), 0) / array.length).toFixed(0)


        return maskMoney(average.toString())
    }







    return (
        <>
            <div className="col-12">
                <label htmlFor="" className="fw-bold mb-2">Imóveis para comparação</label>

                <PropertyCollection
                    propertyArray={propertyArray}
                    setPropertyArray={value => setPropertyArray(value)} />



                <PropertyAddModal
                    client={client}
                    setPropertyArray={value => setPropertyArray(value)}
                    setForceUpdate={() => setForceUpdate(forceUpdate + 1)}
                    propertyArray={propertyArray} />
            </div>

            {propertyArray.length > 0 && (

                <PropertyCalc
                    client={client}
                    propertyArray={propertyArray} />
            )}


        </>
    )
}



