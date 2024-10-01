import { useState } from "react"




export default function CreditCardEditModal(props) {

    const [name, setName] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [expirationDate, setExpirationDate] = useState('')
    const [cvc, setCvc] = useState('')
    const [cpf, setCpf] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState('BR')


    return (
        <div class="modal fade" id="creditCardEditModal" tabindex="-1" aria-labelledby="Modal" aria-hidden="true">
            <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title title-dark bold">Atualizar forma de pagamento </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-12 my-2">
                                <label className="small fw-bold" htmlFor="name">Nome do titular do cartão</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Nome do titular do cartão"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div className="col-12 my-2">
                                <label className="small fw-bold" htmlFor="cardNumber">Número do cartão</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cardNumber"
                                    placeholder="Número do cartão"
                                    value={cardNumber}
                                    onChange={(e) => setCardNumber(e.target.value)}
                                />
                            </div>
                            <div className="col-6">
                                <label className="small fw-bold" htmlFor="expirationDate">Data de validade</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="expirationDate"
                                    placeholder="MM/YY"
                                    value={expirationDate}
                                    onChange={(e) => setExpirationDate(e.target.value)}
                                />
                            </div>
                            <div className="col-6">
                                <label className="small fw-bold" htmlFor="cvc">Código de segurança</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cvc"
                                    placeholder="CVC"
                                    value={cvc}
                                    onChange={(e) => setCvc(e.target.value)}
                                />
                            </div>
                            <div className="col-12 my-2">
                                <label className="small fw-bold" htmlFor="cpf">CPF</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cpf"
                                    placeholder="000.000.000-00"
                                    value={cpf}
                                    onChange={(e) => setCpf(e.target.value)}
                                />
                            </div>
                            <div className="col-12 my-2">
                                <label className="small fw-bold" htmlFor="cnpj">CNPJ</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cnpj"
                                    placeholder="00.000.000/0000-00"
                                    value={cnpj}
                                    onChange={(e) => setCnpj(e.target.value)}
                                />
                            </div>
                            <div className="col-12 my-2">

                                <label className="small fw-bold" htmlFor="email">Endereço de e-mail</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    placeholder="E-mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="col-12 mt-3">
                                <span className="small">
                                    Esta transação será processada pelo EBANX de acordo com os termos deles. Ao continuar, você reconhece e aceita esses termos e condições. Este site é protegido por reCAPTCHA. São aplicáveis a Política de Privacidade e os Termos de Serviços do Google. Ao continuar, declaro que as informações de endereço estão corretas.
                                </span>
                            </div>
                            <div className="col-12 d-flex justify-content-center mb-3">
                                <span className="small">
                                    Esta forma de pagamento estará disponível para todos os administradores.
                                </span>
                            </div>

                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" data-bs-dismiss="modal">
                            Cancelar
                        </button>
                        <button
                            className="btn btn-orange"
                            data-bs-dismiss="modal"
                            onClick={() => saveCreditCard()}
                        >
                            Salvar
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )

}