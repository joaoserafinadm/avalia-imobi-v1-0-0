import { useSelector } from "react-redux"
import Map from "./Map";
import PropertyTypeCard from "../../addClient/PropertyTypeCard";
import SumarryApartamento from "./SumaryApartamento";
import SumaryCasa from "./SumaryCasa";
import SumaryTerreno from "./SumaryTerreno";
import SumaryComercial from "./SumaryComercial";


export default function Slide06(props) {

    const newClientForm = useSelector(state => state.newClientForm)



    return (
        <div className="row fadeItem mt-3 pb-5">
            <label for="geralForm" className="form-label fw-bold">Resumo</label>

            {newClientForm.propertyType === 'Apartamento' && (
                <SumarryApartamento files={props.files} />
            )}
            {newClientForm.propertyType === 'Casa' && (
                <SumaryCasa files={props.files} />
            )}
            {newClientForm.propertyType === 'Comercial' && (
                <SumaryComercial files={props.files} />
            )}
            {newClientForm.propertyType === 'Terreno' && (
                <SumaryTerreno files={props.files} />
            )}

        </div >
    )
}