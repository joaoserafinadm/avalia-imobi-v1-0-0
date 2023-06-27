import { ObjectId, ObjectID } from 'bson'
import connect from '../../utils/database'
import { verify, sign } from 'jsonwebtoken'
import cookie from 'cookie'
const mail = require('@sendgrid/mail')
mail.setApiKey(process.env.SENDGRIP_API_KEY_AKVO)

const authenticated = fn => async (req, res) => {

    verify(req.cookies.auth, process.env.JWT_SECRET, async function (err, decoded) {
        if (!err && decoded) {
            return await fn(req, res)
        }

        res.status(500).json({ message: 'You are not authenticated.' })
    })
}

export default authenticated(async (req, res) => {

    if (req.method === 'POST') {

        const { user_id, company_id } = req.body


        if (user_id && company_id) {

            const { db } = await connect()

            const userExists = await db.collection('users').findOne({ _id: ObjectId(user_id) })
            const companyExists = await db.collection('companies').findOne({ _id: ObjectId(company_id) })


            if (userExists && companyExists) {

                const userData = {
                    to: userExists.email,
                    from: {
                        email: 'assinatura@akvo-esg.com.br',
                        name: 'AKVO ESG'
                    },
                    templateId: 'd-6d435d30ef5041968c44166d81b0f094',
                    dynamic_template_data: {
                        firstName: userExists.firstName
                    }
                }

                const akvoData = {
                    to: 'assinatura@akvo-esg.com.br',
                    from: {
                        email: 'notification@akvo-esg.com.br',
                        name: `AKVO ESG - ${userExists.firstName}  ${userExists.lastName}`
                    },
                    templateId: 'd-0f7515460af94d99b3abd6e51e46904c',
                    dynamic_template_data: {
                        firstName: userExists.firstName,
                        lastName: userExists.lastName,
                        userEmail: userExists.email,
                        celular: userExists.celular,
                        companyName: companyExists.companyName,
                        companyLogo: companyExists.profileImageUrl,
                        companyEmail: companyExists.email,

                    }
                }

                const response1 = await mail.send(akvoData)
                const response2 = await mail.send(userData)

                if (response1[0].statusCode === 202 && response2[0].statusCode === 202) {
                    res.status(200).json({ message: 'E-mail sent' })
                } else {
                    res.status(400).json({ error: 'E-mail not sent' })
                }

            } else {
                res.status(400).json({ error: 'Unregistered company' })
            }

        }



    } else {

        res.status(400).json({ error: 'Wrong request method' })
    }

})
