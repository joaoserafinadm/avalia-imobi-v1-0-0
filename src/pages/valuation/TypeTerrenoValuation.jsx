import { useDispatch, useSelector } from "react-redux"
import { setAndar, setAreaTotal, setAreaTotalPrivativa, setBanheiros, setComprimento, setFrente, setFundos, setLargura, setLateralDireita, setLateralEsquerda, setPavimentos, setQuartos, setSacadas, setSuites, setTerrenoIrregular, setVagasGaragem } from "../../../store/NewClientForm/NewClientForm.actions"
import { useEffect } from "react"




export default function TypeTerrenoValuation(props) {

    const newClientForm = useSelector(state => state.newClientForm)
    const dispatch = useDispatch()

   


    



    return (
        <div className="row fadeItem mt-3">
            <label for="geralForm" className="form-label fw-bold">Terreno</label>

            <div className="col-12 fadeItem">

                <div className="row">




                    <div className="col-12 col-lg-6 my-3">
                        <label for="areaTotalItem" className="form-label">Área do terreno</label>

                        <div className="input-group  ">
                            <input
                                type="number"
                                className="form-control"
                                name="areaTotalItem"
                                id="areaTotalItem"
                                value={newClientForm.areaTotal}
                                onChange={e => dispatch(setAreaTotal(e.target.value))} />
                            <span class="input-group-text" id="basic-addon1">m²</span>
                        </div>
                    </div>


                </div>
            </div>


        </div>
    )
}