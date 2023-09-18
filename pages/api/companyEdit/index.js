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

    if (req.method === 'GET') {

        const { company_id } = req.query

        if (!company_id) {
            res.status(400).json({ error: 'Missing parameters on request body' })
        } else {

            const { db } = await connect()

            const companyExists = await db.collection('companies').findOne({_id: ObjectId(company_id)})

            if(!companyExists) {
                res.status(400).json({error: 'Company does not exist'})
            } else {
                res.status(200).json({companyExists})
            }
        }


    }



})