import { faBuilding, faHome, faMapLocation, faStore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { porpertyTypeChange, setPropertyType } from "../../store/NewClientForm/NewClientForm.actions";
import { useEffect, useRef } from "react";




export default function PropertyTypeCard(props) {

    const newClientForm = useSelector(state => state.newClientForm)

    const dispatch = useDispatch()

    const prevPropertyTypeRef = useRef();

    useEffect(() => {


        const prevPropertyType = prevPropertyTypeRef.current;

        if (props.edit) {
            // Executa propertyTypeChange somente se o valor anterior não for undefined
            if (prevPropertyType !== undefined) {
                dispatch(porpertyTypeChange());
            }
        } else {
            dispatch(porpertyTypeChange());
        }

        // Atualiza o valor anterior de propertyType
        prevPropertyTypeRef.current = newClientForm.propertyType;




    }, [newClientForm.propertyType])

    return (
        <div className={`card cardSize cardAnimation ${props.type === newClientForm.propertyType ? 'border-selected' : ''} `}
            type='button'
            onClick={() => dispatch(setPropertyType(props.type))}>
            <div className="card-body d-flex justify-content-center align-items-center">
                <div>


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
        </div>
    )


}