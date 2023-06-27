import { ObjectID } from 'bson'
import connect from '../../utils/database'
import { verify } from 'jsonwebtoken'
import { left } from '@popperjs/core'

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
        const { db } = await connect()


        const { user_id, accessCount } = req.body

        const response = await db.collection('users').updateOne({ _id: ObjectID(user_id) }, {
            $set: {
                accessCount: accessCount + 1
            }
        })
    }





})