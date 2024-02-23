import { useDispatch, useSelector } from "react-redux"
import { deleteFeature, setFeatures } from "../../../store/NewClientForm/NewClientForm.actions"





export default function GeralFeatures(props) {

    const newClientForm = useSelector(state => state.newClientForm)
    const dispatch = useDispatch()


    const features = [
        'Ótima posição solar',
        'Studio',
        'Loft',
        'Cobertura',
        'Flat',
        'Duplex',
        'Triplex',
        'Frente ao mar',
        'Lateral mar',
        '2ª quadra do Mar',
        '3ª quadra do Mar',
        'Minha Casa Minha Vida',
        'Sacada',
        'Piscina',
        'Frente Avenida',
        'Churrasqueira',
        'Terraço'
    ];



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