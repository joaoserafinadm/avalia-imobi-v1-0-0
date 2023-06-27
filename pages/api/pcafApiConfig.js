import { ObjectId, ObjectID } from 'bson'
import connect from '../../utils/database'
import { verify, sign } from 'jsonwebtoken'
import cookie from 'cookie'

const authenticated = fn => async (req, res) => {

    verify(req.cookies.auth, process.env.JWT_SECRET, async function (err, decoded) {
        if (!err && decoded) {
            return await fn(req, res)
        }

        res.status(500).json({ message: 'You are not authenticated.' })
    })
}


export default authenticated(async (req, res) => {

    if (req.method === 'PATCH') {

        const { company_id, user_id, accessKey, DBSaveConfig } = req.body

        if (!company_id || !user_id) {
            return res.status(400).json({ error: 'Missing body parameter' })
        } else {

            const { db } = await connect()

            const companyExists = await db.collection('companies').findOne({ _id: ObjectId(company_id) })

            if (!companyExists) {
                return res.status(400).json({ error: 'Company doesnt exist' })
            } else {
                const response = await db.collection('companies').updateOne({ _id: ObjectId(company_id) }, {
                    $set: {
                        "pcafApiConfig.accessKey": accessKey,
                        "pcafApiConfig.DBSaveConfig": DBSaveConfig,
                    }
                })

                if (response) {
                    return res.status(200).json({ message: "Api config updated" })
                } else {
                    return res.status(400).json({ message: "Api config updated" })
                }
            }

        }


    }

    if (req.method === 'GET') {

        const { company_id } = req.query

        console.log(company_id, req.query)

        if (!company_id) {
            res.status(400).json({ error: 'Missing body parameter' })
        } else {

            const { db } = await connect()

            const companyExists = await db.collection('companies').findOne({ _id: ObjectId(company_id) })

            if (!companyExists) {
                res.status(400).json({ error: 'Company doesnt exist' })
            } else {
                const response = {
                    accessKey: companyExists.pcafApiConfig ? companyExists.pcafApiConfig.accessKey : '',
                    DBSaveConfig: companyExists.pcafApiConfig ? companyExists.pcafApiConfig.DBSaveConfig : false
                }

                res.status(200).json(response)
            }

        }




    } else {
        res.status(400).json({ error: 'Wrong request method' })
    }
})