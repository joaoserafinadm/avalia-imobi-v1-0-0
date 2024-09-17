import { useState } from "react"
import { maskMoney } from "../../utils/mask"
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import baseUrl from "../../utils/baseUrl";
import { SpinnerSM } from "../components/loading/Spinners";
import axios from "axios";



export default function SelectedValue(props) {

    const token = jwt.decode(Cookies.get("auth"));

    const { client, dataFunction } = props

    const [imobCustomCheck, setImobCustomCheck] = useState(false)
    const [imobCustomValue, setImobCustomValue] = useState('')
    const [loadingSave, setLoadingSave] = useState(false)

    const handleSaveCustomValue = async () => {

        setLoadingSave(true)

        const data = {
            company_id: token.company_id,
            user_id: token.sub,
            client_id: client?._id,
            value: imobCustomValue
        }


        await axios.post(`/api/clientsManagement/valuationCustomValue`, data)
            .then(res => {

                dataFunction()
                setLoadingSave(false)
                setImobCustomCheck(false)

            }).catch(e => {
                console.log(e)
            })


    }



    return (
        <>
            <div className="col-12 text-center px-4 mt-5">
                <label htmlFor="" className="fw-bold mb-2">Valor escolhido </label>
                <div className="col-12 d-flex justify-content-center ">
                    <div className="col-12 col-lg-6 px-1 my-1">
                        {client?.valuation?.valueSelected === 'curtoPrazoValue' && (
                            <div className="card pulse border border-success border-2">
                                <div className="card-body text-center ">
                                    <span className="text-secondary fw-bold me-1 ">Venda curto prazo</span> <br />
                                    <span className="text-orange me-1 fs-4">R$</span>
                                    <span className="text-secondary fs-3 bold">{client?.valuation?.valuationCalc?.curtoPrazoValue !== 'NaN' ? client?.valuation?.valuationCalc?.curtoPrazoValue + ',00' : 0}</span>

                                </div>
                            </div>
                        )}
                        {client?.valuation?.valueSelected === 'valorIdealValue' && (
                            <div className="card pulse border border-success border-2">
                                <div className="card-body text-center ">
                                    <span className="text-secondary fw-bold me-1 ">Valor ideal</span> <br />
                                    <span className="text-orange me-1 fs-4">R$</span>
                                    <span className="text-secondary fs-3 bold">{client?.valuation?.valuationCalc?.valorIdealValue !== 'NaN' ? client?.valuation?.valuationCalc?.valorIdealValue + ',00' : 0}</span>

                                </div>
                            </div>
                        )}
                        {client?.valuation?.valueSelected === 'longoPrazoValue' && (
                            <div className="card pulse border border-success border-2">
                                <div className="card-body text-center ">
                                    <span className="text-secondary fw-bold me-1 ">Venda longo prazo</span> <br />
                                    <span className="text-orange me-1 fs-4">R$</span>
                                    <span className="text-secondary fs-3 bold">{client?.valuation?.valuationCalc?.longoPrazoValue !== 'NaN' ? client?.valuation?.valuationCalc?.longoPrazoValue + ',00' : 0}</span>

                                </div>
                            </div>
                        )}
                        {client?.valuation?.valueSelected === 'customValue' && (
                            <div className="card pulse border border-success border-2">
                                <div className="card-body text-center ">
                                    <span className="text-secondary fw-bold me-1 ">Valor ideal do cliente</span> <br />
                                    <span className="text-orange me-1 fs-4">R$</span>
                                    <span className="text-secondary fs-3 bold">{client?.valuation?.valuationCalc?.customValue !== 'NaN' ? client?.valuation?.valuationCalc?.customValue + ',00' : 0}</span>

                                </div>
                            </div>
                        )}
                        {client?.valuation?.valueSelected === 'imobCustomValue' && (
                            <div className="card pulse border border-success border-2">
                                <div className="card-body text-center ">
                                    <span className="text-secondary fw-bold me-1 ">Valor escolhido pelo corretor</span> <br />
                                    <span className="text-orange me-1 fs-4">R$</span>
                                    <span className="text-secondary fs-3 bold">{client?.valuation?.valuationCalc?.imobCustomValue !== 'NaN' ? client?.valuation?.valuationCalc?.imobCustomValue + ',00' : 0}</span>

                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {!imobCustomCheck && (
                    <div className="col-12 mt-3 d-flex justify-content-center fadeItem">
                        <button className="btn btn-orange" onClick={() => setImobCustomCheck(true)}>Alterar valor</button>
                    </div>
                )}
                {imobCustomCheck && (
                    <div className="fadeItem">
                        <div className="col-12 text-center mt-3">
                            <label htmlFor="" className="fw-bold mb-2">Valor escolhido: </label>
                            <div className="input-group">
                                <span className="input-group-text">R$</span>

                                <input className="form-control text-end" value={imobCustomValue} onChange={e => setImobCustomValue(maskMoney(e.target.value))}></input>
                                <span className="input-group-text">,00</span>
                            </div>
                        </div>
                        <div className="col-12 mt-1">
                            <button className="btn btn-outline-secondary mx-1" onClick={() => setImobCustomCheck(false)}>Cancelar</button>
                            <button className="btn btn-outline-orange mx-1" disabled={imobCustomValue === ''} onClick={() => handleSaveCustomValue()}>
                                {loadingSave ? <SpinnerSM className="mx-3" /> : 'Salvar'}
                            </button>
                        </div>
                    </div>
                )}

            </div>
            <div className="col-12 text-center mt-5">
                <label htmlFor="" className="fw-bold mb-2">Porque o cliente escolheu esse valor? </label>
                <textarea className="form-control" name="" id="" rows="3" value={client?.valuation?.valueComment} disabled></textarea>
            </div>
        </>

    )


}