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


    const [forceUpdate, setForceUpdate] = useState(0)



    return (
        <>
            <div className="col-12">
                <label htmlFor="" className="fw-bold mb-2">Imóveis para comparação</label>

                <PropertyCollection
                    propertyArray={props.propertyArray}
                    setPropertyArray={value => props.setPropertyArray(value)} />
                <small className="text-danger">{props.propertyArrayError}</small>



                <PropertyAddModal
                    client={client}
                    setPropertyArray={value => props.setPropertyArray(value)}
                    setForceUpdate={() => setForceUpdate(forceUpdate + 1)}
                    propertyArray={props.propertyArray} />
            </div>

            {props.propertyArray.length > 0 && (

                <PropertyCalc
                    setCalcVariables={value => props.setCalcVariables(value)}
                    calcVariables={props.calcVariables}
                    setValuationCalc={value => props.setValuationCalc(value)}
                    valuationCalc={props.valuationCalc}
                    client={client}
                    propertyArray={props.propertyArray} />
            )}


        </>
    )
}



