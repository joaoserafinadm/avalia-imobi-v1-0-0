import { useState } from "react"
import ClientCard from "./ClientCard"
import Pagination from "./Pagination"
import ClientCard_02 from "./ClientCard_02"



export default function ClientsPage(props) {

    const [idSelected, setIdSelected] = useState('')
    const [page, setPage] = useState(1)

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
            <div className="row scrollTop  d-flex" id="clientsManagementList">

                {handleClientsArray(clients, page).map(elem => {

                    return (
                        <div className="col-12 col-sm-6 col-md-4 col-xl-3 d-flex justify-content-center">
                            <ClientCard_02
                                elem={elem}
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
        </>
    )
}