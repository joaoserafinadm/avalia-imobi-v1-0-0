


export default function ClientsManagementSections(props) {


    return (
        <div className="row  border-bottom mb-4" >
            <div className="col-12 d-flex">

                <span
                    className={`px-4 py-3 text-center ${props.section === 'myClients' ? 'fw-bold text-orange border-bottom border-2 ' : ''}`} type="button"
                    onClick={() => props.setSection('myClients')} data-bs-target="#clientsManagementSection" data-bs-slide-to='0'>
                    Meus Clientes
                </span>
                <span
                    className={`px-4 py-3 text-center ${props.section === 'allClients' ? 'fw-bold text-orange border-bottom  border-2 ' : ''}`} type="button"
                    onClick={() => props.setSection('allClients')} data-bs-target="#clientsManagementSection" data-bs-slide-to='1'
                >
                    Todos Clientes
                </span>
                
            </div>

        </div>
    )
}