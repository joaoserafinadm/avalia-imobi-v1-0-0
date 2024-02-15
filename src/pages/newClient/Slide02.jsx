import { useSelector } from "react-redux";
import PropertyTypeCard from "../../addClient/PropertyTypeCard";
import TypeApartamento from "./TypeApartamento";
import TypeTerreno from "./TypeTerreno";



export default function Slide02(props) {

    const newClientForm = useSelector(state => state.newClientForm)



    return (
        <>
            <div className="row fadeItem mt-3 pb-5">

                <label for="geralForm" className="form-label fw-bold">Informações do Imóvel</label>

                <div className="col-12  my-2">
                    <label for="clientNameItem" className="form-label ">Selecione o tipo de imóvel:</label>

                    <div className="row">


                        <div className="my-2 col-xxl-3 col-6 d-flex justify-content-center">
                            <PropertyTypeCard type="Apartamento"  />
                        </div>
                        <div className="my-2 col-xxl-3 col-6 d-flex justify-content-center">
                            <PropertyTypeCard type="Casa"  />
                        </div>
                        <div className="my-2 col-xxl-3 col-6 d-flex justify-content-center">
                            <PropertyTypeCard type="Comercial"  />
                        </div>
                        <div className="my-2 col-xxl-3 col-6 d-flex justify-content-center">
                            <PropertyTypeCard type="Terreno"  />
                        </div>
                    </div>


                </div>
                {newClientForm.propertyType === "Apartamento" && (
                    <TypeApartamento />
                )}
                {newClientForm.propertyType === "Terreno" && (
                    <TypeTerreno />
                )}


            </div >
        </>
    )



}