



export default function SelectedValue(props) {

    const { client } = props

    return (
        <>
            <div className="col-12 text-center px-4 mt-5">
                <label htmlFor="" className="fw-bold mb-2">Valor escolhido </label>
                <div className="col-12 d-flex justify-content-center ">

                    <div className="col-12 col-lg-6 px-1 my-1">
                        {client?.valuation?.valueSelected === 'curtoPrazoValue' && (
                            <div className="card pulse border border-success border-2">
                                <div className="card-body text-center ">
                                    <span className="text-secondary fw-bold me-1 ">Venda curto prazo</span> <br />
                                    <span className="text-orange me-1 fs-4">R$</span>
                                    <span className="text-secondary fs-3 bold">{client?.valuation?.valuationCalc?.curtoPrazoValue !== 'NaN' ? client?.valuation?.valuationCalc?.curtoPrazoValue + ',00' : 0}</span>

                                </div>
                            </div>
                        )}
                        {client?.valuation?.valueSelected === 'valorIdealValue' && (
                            <div className="card pulse border border-success border-2">
                                <div className="card-body text-center ">
                                    <span className="text-secondary fw-bold me-1 ">Valor ideal</span> <br />
                                    <span className="text-orange me-1 fs-4">R$</span>
                                    <span className="text-secondary fs-3 bold">{client?.valuation?.valuationCalc?.valorIdealValue !== 'NaN' ? client?.valuation?.valuationCalc?.valorIdealValue + ',00' : 0}</span>

                                </div>
                            </div>
                        )}
                        {client?.valuation?.valueSelected === 'longoPrazoValue' && (
                            <div className="card pulse border border-success border-2">
                                <div className="card-body text-center ">
                                    <span className="text-secondary fw-bold me-1 ">Venda longo prazo</span> <br />
                                    <span className="text-orange me-1 fs-4">R$</span>
                                    <span className="text-secondary fs-3 bold">{client?.valuation?.valuationCalc?.longoPrazoValue !== 'NaN' ? client?.valuation?.valuationCalc?.longoPrazoValue + ',00' : 0}</span>

                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>
            <div className="col-12 text-center mt-5">
                <label htmlFor="" className="fw-bold mb-2">Porque o cliente escolheu esse valor? </label>
                <textarea className="form-control" name="" id="" rows="3" value={client?.valuation?.valueComment} disabled></textarea>
            </div>
        </>

    )


}