import { useSelector } from "react-redux";
import PropertyTypeCard from "../../addClient/PropertyTypeCard";
import TypeApartamento from "./TypeApartamento";



export default function Slide02(props) {

    const newClientForm = useSelector(state => state.newClientForm)



    return (
        <>
            <div className="row fadeItem mt-3">

                <label for="geralForm" className="form-label fw-bold">Informações do Imóvel</label>

                <div className="col-12  my-2">
                    <label for="clientNameItem" className="form-label ">Selecione o tipo de imóvel:</label>

                    <div className="row">


                        <div className="my-2 col-lg-3 col-xxl-2 col-6 d-flex justify-content-center">
                            <PropertyTypeCard type="Apartamento"  />
                        </div>
                        <div className="my-2 col-lg-3 col-xxl-2 col-6 d-flex justify-content-center">
                            <PropertyTypeCard type="Casa"  />
                        </div>
                        <div className="my-2 col-lg-3 col-xxl-2 col-6 d-flex justify-content-center">
                            <PropertyTypeCard type="Comercial"  />
                        </div>
                        <div className="my-2 col-lg-3 col-xxl-2 col-6 d-flex justify-content-center">
                            <PropertyTypeCard type="Terreno"  />
                        </div>
                    </div>


                </div>
                {newClientForm.propertyType === "Terreno" && (
                    <TypeApartamento />
                )}

            </div >
        </>
    )



}