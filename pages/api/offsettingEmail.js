import { ObjectId, ObjectID } from 'bson'
import connect from '../../utils/database'
import { verify } from 'jsonwebtoken'
import { left } from '@popperjs/core'
const mail = require('@sendgrid/mail')
mail.setApiKey(process.env.SENDGRIP_API_KEY_AKVO)
import baseUrl from '../../utils/baseUrl'
import { formatNumber } from '../../utils/formatNumber'


const authenticated = fn => async (req, res) => {

    verify(req.cookies.auth, process.env.JWT_SECRET, async function (err, decoded) {
        if (!err && decoded) {
            return await fn(req, res)
        }

        res.status(500).json({ message: 'You are not authenticated.' })
    })
}


export default authenticated(async (req, res) => {

    if (req.method === "POST") {

        const {
            user_id,
            company_id,
            totalEmissions,
            invFilter,
            group,
            unid,
            classState,
            bioIncluded
        } = req.body

        if (!user_id && !company_id) {
            res.status(400).json({ error: "missing parameters on request body" })
        } else {

            const { db } = await connect()

            const companyExists = await db.collection('companies').findOne({ _id: ObjectId(company_id) })
            const userExists = await db.collection('users').findOne({ _id: ObjectId(user_id) })

            if (!companyExists && !userExists) {

                res.status(400).json({ error: 'company or user not exists' })

            } else {

                const userData = {
                    to: userExists.email,
                    from: {
                        email: 'contato@akvo-esg.com.br',
                        name: 'AKVO ESG'
                    },
                    templateId: 'd-bf965ee14ecb43bc89de3f131a348e79',
                    dynamic_template_data: {
                        firstName: userExists.firstName,
                        totalEmissions: totalEmissions
                    }
                }

                const akvoData = {
                    to: 'contato@akvo-esg.com.br',
                    from: {
                        email: 'notification@akvo-esg.com.br',
                        name: 'AKVO ESG'
                    },
                    templateId: 'd-2a2b258252424a52b3231c17989c99e8',
                    dynamic_template_data: {
                        firstName: userExists.firstName,
                        lastName: userExists.lastName,
                        profilePicture: userExists.profileImageUrl,
                        userEmail: userExists.email,
                        celular: userExists.celular,
                        companyName: companyExists.companyName,
                        companyLogo: companyExists.profileImageUrl,
                        companyEmail: companyExists.email,
                        totalEmissions: totalEmissions,
                        invFilter: invFilter,
                        group: group,
                        unid: unid,
                        classState: classState,
                        bioIncluded: bioIncluded


                    }
                }

                const response1 = await mail.send(akvoData)
                const response2 = await mail.send(userData)

                if (response1 && response2) {
                    res.status(200).json({ message: "request sent" })
                } else {
                    res.status(400).json({ message: "request error" })
                }

            }

        }

    } else {
        res.status(404).json({ error: 'Wrong request method.' })
    }

})