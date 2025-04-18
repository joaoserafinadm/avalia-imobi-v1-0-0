import { connect } from '../../../utils/db'
import { verify } from 'jsonwebtoken'
import { ObjectId } from 'bson'
import fetch from 'node-fetch'; // Para realizar chamadas HTTP para a API REST

const authenticated = fn => async (req, res) => {
    verify(req.cookies.auth, process.env.JWT_SECRET, async function (err, decoded) {
        if (!err && decoded) {
            return await fn(req, res)
        }
        res.status(500).json({ message: 'You are not authenticated.' });
    })
}

export default authenticated(async (req, res) => {

    if (req.method === 'POST') {

        const { company_id, user_id, cardTokenId, last4, cardholderName, paymentMethodId, email } = req.body

        console.log('cardTokenId:', cardTokenId);

        if (!cardTokenId || !email) {
            return res.status(400).json({ message: "Missing parameters on request body" })
        }

        const { db } = await connect()

        // const companyExist = await db.collection('companies').findOne({ _id: ObjectId(company_id) })

        // if (!companyExist) {
        //     return res.status(400).json({ message: "Company does not exist" })
        // }

        // const userExist = await db.collection('users').findOne({ _id: ObjectId(user_id) })

        // if (!userExist) {
        //     return res.status(400).json({ message: "User does not exist" })
        // }

        try {
            const startDate = new Date();
            startDate.setHours(startDate.getHours() + 5)

            const subscriptionResponse = await fetch('https://api.mercadopago.com/preapproval', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${process.env.MERCADO_PAGO_ACCESS_TOKEN}`,
                    'Content-Type': 'application/json'
                    // 'X-scope': 'stage'
                },
                body: JSON.stringify({
                    // payment_id: 91006166748,
                    // payer: {
                    //     first_name: cardholderName.split(' ')[0],
                    //     last_name: cardholderName.split(' ')[cardholderName.split(' ').length - 1],
                    // },
                    payer_email: email,
                    card_token_id: cardTokenId,
                    reason: 'Assinatura mensal p/ 1 usuário - Avalia Imobi',
                    // external_reference: company_id,  // Referência externa para identificar a assinatura
                    auto_recurring: {
                        frequency: 1,
                        frequency_type: 'months', // Frequência mensal
                        transaction_amount: 10,
                        currency_id: "BRL", // Moeda
                        // start_date: startDate.toISOString(), // Incluindo a data de início para evitar o problema de fuso horário
                    },
                    payment_type_id: paymentMethodId,
                    status: "authorized", // Definindo o status como autorizado
                    back_url: 'https://app.avaliaimobi.com.br', // URL de redirecionamento após a assinatura (opcional)
                })
            });

            
            const subscriptionData = await subscriptionResponse.json();
            console.log("subscriptionResponse", subscriptionData)

            // if (!subscriptionResponse.ok || !subscriptionData.id) {
            //     return res.status(400).json({ message: "Error creating subscription", details: subscriptionData })
            // }

            // console.log("subscriptionData", subscriptionData)

            // // Atualizar a base de dados com os dados da assinatura
            // const subscriptionId = subscriptionData.id; // ID da assinatura retornado pelo Mercado Pago

            // const data = {
            //     user_id,
            //     cardToken: cardTokenId,
            //     last4,
            //     cardholderName,
            //     email,
            //     subscription_id: subscriptionId, // ID da assinatura
            //     customer_status: subscriptionData.status,
            //     paymentMethod_id: subscriptionData.payment_method_id,
            //     amount: 79.90,
            //     usersCount: 1,
            //     amountPerUser: 0,
            //     dateCreated: new Date(),
            //     dateUpdated: new Date()
            // };

            // const DBresponse = await db.collection('companies').updateOne(
            //     { _id: ObjectId(company_id) },
            //     {
            //         $set: {
            //             "active": true,
            //             "errorStatus": false,
            //             "dateLimit": false,
            //             "paymentData": data
            //         }
            //     }
            // );

            // if (DBresponse.modifiedCount === 0) {
            //     return res.status(400).json({ message: "Cant create subscription" })
            // }

            return res.status(200).json({ message: 'Subscription created successfully', subscription: subscriptionData })

        } catch (error) {
            return res.status(500).json({ message: "Internal Server Error", error: error.message })
        }
    } else {
        return res.status(405).json({ message: "Method not allowed" })
    }
});
