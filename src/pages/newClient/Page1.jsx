import PropertyTypeCard from "../../addClient/PropertyTypeCard";



export default function Page1(props) {


    return (
        <>
            <div className="row fadeItem mt-3">

                <label for="geralForm" className="form-label fw-bold">Informações do Imóvel</label>

                <div className="col-12  my-2">
                    <label for="clientNameItem" className="form-label ">Selecione o tipo de imóvel:</label>

                    <div className="row">


                        <div className="my-2 col-lg-3 col-xxl-2 col-6 d-flex justify-content-center">
                            <PropertyTypeCard type="Apartamento" setPropertyType={(value) => { props.setPropertyType(value) }} propertyType={props.propertyType} />
                        </div>
                        <div className="my-2 col-lg-3 col-xxl-2 col-6 d-flex justify-content-center">
                            <PropertyTypeCard type="Casa" setPropertyType={(value) => { props.setPropertyType(value) }} propertyType={props.propertyType} />
                        </div>
                        <div className="my-2 col-lg-3 col-xxl-2 col-6 d-flex justify-content-center">
                            <PropertyTypeCard type="Comercial" setPropertyType={(value) => { props.setPropertyType(value) }} propertyType={props.propertyType} />
                        </div>
                        <div className="my-2 col-lg-3 col-xxl-2 col-6 d-flex justify-content-center">
                            <PropertyTypeCard type="Terreno" setPropertyType={(value) => { props.setPropertyType(value) }} propertyType={props.propertyType} />
                        </div>
                    </div>


                </div>
                {props.propertyType === "Apartamento" && (
                    <div className="row fadeItem mt-3">
                        <label for="geralForm" className="form-label fw-bold">Apartamento</label>

                        <div className="col-12 fadeItem">

                            <label for="geralForm" className="form-label">Área</label>
                            <div className="row">
                                <div className="col-12 my-1 d-flex">

                                    <div className="col-6  pe-1">

                                        <label for="geralForm" className="form-label">Largura</label>
                                        <div className="input-group ">
                                            <input
                                                type="number"
                                                className="form-control"
                                                name="larguraItem"
                                                id="larguraItem"
                                                value={props.largura}
                                                onChange={e => props.setLargura(e.target.value)} />
                                            <span class="input-group-text" id="basic-addon1">m</span>
                                        </div>
                                    </div>
                                    <div className="col-6 ps-1">
                                        <label for="geralForm" className="form-label">Largura</label>
                                        <div className="input-group  ">
                                            <input
                                                type="number"
                                                className="form-control"
                                                name="larguraItem"
                                                id="larguraItem"
                                                value={props.largura}
                                                onChange={e => props.setLargura(e.target.value)} />
                                            <span class="input-group-text" id="basic-addon1">m</span>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-12 my-1">
                                    <label for="geralForm" className="form-label">Área total</label>

                                    <div className="input-group  ">
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="larguraItem"
                                            id="larguraItem"
                                            value={props.largura}
                                            onChange={e => props.setLargura(e.target.value)} />
                                        <span class="input-group-text" id="basic-addon1">m²</span>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                )}

            </div >
        </>
    )



}