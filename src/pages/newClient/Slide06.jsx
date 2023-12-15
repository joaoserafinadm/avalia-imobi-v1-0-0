import { useSelector } from "react-redux"
import Map from "./Map";
import PropertyTypeCard from "../../addClient/PropertyTypeCard";


export default function Slide06(props) {

    const newClientForm = useSelector(state => state.newClientForm)



    return (
        <div className="row fadeItem mt-3 pb-5">
            <label for="geralForm" className="form-label fw-bold">Resumo</label>

            <div className="col-12 d-flex  justify-content-center my-2">
                <PropertyTypeCard type={newClientForm.propertyType} />
            </div>
            <div className="col-12 my-2">
                Área Total: {newClientForm.areaTotal} m²
            </div>
            <div className="col-12 my-2">
                Área Total Privativa: {newClientForm.areaTotalPrivativa} m²
            </div>
            <div className="col-12 my-2">
                {newClientForm.quartos} quarto{newClientForm.quartos > 1 ? 's' : ''}
            </div>
            <div className="col-12 my-2">
                {newClientForm.suites} suíte{newClientForm.suites > 1 ? 's' : ''}
            </div>
            <div className="col-12 my-2">
                {newClientForm.banheiros} banheiro{newClientForm.banheiros > 1 ? 's' : ''}
            </div>
            <div className="col-12 my-2">
                {newClientForm.vagasGaragem} vaga{newClientForm.vagasGaragem > 1 ? 's' : ''} de garagem
            </div>
            <div className="col-12 my-2">
                {newClientForm.sacadas} sacada{newClientForm.sacadas > 1 ? 's' : ''}
            </div>
            <div className="col-12 my-2 mb-4">
                {newClientForm.andar}º andar
            </div>
            <div className="px-3">
                <hr />
            </div>

            <div className="col-12 mb-2">
                <label for="geralForm" className=" fw-bold">Caracteristicas Gerais</label>
            </div>
            <div className="col-12 my-2 mb-4">
                {newClientForm.features.map(elem => {
                    return (
                        `#${elem}  `
                    )
                })}
            </div>
            <div className="px-3">
                <hr />
            </div>

            <div className="col-12 mb-2">
                <label for="geralForm" className="form-label fw-bold">Localização</label>
            </div>

            <div className="col-12 my-2">
                {newClientForm.logradouro}, {newClientForm.numero} - {newClientForm.bairro}, {newClientForm.cep}, {newClientForm.cidade} / {newClientForm.uf}
            </div>


            <div className="col-12 my-2 mb-4">
                {newClientForm.latitude && newClientForm.longitude && (

                    <Map location={{ lat: newClientForm.latitude, lng: newClientForm.longitude }} zoom={18} />
                )}

            </div>

            <div className="px-3">
                <hr />
            </div>

            <div className="col-12 mb-2">
                <label for="geralForm" className="form-label fw-bold">Imagens</label>
            </div>

            {props.files.length === 0 ?
                <div className="col-12 my-2 d-flex justify-content-center mb-5">
                    <span className="small">Nenhuma imagem carregada</span>
                </div>
                :
                <div className="col-12 my-2 d-flex align-items-center mb-5" style={{ "overflowX": 'scroll' }}>

                    {props.files.map(elem => {
                        return (
                            <div>
                                <img src={URL.createObjectURL(elem)} alt="" className="fileImgs mx-2 fadeItem" />
                            </div>
                        )
                    })}
                </div>
            }


        </div>
    )
}