import { faBuilding, faHome, faMapLocation, faStore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { porpertyTypeChange, setPropertyType } from "../../store/NewClientForm/NewClientForm.actions";
import { useEffect } from "react";




export default function PropertyTypeCard(props) {

    const newClientForm = useSelector(state => state.newClientForm)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(porpertyTypeChange())

    }, [newClientForm.propertyType])

    return (
        <div className={`card cardSize cardAnimation ${props.type === newClientForm.propertyType ? 'border-selected' : ''} `}
            type='button'
            onClick={() => dispatch(setPropertyType(props.type))}>
            <div className="card-body">

                <div className="row  d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon className={`icon ${props.type === newClientForm.propertyType ? 'title-color' : 'text-secondary'}`}
                        icon={props.type === 'Apartamento' ? faBuilding :
                            props.type === 'Casa' ? faHome :
                                props.type === 'Comercial' ? faStore :
                                    props.type === 'Terreno' ? faMapLocation : faHome} />
                </div>
                <div className="row mt-1 d-flex">
                    <div className="col-12 d-flex justify-content-center align-items-center">

                        <span className={` ${props.type === newClientForm.propertyType ? 'title-color' : 'text-secondary'}`}>{props.type}</span>
                    </div>
                </div>
            </div>
        </div>
    )


}