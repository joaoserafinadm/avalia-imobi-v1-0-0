import { useDispatch, useSelector } from "react-redux";
import PropertyTypeCard from "../../addClient/PropertyTypeCard";
import TypeApartamento from "./TypeApartamento";
import { setCelular, setClientLastName, setClientName, setEmail } from "../../../store/NewClientForm/NewClientForm.actions";



export default function Slide01(props) {

    const newClientForm = useSelector(state => state.newClientForm)
    const dispatch = useDispatch()



    return (
        <div className="row fadeItem mt-3">
            <label for="geralForm" className="form-label fw-bold">Informações do cliente</label>

            <div className="col-12 fadeItem">
                <div className="row">

                    <div className="col-12 my-2  pe-1">

                        <label for="geralForm" className="form-label">Nome*</label>
                        <input
                            type="text"
                            className="form-control"
                            name="clientNameItem"
                            id="clientNameItem"
                            value={newClientForm.clientName}
                            onChange={e => dispatch(setClientName(e.target.value))} />
                    </div>
                    <div className="col-12 my-2  pe-1">

                        <label for="geralForm" className="form-label">Sobrenome</label>
                        <input
                            type="text"
                            className="form-control"
                            name="clientLastNameItem"
                            id="clientLastNameItem"
                            value={newClientForm.clientLastName}
                            onChange={e => dispatch(setClientLastName(e.target.value))} />
                    </div>
                    <div className="col-12 my-2  pe-1">

                        <label for="geralForm" className="form-label">Celular*</label>
                        <input
                            type="text"
                            className="form-control"
                            name="celularItem"
                            id="celularItem"
                            value={newClientForm.celular}
                            onChange={e => dispatch(setCelular(e.target.value))} />
                    </div>
                    <div className="col-12 my-2  pe-1">

                        <label for="geralForm" className="form-label">E-mail</label>
                        <input
                            type="text"
                            className="form-control"
                            name="emailItem"
                            id="emailItem"
                            value={newClientForm.email}
                            onChange={e => dispatch(setEmail(e.target.value))} />
                    </div>




                </div>
            </div>


        </div>
    )



}