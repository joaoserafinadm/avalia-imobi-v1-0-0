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

// export default authenticated(async (req, res) => {
export default async (req, res) => {

    if (req.method === 'GET') {
        const { user_id } = req.query

        if (!user_id) {
            return res.status(400).json({ error: 'Missing parameters on request body' })
        }

        try {
            const { db } = await connect()
            const userExist = await db.collection('users').findOne({ _id: ObjectId(user_id) })

            if (!userExist) {
                return res.status(400).json({ error: 'Company does not exist' })
            }

            const data = userExist.notifications
            return res.status(200).json({ data })
        } catch (error) {
            console.error(error)
            return res.status(500).json({ error: 'Internal server error' })
        }
    }

    if (req.method === "POST") {

        const { user_id, notification } = req.body

        console.log("req.bodynot", req.body)

        if (!user_id) {

            res.status(400).json({ error: "Missing parameters on request body" })

        } else {

            const { db } = await connect()

            const userExist = await db.collection('users').findOne({ _id: ObjectId(user_id) })

            console.log("req.userExist", userExist)


            if (!userExist) {
                res.status(400).json({ error: "User does not exist" })
            } else {

                const data = {
                    ...notification,
                    dateAdded: new Date(),
                    checked: false,
                    _id: new ObjectId(),
                }
                const result = await db.collection('users').updateOne(
                    { _id: ObjectId(user_id) },
                    {
                        $push: {
                            notifications: {
                                $each: [data],
                                $position: 0
                            }
                        }
                    })

                if (result.matchedCount) {
                    res.status(200).json({ message: 'Notifications sent successfully.' });
                } else {
                    res.status(400).json({ error: 'Network error' })
                }




            }



        }

    } else if (req.method === "PATCH") {

        const { company_id, user_id } = req.body

        console.log(req.body, company_id, user_id)

        if (!company_id || !user_id) {
            res.status(400).json({ error: "Missing parameters on request body" })
        } else {

            const { db } = await connect()

            const companyExists = await db.collection('companies').findOne({ _id: ObjectId(company_id) })
            const userExist = await db.collection('users').findOne({ _id: ObjectId(user_id) })

            if (!companyExists || !userExist) {
                res.status(400).json({ error: "Company or user does not exist" })

            } else {

                const result = await db.collection('users').updateOne(
                    { _id: new ObjectId(user_id) },
                    { $set: { 'notifications.$[].checked': true } }
                );

                if (result.matchedCount) {
                    res.status(200).json({ message: "Notifications updated" })
                } else {
                    res.status(400).json({ error: "Cant update notifications" })
                }
            }

        }


    }


    else {
        res.status(400).json({ error: "Wrong request method" })
    }



}
// )