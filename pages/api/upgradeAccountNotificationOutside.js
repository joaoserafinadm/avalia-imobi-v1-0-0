import { ObjectID } from 'bson'
import connect from '../../utils/database'
const mail = require('@sendgrid/mail')
mail.setApiKey(process.env.SENDGRIP_API_KEY_AKVO)

export default async (req, res) => {

    if (req.method === 'POST') {

        const { email } = req.body

        if (email) {

            const { db } = await connect()

            const userExists = await db.collection('users').findOne({ email: email })
            const companyExists = userExists ? await db.collection('companies').findOne({ _id: ObjectID(userExists.company_id) }) : ''

            const userData = {
                to: email,
                from: {
                    email: 'notification@akvo-esg.com.br',
                    name: 'Akvo-esg'
                },
                templateId: 'd-6d435d30ef5041968c44166d81b0f094',
                dynamic_template_data: {
                    firstName: userExists ? userExists.firstName : ''
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
                    firstName: userExists ? userExists.firstName : 'Usuário ',
                    lastName: userExists ? userExists.lastName : '',
                    profilePicture: userExists ? userExists.profileImageUrl : '',
                    userEmail: email,
                    celular: userExists ? userExists.celular : '',
                    companyName: companyExists ? companyExists.companyName : '',
                    companyLogo: companyExists ? companyExists.profileImageUrl : '',
                    companyEmail: companyExists ? companyExists.email : '',

                }
            }

            const response1 =  await mail.send(akvoData)
            const response2 = await mail.send(userData)

            if (response1[0].statusCode === 202 && response2[0].statusCode === 202) {
                res.status(200).json({ message: 'E-mail sent' })
            } else {
                res.status(400).json({ error: 'E-mail not sent' })
            }

        } else {
            res.status(400).json({ error: 'Missing parameters' })
        }



    } else {

        res.status(400).json({ error: 'Wrong request method' })
    }

}

