import { useDispatch, useSelector } from "react-redux";
import PropertyTypeCard from "../../addClient/PropertyTypeCard";
import TypeApartamento from "./TypeApartamento";
import { setCelular, setClientLastName, setClientName, setEmail } from "../../../store/NewClientForm/NewClientForm.actions";



export default function Slide01(props) {

    const newClientForm = useSelector(state => state.newClientForm)
    const dispatch = useDispatch()


    const maskTelefone = (value) => {
        return dispatch(setCelular(value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
            .replace(/(-\d{4})\d+?$/, '$1'))
        )
    }



    return (
        <div className="row fadeItem mt-3">
            <label for="geralForm" className="form-label fw-bold">Informações de Cadastro</label>

            <div className="col-12 fadeItem">
                <div className="row">

                    <div className="col-12 my-2  pe-1">

                        <label for="geralForm" className="form-label">Nome<b>*</b></label>
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

                        <label for="geralForm" className="form-label">Celular<b>*</b></label>
                        <input
                            type="text"
                            className="form-control"
                            name="celularItem"
                            id="celularItem"
                            value={newClientForm.celular}
                            onChange={e => maskTelefone(e.target.value)} />
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

            <span className="small mt-3">*Campos obrigatórios</span>

        </div>
    )



}