import { useState } from "react"
import { SpinnerSM } from "../components/loading/Spinners"
import axios from "axios"
import baseUrl from "../../utils/baseUrl"
import { useDispatch, useSelector } from "react-redux"
import { addAlert } from "../../store/Alerts/Alerts.actions"




export default function DeleteUserStatus(props) {

    const user = props.user
    const token = props.token

    const dispatch = useDispatch()
    const alertsArray = useSelector(state => state.alerts)


    const [saveError, setSaveError] = useState('')

    const [loadingSave, setLoadingSave] = useState(false)


    const handleSave = async () => {

        setLoadingSave(true)
        setSaveError('')


        await axios.delete(`${baseUrl()}/api/usersManagement`, {
            data: {
                company_id: token.company_id,
                user_id: token.sub,
                userSelected: user?._id
            }
        }).then(res => {
            const alert = {
                type: 'alert',
                message: `${user?.firstName} excluído com sucesso!`,
                link: res.data
            }

            dispatch(addAlert(alertsArray, [alert]))

            props.handleCloseModal()
        }).then(res => {

            

            props.dataFunction()

        }).catch(e => {
            setSaveError('O usuário não pode ser excluído')
            // setSaveError(e.response.data.message)
        })


    }


    return (
        <>
            <div className="modal-body">
                <div className="row my-4">
                    <div className="col-12 justify-content-center">
                        <span className="bold">Tem certeza que deseja excluir "{user?.firstName} {user?.lastName}"?</span><br />
                        <small className="text-danger">{saveError}</small>
                    </div>
                </div>
            </div>
            <div className="modal-footer">

                <button className="btn btn-sm btn-outline-secondary" onClick={() => props.setDeleteStatus(false)}>Cancelar</button>
                {loadingSave ?
                    <button className="btn btn-sm btn-outline-danger px-4" disabled>
                        <SpinnerSM />
                    </button>
                    :
                    <button className="btn btn-sm btn-outline-danger" onClick={() => handleSave()} data-bs-dismiss="modal">Excluir</button>
                }

            </div>
        </>
    )
}