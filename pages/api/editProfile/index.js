import {connect} from '../../../utils/db'
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
    // export default async function (req, res) {


    if (req.method === 'GET') {

        const { user_id } = req.query


        if (!user_id) {
            res.status(400).json({ error: 'Missing parameters on request body.' })
        } else {

            const { db } = await connect()

            const response = await db.collection('users').findOne({ _id: ObjectId(user_id) })

            const data = {
                firstName: response.firstName,
                lastName: response.lastName,
                email: response.email,
                workEmail: response.workEmail,
                celular: response.celular,
                telefone: response.telefone,
                
            }

            if (!response) {
                res.status(400).json({ error: 'User do not exists.' })
            } else {
                res.status(200).json(response)
            }
        }
    }

    else if (req.method === 'PATCH') {

        const updateObject = req.body

        const { db } = await connect()

        await db.collection('users').updateOne(
            { _id: ObjectId(user_id) },
            {
                $set: updateObject
            })
        res.status(200).json({ message: 'Profile Updated.' })

    }

    else {
        res.status(400).json({ error: 'Wrong request method.' })
    }

})