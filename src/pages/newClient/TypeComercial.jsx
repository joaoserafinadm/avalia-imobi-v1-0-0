import { useDispatch, useSelector } from "react-redux"
import { setAndar, setAreaTotal, setAreaTotalPrivativa, setBanheiros, setPavimentos, setQuartos, setSacadas, setSalas, setSuites, setVagasGaragem } from "../../../store/NewClientForm/NewClientForm.actions"




export default function TypeComercial(props) {

    const newClientForm = useSelector(state => state.newClientForm)
    const dispatch = useDispatch()



    return (
        <div className="row fadeItem mt-3">
            <label for="geralForm" className="form-label fw-bold">Comercial</label>

            <div className="col-12 fadeItem">

                <div className="row">

                    <div className="col-12 col-lg-6 my-3">
                        <label for="areaTotalItem" className="form-label">Área total</label>

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
                    <div className="col-12 col-lg-6 my-3">
                        <label for="areaTotalPrivativaItem" className="form-label">Área total - Privativa</label>

                        <div className="input-group  ">
                            <input
                                type="number"
                                className="form-control"
                                name="areaTotalPrivativaItem"
                                id="areaTotalPrivativaItem"
                                value={newClientForm.areaTotalPrivativa}
                                onChange={e => dispatch(setAreaTotalPrivativa(e.target.value))} />
                            <span class="input-group-text" id="basic-addon1">m²</span>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4 my-3">
                        <label for="pavimentosItem" className="form-label">Pavimentos</label>

                        <select id="andarItem"
                            class="form-select"
                            aria-label="Default select example"
                            value={newClientForm.pavimentos}
                            onChange={e => dispatch(setPavimentos(e.target.value))}>
                            <option value='' selected disabled>Escolha...</option>
                            <option value="1">1</option>
                            <option value="2">2 - Mesanino</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div className="col-12 col-lg-4 my-3">
                        <label for="salasItem" className="form-label">Nº de salas</label>

                        <select id="salasItem"
                            class="form-select"
                            aria-label="Default select example"
                            value={newClientForm.salas}
                            onChange={e => dispatch(setSalas(e.target.value))}>
                            <option value='' selected disabled>Escolha...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="Mais de 5">Mais de 5</option>

                        </select>
                    </div>


                    <div className="col-12 col-lg-4 my-3">
                        <label for="suitesItem" className="form-label">Banheiros</label>

                        <select id="suitesItem"
                            class="form-select"
                            aria-label="Default select example"
                            value={newClientForm.banheiros}
                            onChange={e => dispatch(setBanheiros(e.target.value))}>
                            <option value='' selected disabled>Escolha...</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </div>


                    <div className="col-12 col-lg-4 my-3">
                        <label for="vagasGaragemItem" className="form-label">Vagas de estacionamento</label>

                        <select id="vagasGaragemItem"
                            class="form-select"
                            aria-label="Default select example"
                            value={newClientForm.vagasGaragem}
                            onChange={e => dispatch(setVagasGaragem(e.target.value))}>
                            <option value='' selected disabled>Escolha...</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="Mais de 10">Mais de 10</option>
                        </select>
                    </div>

                </div>
            </div>


        </div>
    )
}