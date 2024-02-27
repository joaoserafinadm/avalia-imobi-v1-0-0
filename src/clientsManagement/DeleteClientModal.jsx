
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import baseUrl from "../../utils/baseUrl";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addAlert } from "../../store/Alerts/Alerts.actions";



export default function DeleteClientModal(props) {

    const dispatch = useDispatch()
    const alertsArray = useSelector(state => state.alerts)


    const token = jwt.decode(Cookies.get("auth"));


    const client = props.clientSelected


    const handleDeleteClient = async (id) => {

        const data = {
            company_id: token.company_id,
            user_id: token.sub,
            clientId: id,
        }


        await axios.delete(`${baseUrl()}/api/clientsManagement`, {
            params: data
        }).then(res => {

            const alert = {
                type: 'alert',
                message: 'Cliente deletado com sucesso.',
                link: ''
            }

            dispatch(addAlert(alertsArray, [alert]))

            props.dataFunction()
        }).catch(e => {
            console.log(e)
        })
    }



    return (

        <div class="modal fade" id="deleteClientModal" tabindex="-1" aria-labelledby="deleteClienteModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title title-dark bold">Deletar Cliente</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div className="row">
                            <div className="col-12">
                                <p>Tem a certeza que deseja deletar <b className="bold">{client?.clientName}{" " + client?.clientLastName}</b>?</p>
                            </div>
                        </div>                
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-sm btn-danger" data-bs-dismiss="modal" onClick={() => handleDeleteClient(client?._id)}>Deletar</button>
                    </div>
                </div>
            </div>
        </div>




    )



}