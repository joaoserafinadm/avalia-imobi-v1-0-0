import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import isMobile from "../../utils/isMobile"
import { handleIcon, handleIconColor } from "../components/icons/propertyTypeIcons"
import styles from './ClientCard.module.scss'



export default function ClientCard_02(props) {


    const client = props.elem



    return (
        <div class="card my-2" style={{ width: "16rem" }}>
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
            <div className=" d-flex justify-content-center align-items-center bg-secondary" style={{ height: '150px' }}>

                {!client?.files?.length ?
                    <span className="text-light">Sem fotos</span>
                    :
                    <img src={!!client?.files?.length ? client?.files[0]?.url : ''} class="card-img-top headerImgEdit" alt="..." />
                }

            </div>
            <div class="card-body">

                <h5 class="card-title">{client?.clientName} {client.clientLastName}</h5>
                <div className="row">
                    <span>dsad</span>
                    <span>dsad</span>
                    <span>dsad</span>


                </div>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}