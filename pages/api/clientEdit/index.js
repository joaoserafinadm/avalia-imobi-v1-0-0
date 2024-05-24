import { connect } from '../../../utils/db'
import { verify, sign } from 'jsonwebtoken'
import { ObjectId, ObjectID } from 'bson'
import cookie from 'cookie'


const authenticated = fn => async (req, res) => {
    verify(req.cookies.auth, process.env.JWT_SECRET, async function (err, decoded) {
        if (!err && decoded) {
            return await fn(req, res)
        }
        res.status(500).json({ message: 'You are not authenticated.' });
    })
}

export default authenticated(async (req, res) => {

    if (req.method === 'GET') {

        const { company_id, client_id } = req.query

        console.log(req.query, company_id, client_id)

        if (!company_id || !client_id) {
            res.status(400).json({ error: 'Missing parameters on request body' })

        } else {

            const { db } = await connect()

            const companyExist = await db.collection('companies').findOne({ _id: ObjectId(company_id) })

            if (!companyExist) {
                res.status(400).json({ error: 'Company does not exist' })

            } else {

                const clientExist = companyExist.clients.find(elem => elem._id.toString() === client_id)

                if (!clientExist) {
                    res.status(400).json({ error: 'Client does not exist' })

                } else {

                    res.status(200).json(clientExist)

                }

            }

        }



    }


    else if (req.method === 'PATCH') {

        const data = req.body


        if (!data.user_id) {

            res.status(400).json({ error: 'Missing parameters on request body' })
        } else {

            const { db } = await connect()

            const userExist = await db.collection('users').findOne({ _id: ObjectId(data.user_id) })

            if (!userExist) {
                res.status(400).json({ error: 'User does not exist' })
            } else {

                const companyExist = await db.collection('companies').findOne({ _id: ObjectId(userExist?.company_id) })

                if (!companyExist) {
                    res.status(400).json({ error: 'Company does not exist' })
                } else {

                    const clientExist = companyExist.clients.find(elem => elem._id.toString() === data.client_id)

                    if (!clientExist) {
                        res.status(400).json({ error: 'Client does not exist' })
                    } else {


                        const {
                            slide,
                            client_id,
                            styles,
                            logo,
                            backgroundImg,
                            companyName,
                            userFirstName,
                            userLastName,
                            profileImageUrl,

                            ...dataFilter
                        } = data


                        const newData = {
                            // ...clientExist,
                            ...dataFilter,
                            status: 'active',
                            dateUpdated: new Date()
                        }

                        const updateFields = {};
                        for (const [key, value] of Object.entries(newData)) {
                          updateFields[`clients.$.${key}`] = value;
                        }


                        const result = await db.collection('companies').updateOne(
                            { _id: new ObjectId(data.company_id), 'clients._id': new ObjectId(data.client_id) },
                            { $set: updateFields}
                        );

                        console.log(result)

                        if (result.modifiedCount > 0) {
                            res.status(200).json({ message: 'Client updated successfully' })
                        } else {
                            res.status(400).json({ error: 'Client not updated' })
                        }
                    }

                }
            }
        }


    }




})