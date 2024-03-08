import { useDispatch, useSelector } from "react-redux"
import { setAndar, setAreaTotal, setAreaTotalPrivativa, setBanheiros, setPavimentos, setQuartos, setSacadas, setSuites, setVagasGaragem } from "../../../store/NewClientForm/NewClientForm.actions"




export default function TypeCasa(props) {

    const newClientForm = useSelector(state => state.newClientForm)
    const dispatch = useDispatch()



    return (
        <div className="row fadeItem mt-3">
            <label for="geralForm" className="form-label fw-bold">Casa</label>

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
                    <div className="col-12 col-lg-6 my-3">
                        <label for="areaTotalPrivativaItem" className="form-label">Área privativa - Casa</label>

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
                        <label for="andarItem" className="form-label">Pavimentos</label>

                        <select id="andarItem"
                            class="form-select"
                            aria-label="Default select example"
                            value={newClientForm.pavimentos}
                            onChange={e => dispatch(setPavimentos(e.target.value))}>
                            <option value='' selected disabled>Escolha...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="3">4</option>
                            <option value="3">5</option>
                        </select>
                    </div>
                    <div className="col-12 col-lg-4  my-3">
                        <label for="quartosItem" className="form-label">Número de quartos</label>

                        <select id="quartosItem"
                            class="form-select"
                            aria-label="Default select example"
                            value={newClientForm.quartos}
                            onChange={e => dispatch(setQuartos(e.target.value))}>
                            <option value='' selected disabled>Escolha...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </div>
                    <div className="col-12 col-lg-4 my-3">
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
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
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
                    {/* <div className="col-12 col-lg-4 my-3">
                        <label for="sacadasItem" className="form-label">Sacadas</label>

                        <select id="andarItem"
                            class="form-select"
                            aria-label="Default select example"
                            value={newClientForm.sacadas}
                            onChange={e => dispatch(setSacadas(e.target.value))}>
                            <option value='' selected disabled>Escolha...</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </div> */}

                    <div className="col-12 col-lg-4 my-3">
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
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </div>

                </div>
            </div>


        </div>
    )
}