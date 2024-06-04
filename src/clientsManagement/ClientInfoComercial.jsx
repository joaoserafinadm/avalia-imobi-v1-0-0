


export default function ClientInfoComercial(props) {

    const { client } = props


    return (
        <>
            <div className="col-12 col-md-4 my-2 d-flex">
                <div className="bold me-1">
                    Área Total:
                </div>
                <div>
                    {client?.areaTotal ? client?.areaTotal : 0} m²
                </div>
            </div>
            <div className="col-12 col-md-6 my-2 d-flex">
                <div className="bold me-1">
                    Área Total Privativa:
                </div>
                <div>
                    {client?.areaTotalPrivativa ? client?.areaTotalPrivativa : 0} m²
                </div>

            </div>
            {client?.pavimentos >= 0 && (
                <div className="col-12 col-md-4 my-2 d-flex">
                    <div>
                        {client?.pavimentos ? client?.pavimentos : 0}

                    </div>
                    <div className="ms-1 bold">

                        pavimento{client?.pavimentos != 1 ? 's' : ''}
                    </div>
                </div>
            )}
            {client?.salas >= 0 || client?.salas === "Mais de 5" && (
                <div className="col-12 col-md-4 my-2 d-flex">
                    <div>
                        {client?.salas ? client?.salas : 0}

                    </div>
                    <div className="ms-1 bold">

                        sala{client?.salas != 1 ? 's' : ''}
                    </div>
                </div>
            )}




            <div className="col-12 col-md-4 my-2 d-flex">
                <div>

                    {client?.banheiros ? client?.banheiros : 0}
                </div>
                <div className="ms-1 bold">

                    banheiro{client?.banheiros != 1 ? 's' : ''}
                </div>
            </div>
            <div className="col-12 col-md-4 my-2 d-flex">
                <div>

                    {client?.vagasGaragem  || client?.vagasGaragem === "Mais de 10"? client?.vagasGaragem : 0}
                </div>
                <div className="ms-1 bold">

                    vaga{client?.vagasGaragem != 1 ? 's' : ''} de garagem
                </div>
            </div>
            

        </>

    )

}