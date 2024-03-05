import { useDispatch, useSelector } from "react-redux"
import { deleteFeature, setFeatures } from "../../../store/NewClientForm/NewClientForm.actions"





export default function GeralFeatures(props) {

    const newClientForm = useSelector(state => state.newClientForm)
    const dispatch = useDispatch()


    const features = props.type === 'Apartamento' ? [
        'Ótima posição solar',
        'Localização privilegiada',
        'Banheiro social',
        'Sala de estar e jantar integradas',
        'Cozinha americana',
        'Área de serviço',
        'Varanda gourmet',
        'Armários embutidos',
        'Piso porcelanato',
        'Ar condicionado',
        'Vista panorâmica',
        'Área de lazer completa',
        'Piscina',
        'Academia',
        'Salão de festas',
        'Churrasqueira',
        'Playground',
        'Segurança 24 horas',
        'Vaga de garagem',
        'Aceita financiamento'


        // 'Ótima posição solar',
        // 'Studio',
        // 'Loft',
        // 'Cobertura',
        // 'Flat',
        // 'Duplex',
        // 'Triplex',
        // 'Frente ao mar',
        // 'Lateral mar',
        // '2ª quadra do Mar',
        // '3ª quadra do Mar',
        // 'Minha Casa Minha Vida',
        // 'Sacada',
        // 'Piscina',
        // 'Frente Avenida',
        // 'Churrasqueira',
        // 'Terraço'
    ] : props.type === 'Casa' ? [
        'Cozinha americana',
        'Área de serviço',
        'Armários embutidos',
        'Sala ampla',
        'Varanda gourmet',
        'Área verde',
        'Segurança 24 horas',
        'Ar condicionado',
        'Acabamento de luxo',
        'Condomínio fechado',
        'Academia',
        'Salão de festas',
        'Playground',
        'Jardim de inverno',
        'Vista panorâmica',
        'Aceita financiamento'
    ] : props.type === 'Terreno' ? [
        'Terreno plano',
        'Rua asfaltada',
        'Rede de água e esgoto',
        'Rede elétrica',
        'Documentação em ordem',
        'Localização privilegiada',
        'Próximo a comércios',
        'Próximo a escolas',
        'Próximo a transporte público',
        'Acesso fácil',
        'Vizinhança tranquila',
        'Segurança',
        'Rua sem saída',
        'Vista panorâmica',
        'Aceita permuta',
        'Aceita financiamento'
    ] : props.type === 'Comercial' ? [
        'Localização estratégica',
        'Sala ampla e bem iluminada',
        'Piso elevado',
        'Ar condicionado central',
        'Banheiro privativo',
        'Vaga de garagem',
        'Portaria 24 horas',
        'Sistema de segurança',
        'Elevador',
        'Próximo a bancos',
        'Próximo a restaurantes',
        'Próximo a transporte público',
        'Acesso para cadeirantes',
        'Internet de alta velocidade',
        'Infraestrutura para rede de computadores',
        'Salão de reuniões',
        'Cafeteria no prédio',
        'Aceita financiamento'
    ] : [];



    const handleFeature = (value) => {

        if (!newClientForm.features?.includes(value)) {
            dispatch(setFeatures(newClientForm.features, value))
        } else {
            dispatch(deleteFeature(newClientForm.features, value))
        }
    }


    return (
        <div className="row fadeItem mt-3">
            <label htmlFor="geralForm" className="form-label fw-bold">Informações Gerais</label>
            <div className="row">
                {features.map(feature => (
                    <div key={feature} className="col-12 col-md-6 col-lg-4 col-xl-3">
                        <div className="mx-2 my-1">
                            <div className="form-check form-switch">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value={feature}
                                    checked={newClientForm.features.includes(feature)}
                                    id={`${feature.replace(/\s+/g, '')}Item`}
                                    onClick={(e) => handleFeature(e.target.value)}
                                />
                                <label
                                    className={`form-check-label ${newClientForm.features.includes(feature) ? 'bold' : ''}`}
                                    htmlFor={`${feature.replace(/\s+/g, '')}Item`}
                                >
                                    {feature}
                                </label>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}