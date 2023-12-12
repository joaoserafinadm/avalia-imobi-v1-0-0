import { useSelector } from "react-redux"
import Map from "./Map";


export default function Slide06(props) {

    const newClientForm = useSelector(state => state.newClientForm)



    return (
        <div className="row fadeItem mt-3">
            <label for="geralForm" className="form-label fw-bold">Resumo</label>

            <div className="col-12">
                {newClientForm.propertyType}
            </div>
            <div className="col-12">
                Área Total: {newClientForm.areaTotal + ' m²'}
            </div>
            <div className="col-12">
                Área Total Privativa: {newClientForm.areaTotalPrivativa + ' m²'}
            </div>
            <div className="col-12">
                {newClientForm.quartos + ' quartos'}
            </div>
            <div className="col-12">
                {newClientForm.suites + ' suites'}
            </div>
            <div className="col-12">
                {newClientForm.banheiros + ' banheiros'}
            </div>
            <div className="col-12">
                {newClientForm.vagasGaragem + ' vagasGaragem'}
            </div>
            <div className="col-12">
                {newClientForm.sacadas + ' sacadas'}
            </div>
            <div className="col-12">
                {newClientForm.andar + ' andar'}
            </div>


            <div className="col-12">
                {newClientForm.features.map(elem => {
                    return (
                        `#${elem}  `
                    )
                })}
            </div>

            <div className="col-12">
                {newClientForm.logradouro}, {newClientForm.numero} - {newClientForm.bairro}, {newClientForm.cep}, {newClientForm.cidade} / {newClientForm.uf}
            </div>


            <div className="col-12">
                <Map location={{ lat: newClientForm.latitude, lng: newClientForm.longitude }} zoom={18} />

            </div>
        </div>
    )
}