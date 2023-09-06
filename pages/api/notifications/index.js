import { connect } from '../../../utils/db'
import { verify } from 'jsonwebtoken'
import { ObjectId, ObjectID } from 'bson'

const authenticated = fn => async (req, res) => {
    verify(req.cookies.auth, process.env.JWT_SECRET, async function (err, decoded) {
        if (!err && decoded) {
            return await fn(req, res)
        }
        res.status(500).json({ message: 'You are not authenticated.' })
    })
}

export default authenticated(async (req, res) => {

    if (req.method === "GET") {

        const { company_id } = req.query

        if (!company_id) {
            res.status(400).json({ error: "Missing parameters on request body" })
        } else {

            const { db } = await connect()

            const companyExists = await db.collection('companies').findOne({ _id: ObjectId(company_id) })

            if (!companyExists) {
                res.status(400).json({ error: "Company does not exist" })
            } else {

                res.status(200).json({ data: companyExists.notifications })
            }
        }




    } if (req.method === "POST") {

        const { company_id, user_id, text, link, } = req.body

        if (!company_id || !user_id) {

            res.status(400).json({ error: "Missing parameters on request body" })

        } else {

            const { db } = await connect()

            const companyExists = await db.collection('companies').findOne({ _id: ObjectId(company_id) })

            if (!companyExists) {
                res.status(400).json({ error: "Company does not exist" })
            } else {

                const data = {
                    _id: ObjectId(),
                    user_id,
                    dateAdded: new Date(),
                    subject,
                    text,
                    link
                }

                const result = await db.collection('companies').updateOne(
                    { _id: ObjectId(company_id) },
                    {
                        $addToSet: {
                            "notifications": data
                        }
                    })

                console.log(result)

                if (result) {
                    res.status(400).json({ error: 'Network error' })
                } else {
                    res.status(200).json({ message: 'Notifications updated' })
                }

            }
        }



    }


    else {
        res.status(400).json({ error: "Wrong request method" })
    }



})