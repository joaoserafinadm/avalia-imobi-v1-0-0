import axios from "axios"
import { useState } from "react"
import { SpinnerSM } from "../components/loading/Spinners"
import baseUrl from "../../utils/baseUrl"




export default function EditUserStatus(props) {

    const user = props.user
    const token = props.token


    const [userStatusEdit, setUserStatusEdit] = useState(user.userStatus)
    const [saveError, setSaveError] = useState('')

    const [loadingSave, setLoadingSave] = useState(false)

    const handleSave = async () => {

        setLoadingSave(true)
        setSaveError('')

        await axios.patch(`${baseUrl()}/api/usersManagement`, {
            company_id: token.company_id,
            user_id: token.sub,
            userSelected: user._id,
            userStatus: userStatusEdit
        }).then(res => {
            props.setEditStatus(false)
            props.dataFunction()
        }).catch(e => {
            setSaveError('O usuário não pode ser editado')
            // setSaveError(e.response.data.message)
        })
    }


    return (
        <>
            <div className="modal-body">

                <div className="row d-flex justify-content-center fadeItem">
                    <div className="text-center col-12" style={{ width: '170px' }}>
                        <img src={user.profileImageUrl} alt="" className="rounded-circle" height={150} />
                    </div>
                    <div className="col-sm col-12">
                        <div className="row ">
                            <div className="col-12 text-sm-start text-center">
                                <span className="fs-5 bold"> {user.firstName} {user.lastName}</span>
                            </div>
                            <div className="col-12 text-secondary text-sm-start mt-2 ">
                                <div>
                                    <label htmlFor="categoriaSelect" className="fw-bold text-dark">Categoria</label>
                                    <select className="form-select" value={userStatusEdit} id="categoriaSelect" onChange={(e) => setUserStatusEdit(e.target.value)}>
                                        <option value="admGlobal">Administrador</option>
                                        <option value="user">Corretor</option>
                                    </select>
                                    <small className="text-danger">{saveError}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <button className="btn btn-sm btn-outline-secondary" onClick={() => props.setEditStatus(false)} disabled={loadingSave}>Cancelar</button>
                {loadingSave ?
                    <button className="btn btn-sm btn-outline-orange px-4" disabled>

                        <SpinnerSM />
                    </button>
                    :
                    <button className="btn btn-sm btn-outline-orange" onClick={() => handleSave()}>Salvar</button>
                }

            </div>
        </>

    )

}