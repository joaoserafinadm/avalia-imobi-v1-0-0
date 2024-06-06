import { faEdit, faEye, faFileDownload, faShare, faShareAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"



export default function HandleButtons(props) {

    const { client, setClientSelected, elem } = props



    return (
        <>
            {client?.status !== 'outdated' ?
                <div className="row d-flex justify-content-center mt-2">
                    <div className="col-12 d-flex justify-content-center">

                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button
                                type="button"
                                class="btn btn-light border"
                                id={"viewClientButton" + elem._id}
                                data-bs-toggle="modal"
                                data-bs-target="#viewClientModal"
                                onClick={() => setClientSelected(elem)}>
                                <FontAwesomeIcon icon={faEye} className="icon  text-secondary" />
                            </button>
                            {(client?.status === 'evaluated') && (
                                <button className="btn btn-light border" id={"shareValuationButton" + elem._id}
                                    onClick={() => props.setClientSelected(props.elem)}
                                    data-bs-toggle="modal"
                                    data-bs-target="#viewValuationModal">
                                    <FontAwesomeIcon icon={faShareAlt} className="icon text-secondary" />
                                </button>
                            )}
                            {(client?.status === 'answered') && (
                                <button className="btn btn-light border"
                                    onClick={() => props.setClientSelected(props.elem)}
                                    data-bs-toggle="modal" id={"downloadValuationButton" + elem._id}
                                    data-bs-target="#viewValuationModal">
                                    <FontAwesomeIcon icon={faFileDownload} className="icon text-secondary" />
                                </button>
                            )}

                            <button
                                type="button"
                                class="btn btn-light border"
                                id={"deleteClientButton" + elem._id}
                                data-bs-toggle="modal"
                                data-bs-target={"#deleteClientModal"}
                                onClick={() => setClientSelected(elem)}>
                                <FontAwesomeIcon icon={faTrashAlt} className="icon text-secondary" />
                            </button>
                        </div>
                    </div>
                </div>
                :
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <div class="btn-group" role="group" aria-label="Basic example">

                            <button onClick={() => handleShare(elem.urlToken + "&userId=" + token.sub)}
                                type="button"
                                class="btn btn-light border"
                                id={"shareClientButton" + elem._id}>
                                <FontAwesomeIcon icon={faShare} className="icon  text-secondary" />
                            </button>
                            <Link href={`/clientEdit/${elem._id}`} className="btn btn-light border" id={"editClientButton" + elem._id}>
                                {/* <button type="button" class="btn btn-light border" id={"editClientButton" + elem._id}> */}
                                <FontAwesomeIcon icon={faEdit} className="icon  text-secondary" />
                                {/* </button> */}
                            </Link>
                            <button
                                type="button"
                                class="btn btn-light border"
                                id={"deleteClientButton" + elem._id}
                                data-bs-toggle="modal"
                                data-bs-target={"#deleteClientModal"}
                                onClick={() => setClientSelected(elem)}>
                                <FontAwesomeIcon icon={faTrashAlt} className="icon text-secondary" />
                            </button>
                        </div>

                    </div>

                </div>
            }

        </>
    )
}