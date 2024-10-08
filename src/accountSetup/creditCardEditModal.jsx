import { useState } from "react";
import { maskCnpj, maskCpf, maskCreditCard, maskMonthDate } from "../../utils/mask";
import { loadMercadoPago } from "@mercadopago/sdk-js";


// const mercadopago = new window.MercadoPago(process.env.NEXT_PUBLIC_MERCADO_PAGO_PUBLIC_KEY); // Substitua pela sua Public Key

export default function CreditCardEditModal(props) {
    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvc, setCvc] = useState('');
    const [cpf, setCpf] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('BR');

    // SDK do Mercado Pago

    // Função para salvar o cartão (Criar o Token)
    const saveCreditCard = async () => {
        try {
            const expirationMonth = expirationDate.split('/')[0];
            const expirationYear = expirationDate.split('/')[1];

            const cardData = {
                cardNumber: cardNumber,
                cardholderName: name,
                expirationMonth: expirationMonth,
                expirationYear: expirationYear,
                securityCode: cvc,
                identificationType: 'CPF', // ou 'CNPJ' se estiver usando CNPJ
                identificationNumber: cpf ? cpf : cnpj
            };

            // Cria o token de cartão usando o SDK do Mercado Pago
            const response = await mercadopago.card.createToken(cardData);

            const token = response.id; // Obtém o token gerado

            console.log('Token:', token);

            // Agora envie esse token ao backend
            await sendTokenToBackend(token);
        } catch (error) {
            console.error('Erro ao criar token:', error);
        }
    };

    // Função para enviar o token ao backend
    const sendTokenToBackend = async (token) => {
        try {
            const response = await fetch('/api/create_subscription', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    token: token,
                    email: email,
                }),
            });
            const data = await response.json();
            console.log('Assinatura criada com sucesso:', data);
        } catch (error) {
            console.error('Erro ao enviar token ao backend:', error);
        }
    };

    return (
        <>
            <div className="modal fade" id="creditCardEditModal" tabIndex="-1" aria-labelledby="Modal" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title title-dark bold">Atualizar forma de pagamento </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                                        inputMode="numeric"
                                        className="form-control"
                                        id="cardNumber"
                                        placeholder="Número do cartão"
                                        value={cardNumber}
                                        onChange={(e) => setCardNumber(maskCreditCard(e.target.value))}
                                    />
                                </div>
                                <div className="col-6">
                                    <label className="small fw-bold" htmlFor="expirationDate">Data de validade</label>
                                    <input
                                        type="text"
                                        inputMode="numeric"
                                        className="form-control"
                                        id="expirationDate"
                                        placeholder="MM/YY"
                                        value={expirationDate}
                                        onChange={(e) => setExpirationDate(maskMonthDate(e.target.value))}
                                    />
                                </div>
                                <div className="col-6">
                                    <label className="small fw-bold" htmlFor="cvc">Código de segurança</label>
                                    <input
                                        type="text"
                                        inputMode="numeric"
                                        className="form-control"
                                        id="cvc"
                                        placeholder="CVC"
                                        value={cvc}
                                        onChange={(e) => {
                                            const newValue = e.target.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
                                            setCvc(newValue); // Atualiza o valor do CVC com apenas números
                                        }}
                                        maxLength="4" // Limita a quantidade de dígitos para 3 ou 4, dependendo do padrão do cartão
                                    />
                                </div>
                                <div className="col-12 my-2">
                                <div className="col-12 my-2">
                                    <label className="small fw-bold" htmlFor="cnpj">CNPJ</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="cnpj"
                                        placeholder="00.000.000/0000-00"
                                        value={cnpj} disabled={cpf}
                                        onChange={(e) => setCnpj(maskCnpj(e.target.value))}
                                    />
                                </div>
                                    <label className="small fw-bold" htmlFor="cpf">CPF</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="cpf"
                                        placeholder="000.000.000-00"
                                        value={cpf} disabled={cnpj}
                                        onChange={(e) => setCpf(maskCpf(e.target.value))}
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
                                onClick={saveCreditCard} // Atualizando o onClick para chamar a função de salvar o cartão
                            >
                                Salvar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
