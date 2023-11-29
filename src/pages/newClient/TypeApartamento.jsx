import { useDispatch, useSelector } from "react-redux"
import { setAreaTotal, setAreaTotalPrivativa, setBanheiros, setQuartos, setSuites, setVagasGaragem } from "../../../store/NewClientForm/NewClientForm.actions"




export default function TypeApartamento(props) {

    const newClientForm = useSelector(state => state.newClientForm)
    const dispatch = useDispatch()



    return (
        <div className="row fadeItem mt-3">
            <label for="geralForm" className="form-label fw-bold">Apartamento</label>

            <div className="col-12 fadeItem">

                <div className="row">

                    <div className="col-12 my-1">
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
                    <div className="col-12 my-1">
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
                    <div className="col-12 my-1">
                        <label for="quartosItem" className="form-label">Número de quartos</label>

                        <select id="quartosItem"
                            class="form-select"
                            aria-label="Default select example"
                            value={newClientForm.quartos}
                            onChange={e => dispatch(setQuartos(e.target.value))}>
                            <option value='' selected disabled>Escolha...</option>
                            <option value="Kitnet">Kitnet</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="3">4</option>
                            <option value="3">5</option>
                            <option value="3">6</option>
                        </select>
                    </div>
                    <div className="col-12 my-1">
                        <label for="suitesItem" className="form-label">Número de suítes</label>

                        <select id="suitesItem"
                            class="form-select"
                            aria-label="Default select example"
                            value={newClientForm.suites}
                            onChange={e => dispatch(setSuites(e.target.value))}>
                            <option value='' selected disabled>Escolha...</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="3">4</option>
                            <option value="3">5</option>
                            <option value="3">6</option>
                        </select>
                    </div>
                    <div className="col-12 my-1">
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
                            <option value="3">4</option>
                            <option value="3">5</option>
                            <option value="3">6</option>
                        </select>
                    </div>
                    <div className="col-12 my-1">
                        <label for="vagasGaragemItem" className="form-label">Vagas de garagem</label>

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
                            <option value="3">4</option>
                            <option value="3">5</option>
                            <option value="3">6</option>
                        </select>
                    </div>

                </div>
            </div>


        </div>
    )
}