import Modal from "../components/Modal";




export default function DeleteClientModal(props) {



    const handleDeleteClient = async (id) => {


        await axios.delete(`${baseUrl()}/api/clientsManagement`, {
            params: {
                id
            }
        }).then(res => {
            props.dataFunction()
        }).catch(e => {
            console.log(e)
        })
    }



    return (
        <Modal title="Deletar cliente" id={"deleteClientModal" + props.elem?._id}>
            <div className="modal-body">
                <div className="row">
                    <div className="col-12">

                        <p>Tem a certeza que deseja deletar "{props.elem?.clientName}{" " + props.elem?.clientLastName}"?</p>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-danger btn-sm" data-bs-dismiss="modal" onClick={() => handleDeleteClient(props.elem?._id)}>Deletar</button>
            </div>
        </Modal>

    )



}