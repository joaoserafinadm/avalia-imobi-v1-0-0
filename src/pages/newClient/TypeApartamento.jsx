



export default function TypeApartamento(props) {



    return (
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
    )
}