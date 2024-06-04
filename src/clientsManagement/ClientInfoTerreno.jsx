


export default function ClientInfoTerreno(props) {

    const { client } = props


    return (
        <>
            <div className="col-12 my-2 d-flex justify-content-start">
                <div className="bold me-1">
                    Área Total:
                </div>
                <div>
                    {client?.areaTotal} m²
                </div>
            </div>
            {client?.terrenoIrregular && (
                <>
                    <div className="col-12 col-md-6 my-2 d-flex">
                        <div className="bold me-1">
                            Frente:
                        </div>
                        <div>
                            {client?.frente} m
                        </div>
                    </div>
                    <div className="col-12 col-md-6 my-2 d-flex">
                        <div className="bold me-1">
                            Fundos:
                        </div>
                        <div>
                            {client?.fundos} m
                        </div>
                    </div>
                    <div className="col-12 col-md-6 my-2 d-flex">
                        <div className="bold me-1">
                            Lateral Esquerda:
                        </div>
                        <div>
                            {client?.lateralEsquerda} m
                        </div>
                    </div>
                    <div className="col-12 col-md-6 my-2 d-flex">
                        <div className="bold me-1">
                            Lateral Direita:
                        </div>
                        <div>
                            {client?.lateralDireita} m
                        </div>
                    </div>
                </>

            )}
            {!client?.terrenoIrregular && (
                <>
                    <div className="col-12 col-md-6 my-2 d-flex">
                        <div className="bold me-1">
                            Largura:
                        </div>
                        <div>
                            {client?.largura} m
                        </div>
                    </div>
                    <div className="col-12 col-md-6 my-2 d-flex">
                        <div className="bold me-1">
                            Comprimento:
                        </div>
                        <div>
                            {client?.comprimento} m
                        </div>
                    </div>
                </>

            )}


        </>

    )

}