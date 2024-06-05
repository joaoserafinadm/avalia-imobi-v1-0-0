import { useDispatch, useSelector } from "react-redux"
import { setAndar, setAreaTotal, setAreaTotalPrivativa, setBanheiros, setComprimento, setFrente, setFundos, setLargura, setLateralDireita, setLateralEsquerda, setPavimentos, setQuartos, setSacadas, setSuites, setTerrenoIrregular, setVagasGaragem } from "../../../store/NewClientForm/NewClientForm.actions"
import { useEffect } from "react"




export default function TypeTerreno(props) {

    const newClientForm = useSelector(state => state.newClientForm)
    const dispatch = useDispatch()

    useEffect(() => {

        if (!props.edit) {

            console.log("nao foi")


            dispatch(setLargura(''))
            dispatch(setComprimento(''))
            dispatch(setFrente(''))
            dispatch(setFundos(''))
            dispatch(setLateralEsquerda(''))
            dispatch(setLateralDireita(''))
            dispatch(setAreaTotal(''))
        }

    }, [newClientForm.terrenoIrregular])


    useEffect(() => {

        if (!newClientForm.terrenoIrregular) {
            if (newClientForm.largura && newClientForm.comprimento) {
                dispatch(setAreaTotal(+newClientForm.largura * +newClientForm.comprimento))
            } else {
                dispatch(setAreaTotal(''))
            }

        } else {

            if (newClientForm.frente && newClientForm.fundos && newClientForm.lateralEsquerda && newClientForm.lateralDireita) {
                dispatch(setAreaTotal(((+newClientForm.frente + +newClientForm.fundos) / 2) * ((+newClientForm.lateralEsquerda + +newClientForm.lateralDireita) / 2)))
            } else {

                dispatch(setAreaTotal(''))
            }

        }
    }, [newClientForm.largura, newClientForm.comprimento, newClientForm.frente, newClientForm.fundos, newClientForm.lateralEsquerda, newClientForm.lateralDireita])




    return (
        <div className="row fadeItem mt-3">
            <label for="geralForm" className="form-label fw-bold">Terreno</label>

            <div className="col-12 fadeItem">

                <div className="row">

                    <div className="col-12 mt-2">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="terrenoIrregularCheck" onChange={e => dispatch(setTerrenoIrregular(e.target.checked))} checked={newClientForm.terrenoIrregular}/>
                            <label class="form-label" for="terrenoIrregularCheck">Terreno irregular</label>
                        </div>
                    </div>

                    {!newClientForm.terrenoIrregular ?
                        <>
                            <div className="col-12 col-lg-6 my-3 fadeItem">
                                <label for="larguraInput" className="form-label">Largura</label>

                                <div className="input-group  ">
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="larguraInput"
                                        id="larguraInput"
                                        value={newClientForm.largura}
                                        onChange={e => dispatch(setLargura(e.target.value))} />
                                    <span class="input-group-text" id="basic-addon1">m</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 my-3 fadeItem">
                                <label for="comprimentoInput" className="form-label">Comprimento</label>

                                <div className="input-group  ">
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="comprimentoInput"
                                        id="comprimentoInput"
                                        value={newClientForm.comprimento}
                                        onChange={e => dispatch(setComprimento(e.target.value))} />
                                    <span class="input-group-text" id="basic-addon1">m</span>
                                </div>
                            </div>
                        </>

                        :
                        <>

                            <div className="col-12 col-lg-6 my-3 fadeItem">
                                <label for="frenteInput" className="form-label">Frente</label>

                                <div className="input-group  ">
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="frenteInput"
                                        id="frenteInput"
                                        value={newClientForm.frente}
                                        onChange={e => dispatch(setFrente(e.target.value))} />
                                    <span class="input-group-text" id="basic-addon1">m</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 my-3 fadeItem">
                                <label for="fundosInput" className="form-label">Fundos</label>

                                <div className="input-group  ">
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="fundosInput"
                                        id="fundosInput"
                                        value={newClientForm.fundos}
                                        onChange={e => dispatch(setFundos(e.target.value))} />
                                    <span class="input-group-text" id="basic-addon1">m</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 my-3 fadeItem">
                                <label for="lateralEsquerdaInput" className="form-label">Lateral esquerda</label>

                                <div className="input-group  ">
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="lateralEsquerdaInput"
                                        id="lateralEsquerdaInput"
                                        value={newClientForm.lateralEsquerda}
                                        onChange={e => dispatch(setLateralEsquerda(e.target.value))} />
                                    <span class="input-group-text" id="basic-addon1">m</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 my-3 fadeItem">
                                <label for="lateralDireitaInput" className="form-label">Lateral Direita</label>

                                <div className="input-group  ">
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="lateralDireitaInput"
                                        id="lateralDireitaInput"
                                        value={newClientForm.lateralDireita}
                                        onChange={e => dispatch(setLateralDireita(e.target.value))} />
                                    <span class="input-group-text" id="basic-addon1">m</span>
                                </div>
                            </div>
                        </>

                    }


                    <div className="col-12 col-lg-6 my-3">
                        <label for="areaTotalItem" className="form-label">Área do terreno</label>

                        <div className="input-group  ">
                            <input
                                type="number"
                                className="form-control"
                                name="areaTotalItem"
                                id="areaTotalItem"
                                value={newClientForm.areaTotal}
                                onChange={e => dispatch(setAreaTotal(e.target.value))} disabled />
                            <span class="input-group-text" id="basic-addon1">m²</span>
                        </div>
                    </div>


                </div>
            </div>


        </div>
    )
}