import { useEffect, useState } from "react"
import ClientCard from "./ClientCard"
import Pagination from "./Pagination"
import ClientCard_02 from "./ClientCard_02"
import ViewClientModal from "./ViewClientModal"
import ClientStatus from "./ClientStatus"



export default function ClientsPage(props) {

    const [idSelected, setIdSelected] = useState('')
    const [page, setPage] = useState(1)
    const [clientSelected, setClientSelected] = useState('')


    const clients = props.clients.filter(elem => {
        if (props.section === 'myClients') return elem.id === props.user_id
        if (props.section === 'allClients') return elem
    })


    const elementosPorPagina = 8;

    const handleClientsArray = (array, page) => {

        const indiceInicio = (page - 1) * elementosPorPagina;
        const indiceFim = indiceInicio + elementosPorPagina;

        return array.slice(indiceInicio, indiceFim);

    }


    return (
        <>
            {/* <div className="row mb-3">
                <div className="col-12 col-sm-6 col-md-3 d-flex justify-content-start align-items-center my-1">
                    <ClientStatus status='outdated' />
                    <span className="small ms-1">
                        Aguardando cadastro
                    </span>
                </div>
                <div className="col-12 col-sm-6 col-md-3 d-flex justify-content-start align-items-center my-1">
                    <ClientStatus status='active' />
                    <span className="small ms-1">
                        Aguardando avaliação
                    </span>
                </div>
                <div className="col-12 col-sm-6 col-md-3 d-flex justify-content-start align-items-center my-1">
                    <ClientStatus status='evaluated' />
                    <span className="small ms-1">
                        Avaliado
                    </span>
                </div>
                <div className="col-12 col-sm-6 col-md-3 d-flex justify-content-start align-items-center my-1">
                    <ClientStatus status='sold' />
                    <span className="small ms-1">
                        Vendido
                    </span>
                </div>
            </div> */}
            <div className="row scrollTop  d-flex" id="clientsManagementList">

                {handleClientsArray(clients, page).map(elem => {

                    return (
                        <div className="col-12 col-sm-6 col-md-4 col-xl-3 d-flex justify-content-center">
                            <ClientCard_02
                                elem={elem} setClientSelected={value => setClientSelected(value)}
                                setIdSelected={value => idSelected === value ? setIdSelected('') : setIdSelected(value)}
                                idSelected={idSelected} />
                        </div>
                    )
                })
                }

            </div>

            <div className="row ">
                <div className="col-12 d-flex justify-content-center">
                    <Pagination array={props.clients} setPage={value => setPage(value)} page={page} elementosPorPagina={elementosPorPagina} />
                </div>
            </div>

            <ViewClientModal clientSelected={clientSelected} />

        </>
    )
}