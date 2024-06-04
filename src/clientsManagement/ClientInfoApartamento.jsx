


export default function ClientInfoApartamento(props) {

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
            {client?.quartos >= 0 && (
                <div className="col-12 col-md-4 my-2 d-flex">
                    <div>
                        {client?.quartos ? client?.quartos : 0}

                    </div>
                    <div className="ms-1 bold">

                        quarto{client?.quartos != 1 ? 's' : ''}
                    </div>
                </div>
            )}



            <div className="col-12 col-md-4 my-2 d-flex">
                <div>

                    {client?.suites ? client?.suites : 0}
                </div>
                <div className="ms-1 bold">

                    suíte{client?.suites != 1 ? 's' : ''}
                </div>
            </div>
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

                    {client?.vagasGaragem ? client?.vagasGaragem : 0}
                </div>
                <div className="ms-1 bold">

                    vaga{client?.vagasGaragem != 1 ? 's' : ''} de garagem
                </div>
            </div>
            <div className="col-12 col-md-4 my-2 d-flex">
                <div>

                    {client?.sacadas ? client?.sacadas : 0}
                </div>
                <div className="ms-1 bold">

                    sacada{client?.sacadas != 1 ? 's' : ''}
                </div>
            </div>
            <div className="col-12 col-md-4 my-2 d-flex mb-4">

                <div>

                    {client?.andar ? client?.andar : 0}º
                </div>
                <div className="ms-1 bold">

                    andar{client?.sacadas != 1 ? 's' : ''}
                </div>


            </div>
        </>

    )

}