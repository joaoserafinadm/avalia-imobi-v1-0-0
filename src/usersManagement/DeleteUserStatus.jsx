



export default function DeleteUserStatus(props) {

    const user = props.user



    return (
        <>
            <div className="modal-body">
                <div className="row my-4">
                    <div className="col-12 justify-content-center">
                        <span className="bold">Tem certeza que deseja excluir "{user.firstName} {user.lastName}"?</span>
                    </div>
                </div>
            </div>
            <div className="modal-footer">

                <button className="btn btn-sm btn-outline-secondary" onClick={() => props.setDeleteStatus(false)}>Cancelar</button>
                <button className="btn btn-sm btn-outline-danger" onClick={() => props.setDeleteStatus(false)}>Excluir</button>
            </div>
        </>
    )
}