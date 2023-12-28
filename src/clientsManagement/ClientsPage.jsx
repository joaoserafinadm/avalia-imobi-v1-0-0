import { useState } from "react"
import ClientCard from "./ClientCard"
import Pagination from "./Pagination"



export default function ClientsPage(props) {

    const [idSelected, setIdSelected] = useState('')
    const [page, setPage] = useState(1)

    const clients = props.clients.filter(elem => {
        if (props.section === 'myClients') return elem.id === props.user_id
        if (props.section === 'allClients') return elem
    })

    const elementosPorPagina = 5;

    const handleClientsArray = (array, page) => {

        const indiceInicio = (page - 1) * elementosPorPagina;
        const indiceFim = indiceInicio + elementosPorPagina;

        return array.slice(indiceInicio, indiceFim);


    }


    return (
        <>
            <div className="row scrollTop" id="clientsManagementList">
                <div className="col-12">

                    {handleClientsArray(clients, page).map(elem => {

                        return (
                            <ClientCard
                                elem={elem}
                                setIdSelected={value => idSelected === value ? setIdSelected('') : setIdSelected(value)}
                                idSelected={idSelected} />
                        )
                    })
                    }

                </div>
            </div>

            <div className="row ">
                <div className="col-12 d-flex justify-content-center">
                    <Pagination array={props.clients} setPage={value => setPage(value)} page={page} elementosPorPagina={elementosPorPagina} />
                </div>
            </div>
        </>
    )
}