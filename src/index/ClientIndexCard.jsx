import { faBuilding } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { handleIcon, handleIconColor } from "../components/icons/propertyTypeIcons"
import isMobile from "../../utils/isMobile"
import ClientStatus from "../clientsManagement/ClientStatus"



export default function ClientIndexCard(props) {

    const { elem } = props

    return (
        <div className="card shadow">
            <div className="row">
                <div className="col-12 d-flex">


                <div style={{ width: '75px' }}>
                    <img className="rounded" src={elem.files[0].url} height="75" width="75" alt="" />
                </div>
                <div className="col px-2">
                    <div className="row ">
                        <div className="col-12 d-flex justify-content-between">

                            <span className="small fw-bold">{elem.clientName} {elem.clientLastName}</span>

                            {/* {elem?.propertyType && (


                                <span className={`text-white d-flex px-2 py-1 rounded justify-content-center ${handleIconColor(elem?.propertyType)}`}  >

                                    {!isMobile() ?
                                        <div className="small  me-2" style={{ fontSize: '12px' }} >
                                            {elem?.propertyType}
                                        </div>
                                        :
                                        <div className="small  me-1" style={{ fontSize: '12px' }} >
                                            {elem?.propertyType}
                                        </div>

                                    }
                                    <FontAwesomeIcon icon={handleIcon(elem?.propertyType)} className={`icon`} />
                                </span>

                            )} */}
                        </div>
                        <div className="col-12">
                            <ClientStatus status={elem?.status} id={elem?._id} />

                        </div>



                    </div>

                    <hr />
                    <div className="row">

                    </div>
                </div>
                </div>

            </div>
        </div>
    )
}