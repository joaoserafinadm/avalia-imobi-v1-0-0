import { faBuilding, faHome, faMapLocation, faStore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




export default function PropertyTypeCard(props) {


    return (
        <div className={`card cardSize cardAnimation ${props.type === props.propertyType ? 'border-selected' : ''} `}
            type='button'
            onClick={() => props.setPropertyType(props.type)}>
            <div className="card-body">

                <div className="row  d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon className={`icon ${props.type === props.propertyType ? 'title-color' : 'text-secondary'}`}
                        icon={props.type === 'Apartamento' ? faBuilding :
                            props.type === 'Casa' ? faHome :
                                props.type === 'Comercial' ? faStore :
                                    props.type === 'Terreno' ? faMapLocation : faHome} />
                </div>
                <div className="row mt-1 ">
                    <div className="col-12 d-flex justify-content-center align-items-center">

                        <span className={` ${props.type === props.propertyType ? 'title-color' : 'text-secondary'}`}>{props.type}</span>
                    </div>
                </div>
            </div>
        </div>
    )


}