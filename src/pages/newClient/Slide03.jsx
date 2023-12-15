import { useDispatch, useSelector } from "react-redux";
import PropertyTypeCard from "../../addClient/PropertyTypeCard";
import TypeApartamento from "./TypeApartamento";
import { deleteFeature, setCelular, setClientLastName, setClientName, setEmail, setFeatures } from "../../../store/NewClientForm/NewClientForm.actions";



export default function Slide03(props) {

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

    const handleFeature = (value) => {

        if (!newClientForm.features?.includes(value)) {
            dispatch(setFeatures(newClientForm.features, value))
        } else {
            dispatch(deleteFeature(newClientForm.features, value))
        }
    }



    return (
        <div className="row fadeItem mt-3">
            <label for="geralForm" className="form-label fw-bold">Informações Gerais</label>

            <div className="col-12 fadeItem">
                <div className="row pb-5 ps-1">

                    <div class="form-check form-switch  my-1">
                        <input class="form-check-input" type="checkbox" role="switch" value="Ótima posição solar" checked={newClientForm.features.includes("Ótima posição solar")} id="posicaoSolarItem" onClick={(e) => handleFeature(e.target.value)} />
                        <label class={`form-check-label ${newClientForm.features.includes('Ótima posição solar') ? 'bold' : ''}`} fs-5 for="posicaoSolarItem">
                            Ótima posição solar
                        </label>
                    </div>
                    <div class="form-check form-switch my-1">
                        <input class="form-check-input" type="checkbox" value="Studio" checked={newClientForm.features.includes("Studio")} id="studioItem" onClick={(e) => handleFeature(e.target.value)} />
                        <label class={`form-check-label ${newClientForm.features.includes('Studio') ? 'bold' : ''}`} fs-5 for="studioItem">
                            Studio
                        </label>
                    </div>
                    <div class="form-check form-switch my-1">
                        <input class="form-check-input" type="checkbox" value="Loft" checked={newClientForm.features.includes("Loft")} id="loftItem" onClick={(e) => handleFeature(e.target.value)} />
                        <label class={`form-check-label ${newClientForm.features.includes('Loft') ? 'bold' : ''}`} fs-5 for="loftItem">
                            Loft
                        </label>
                    </div>
                    <div class="form-check form-switch my-1">
                        <input class="form-check-input" type="checkbox" value="Cobertura" checked={newClientForm.features.includes("Cobertura")} id="coberturaItem" onClick={(e) => handleFeature(e.target.value)} />
                        <label class={`form-check-label ${newClientForm.features.includes('Cobertura') ? 'bold' : ''}`} fs-5 for="coberturaItem">
                            Cobertura
                        </label>
                    </div>
                    <div class="form-check form-switch my-1">
                        <input class="form-check-input" type="checkbox" value="Flat" checked={newClientForm.features.includes("Flat")} id="flatItem" onClick={(e) => handleFeature(e.target.value)} />
                        <label class={`form-check-label ${newClientForm.features.includes('Flat') ? 'bold' : ''}`} fs-5 for="flatItem">
                            Flat
                        </label>
                    </div>
                    <div class="form-check form-switch my-1">
                        <input class="form-check-input" type="checkbox" value="Duplex" checked={newClientForm.features.includes("Duplex")} id="duplexItem" onClick={(e) => handleFeature(e.target.value)} />
                        <label class={`form-check-label ${newClientForm.features.includes('Duplex') ? 'bold' : ''}`} fs-5 for="duplexItem">
                            Duplex
                        </label>
                    </div>
                    <div class="form-check form-switch my-1">
                        <input class="form-check-input" type="checkbox" value="Triplex" checked={newClientForm.features.includes("Triplex")} id="triplexItem" onClick={(e) => handleFeature(e.target.value)} />
                        <label class={`form-check-label ${newClientForm.features.includes('Triplex') ? 'bold' : ''}`} fs-5 for="triplexItem">
                            Triplex
                        </label>
                    </div>
                    <div class="form-check form-switch my-1">
                        <input class="form-check-input" type="checkbox" value="Frente ao mar" checked={newClientForm.features.includes("Frente ao mar")} id="frenteMarItem" onClick={(e) => handleFeature(e.target.value)} />
                        <label class={`form-check-label ${newClientForm.features.includes('Frente ao mar') ? 'bold' : ''}`} fs-5 for="frenteMarItem">
                            Frente ao mar
                        </label>
                    </div>
                    <div class="form-check form-switch my-1">
                        <input class="form-check-input" type="checkbox" value="Lateral mar" checked={newClientForm.features.includes("Lateral mar")} id="lateralMarItem" onClick={(e) => handleFeature(e.target.value)} />
                        <label class={`form-check-label ${newClientForm.features.includes('Lateral mar') ? 'bold' : ''}`} fs-5 for="lateralMarItem">
                            Lateral mar
                        </label>
                    </div>
                    <div class="form-check form-switch my-1">
                        <input class="form-check-input" type="checkbox" value="2ª quadra do Mar" checked={newClientForm.features.includes("2ª quadra do Mar")} id="2quadrasMar" onClick={(e) => handleFeature(e.target.value)} />
                        <label class={`form-check-label ${newClientForm.features.includes('2ª quadra do Mar') ? 'bold' : ''}`} fs-5 for="2quadrasMar">
                            2ª quadra do Mar
                        </label>
                    </div>
                    <div class="form-check form-switch my-1">
                        <input class="form-check-input" type="checkbox" value="3ª quadra do Mar" checked={newClientForm.features.includes("3ª quadra do Mar")} id="3quadrasMar" onClick={(e) => handleFeature(e.target.value)} />
                        <label class={`form-check-label ${newClientForm.features.includes('3ª quadra do Mar') ? 'bold' : ''}`} fs-5 for="3quadrasMar">
                            3ª quadra do Mar
                        </label>
                    </div>
                    <div class="form-check form-switch my-1">
                        <input class="form-check-input" type="checkbox" value="Minha Casa Minha Vida" checked={newClientForm.features.includes("Minha Casa Minha Vida")} id="minhaCasaMinhaVidaItem" onClick={(e) => handleFeature(e.target.value)} />
                        <label class={`form-check-label ${newClientForm.features.includes('Minha Casa Minha Vida') ? 'bold' : ''}`} fs-5 for="minhaCasaMinhaVidaItem">
                            Minha Casa Minha Vida
                        </label>
                    </div>
                    <div class="form-check form-switch my-1">
                        <input class="form-check-input" type="checkbox" value="Sacada" id="sacadaItem" checked={newClientForm.features.includes("Sacada")} onClick={(e) => handleFeature(e.target.value)} />
                        <label class={`form-check-label ${newClientForm.features.includes('Sacada') ? 'bold' : ''}`} fs-5 for="sacadaItem">
                            Sacada
                        </label>
                    </div>
                    <div class="form-check form-switch my-1">
                        <input class="form-check-input" type="checkbox" value="Piscina" id="piscinaItem" checked={newClientForm.features.includes("Piscina")} onClick={(e) => handleFeature(e.target.value)} />
                        <label class={`form-check-label ${newClientForm.features.includes('Piscina') ? 'bold' : ''}`} fs-5 for="piscinaItem">
                            Piscina
                        </label>
                    </div>
                    <div class="form-check form-switch my-1">
                        <input class="form-check-input" type="checkbox" value="Frente Avenida" id="frenteAvenidaItem" checked={newClientForm.features.includes("Frente Avenida")} onClick={(e) => handleFeature(e.target.value)} />
                        <label class={`form-check-label ${newClientForm.features.includes('Frente Avenida') ? 'bold' : ''}`} fs-5 for="frenteAvenidaItem">
                            Frente Avenida
                        </label>
                    </div>
                    <div class="form-check form-switch my-1">
                        <input class="form-check-input" type="checkbox" value="Churrasqueira" id="churrasqueiraItem" checked={newClientForm.features.includes("Churrasqueira")} onClick={(e) => handleFeature(e.target.value)} />
                        <label class={`form-check-label ${newClientForm.features.includes('Churrasqueira') ? 'bold' : ''}`} fs-5 for="churrasqueiraItem">
                            Churrasqueira
                        </label>
                    </div>
                    <div class="form-check form-switch my-1">
                        <input class="form-check-input" type="checkbox" value="Terraço" id="terracoItem" checked={newClientForm.features.includes("Terraço")} onClick={(e) => handleFeature(e.target.value)} />
                        <label class={`form-check-label ${newClientForm.features.includes('Terraço') ? 'bold' : ''}`} fs-5 for="terracoItem">
                            Terraço
                        </label>
                    </div>



                </div>
            </div>


        </div>
    )



}