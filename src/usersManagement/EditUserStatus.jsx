import { useState } from "react"




export default function EditUserStatus(props) {

    const user = props.user


    const [userStatusEdit, setUserStatusEdit] = useState(user.userStatus)


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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <button className="btn btn-sm btn-outline-secondary" onClick={() => props.setEditStatus(false)}>Cancelar</button>
                <button className="btn btn-sm btn-outline-orange" onClick={() => props.setEditStatus(false)}>Salvar</button>

            </div>
        </>

    )

}