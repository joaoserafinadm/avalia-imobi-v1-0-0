import { connect } from '../../../utils/db'
import bcrypt from 'bcrypt'
import { ObjectId } from 'bson'

export default async function (req, res) {

    if (req.method === "GET") {

        const { user_id, client_id } = req.query

        console.log("req.body", user_id, client_id)

        if (!user_id || !client_id) {

            res.status(400).json({ error: 'Missing parameters on request body' })

        } else {

            const { db } = await connect()

            const userExist = await db.collection('users').findOne({ _id: ObjectId(user_id) })

            const company_id = userExist?.company_id

            console.log("company_id", company_id)

            const companyExist = await db.collection('companies').findOne({ _id: ObjectId(company_id) })

            const clientExist = companyExist.clients.find(elem => elem._id.toString() === client_id)


            console.log(userExist,
                companyExist,
                clientExist)

            res.status(200).json({ message: 'foi' })
        }

    }




}