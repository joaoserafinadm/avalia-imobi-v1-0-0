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

        const { user_id, type, text } = req.body


        if (user_id) {

            const { db } = await connect()

            const userExists = await db.collection('users').findOne({ _id: ObjectId(user_id) })
            const companyExists = await db.collection('companies').findOne({ _id: ObjectId(userExists.company_id) })


            if (userExists) {

                const akvoData = {
                    to: 'contato@akvo-esg.com.br',
                    from: {
                        email: 'notification@akvo-esg.com.br',
                        name: `${type === "question" ? "DÚVIDA" : "ERRO"} - ${userExists.firstName}  ${userExists.lastName}`
                    },
                    templateId: 'd-0bd8059e3f8144b69978783c57460aee',
                    dynamic_template_data: {
                        firstName: userExists.firstName,
                        lastName: userExists.lastName,
                        userEmail: userExists.email,
                        celular: userExists.celular,
                        companyName: companyExists.companyName,
                        companyLogo: companyExists.profileImageUrl,
                        companyEmail: companyExists.email,
                        type: type,
                        text1: type === "question" ? "enviou uma pergunta ou comentário" : "reportou um erro",
                        text2: text

                    }
                }

                const response1 = await mail.send(akvoData)

                if (response1[0].statusCode === 202) {
                    res.status(200).json({ message: 'E-mail sent' })
                } else {
                    res.status(400).json({ error: 'E-mail not sent' })
                }

            } else {
                res.status(400).json({ error: 'User not exists' })
            }

        }



    } else {

        res.status(400).json({ error: 'Wrong request method' })
    }

})
