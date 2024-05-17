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

        const { company_id, user_id } = req.query

        if (!company_id) {
            res.status(400).json({ error: 'Missing parameters on request body.' })
        } else {
            const { db } = await connect()

            const companyExist = await db.collection('companies').findOne({ _id: ObjectId(company_id) })

            const userExist = await db.collection('users').findOne({ _id: ObjectId(user_id) })

            if (!companyExist || !userExist) {
                res.status(400).json({ error: 'Company or user does not exist' })
            } else {

                const clients = companyExist.clients.length ? companyExist.clients : []

                const myClients = clients.filter(elem => elem.user_id === user_id)

                const myValuations = clients.filter(elem => elem?.valuation?.user_id === user_id)

                const clientsArray = clients.slice(0, 5)



                const userResults = {
                    clientsLength: myClients.length,
                    clientsValuations: myValuations.length,
                    clientsRating: myClients.filter(elem => elem?.valuation?.stars).reduce((a, b) => a + b.valuation?.stars, 0) / clientsArray.filter(elem => elem?.valuation?.stars).length || 0,
                    averageTicket: myValuations.filter(elem => elem?.valuation?.valueSelected).reduce((a, b) => a + (+b.valuation?.valueSelected.replace('.', '') || 0), 0) / myValuations.filter(elem => elem?.valuation?.valueSelected).length || 0
                }


                res.status(200).json({ userResults, clientsArray })

            }
        }




    }






})