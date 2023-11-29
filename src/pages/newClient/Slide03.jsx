import { useDispatch, useSelector } from "react-redux";
import PropertyTypeCard from "../../addClient/PropertyTypeCard";
import TypeApartamento from "./TypeApartamento";
import { setCelular, setClientLastName, setClientName, setEmail } from "../../../store/NewClientForm/NewClientForm.actions";



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



    return (
        <div className="row fadeItem mt-3">
            <label for="geralForm" className="form-label fw-bold">Informações Gerais</label>

            <div className="col-12 fadeItem">
                <div className="row pb-5">

                    <div class="form-check my-1">
                        <input class="form-check-input" type="checkbox" value="" id="posicaoSolarItem" />
                        <label class="form-check-label fs-5" for="posicaoSolarItem">
                            Ótima posição solar
                        </label>
                    </div>
                    <div class="form-check my-1">
                        <input class="form-check-input" type="checkbox" value="" id="studioItem" />
                        <label class="form-check-label fs-5" for="studioItem">
                            Studio
                        </label>
                    </div>
                    <div class="form-check my-1">
                        <input class="form-check-input" type="checkbox" value="" id="loftItem" />
                        <label class="form-check-label fs-5" for="loftItem">
                            Loft
                        </label>
                    </div>
                    <div class="form-check my-1">
                        <input class="form-check-input" type="checkbox" value="" id="coberturaItem" />
                        <label class="form-check-label fs-5" for="coberturaItem">
                            Cobertura
                        </label>
                    </div>
                    <div class="form-check my-1">
                        <input class="form-check-input" type="checkbox" value="" id="flatItem" />
                        <label class="form-check-label fs-5" for="flatItem">
                            Flat
                        </label>
                    </div>
                    <div class="form-check my-1">
                        <input class="form-check-input" type="checkbox" value="" id="duplexItem" />
                        <label class="form-check-label fs-5" for="duplexItem">
                            Duplex
                        </label>
                    </div>
                    <div class="form-check my-1">
                        <input class="form-check-input" type="checkbox" value="" id="triplexItem" />
                        <label class="form-check-label fs-5" for="triplexItem">
                            Triplex
                        </label>
                    </div>
                    <div class="form-check my-1">
                        <input class="form-check-input" type="checkbox" value="" id="frenteMarItem" />
                        <label class="form-check-label fs-5" for="frenteMarItem">
                            Frente ao mar
                        </label>
                    </div>
                    <div class="form-check my-1">
                        <input class="form-check-input" type="checkbox" value="" id="lateralMarItem" />
                        <label class="form-check-label fs-5" for="lateralMarItem">
                            Lateral mar
                        </label>
                    </div>
                    <div class="form-check my-1">
                        <input class="form-check-input" type="checkbox" value="" id="2quadrasMar" />
                        <label class="form-check-label fs-5" for="2quadrasMar">
                            2ª quadra do Mar
                        </label>
                    </div>
                    <div class="form-check my-1">
                        <input class="form-check-input" type="checkbox" value="" id="3quadrasMar" />
                        <label class="form-check-label fs-5" for="3quadrasMar">
                            3ª quadra do Mar
                        </label>
                    </div>
                    <div class="form-check my-1">
                        <input class="form-check-input" type="checkbox" value="" id="minhaCasaMinhaVidaItem" />
                        <label class="form-check-label fs-5" for="minhaCasaMinhaVidaItem">
                            Minha Casa Minha Vida
                        </label>
                    </div>
                    <div class="form-check my-1">
                        <input class="form-check-input" type="checkbox" value="" id="sacadaItem" />
                        <label class="form-check-label fs-5" for="sacadaItem">
                            Sacada
                        </label>
                    </div>
                    <div class="form-check my-1">
                        <input class="form-check-input" type="checkbox" value="" id="piscinaItem" />
                        <label class="form-check-label fs-5" for="piscinaItem">
                            Piscina
                        </label>
                    </div>
                    <div class="form-check my-1">
                        <input class="form-check-input" type="checkbox" value="" id="frenteAvenidaItem" />
                        <label class="form-check-label fs-5" for="frenteAvenidaItem">
                            Frente Avenida
                        </label>
                    </div>
                    <div class="form-check my-1">
                        <input class="form-check-input" type="checkbox" value="" id="churrasqueiraItem" />
                        <label class="form-check-label fs-5" for="churrasqueiraItem">
                            Churrasqueira
                        </label>
                    </div>
                    <div class="form-check my-1">
                        <input class="form-check-input" type="checkbox" value="" id="terracoItem" />
                        <label class="form-check-label fs-5" for="terracoItem">
                            Terraço
                        </label>
                    </div>



                </div>
            </div>


        </div>
    )



}