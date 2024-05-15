import { connect } from '../../../utils/db'
import { verify, sign } from 'jsonwebtoken'
import { ObjectId, ObjectID } from 'bson'
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


    if (req.method === 'GET') {

        const { company_id } = req.query

        if (!company_id) {
            res.status(400).json({ error: 'Missing parameters on request body.' })
        } else {
            const { db } = await connect()

            const companyExist = await db.collection('companies').findOne({ _id: ObjectId(company_id) })

            if (!companyExist) {
                res.status(400).json({ error: 'Company does not exist' })
            } else {

                const clientsArray = companyExist.clients.length ? companyExist.clients.slice(0,5) : []

                const clientsStatus = {
                    outdated: clientsArray.filter(elem => elem.status === 'outdated').length,
                    active: clientsArray.filter(elem => elem.status === 'active').length,
                    evaluated: clientsArray.filter(elem => elem.status === 'evaluated').length,
                    answered: clientsArray.filter(elem => elem.status === 'answered').length,
                }

                res.status(200).json({ clientsArray, clientsStatus })

            }
        }




    }






})