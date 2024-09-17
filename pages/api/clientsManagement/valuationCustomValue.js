import { connect } from '../../../utils/db'
import { verify, sign } from 'jsonwebtoken'
import { ObjectId, ObjectID } from 'bson'
import cookie from 'cookie'
import baseUrl from '../../../utils/baseUrl'


const authenticated = fn => async (req, res) => {
    verify(req.cookies.auth, process.env.JWT_SECRET, async function (err, decoded) {
        if (!err && decoded) {
            return await fn(req, res)
        }
        res.status(500).json({ message: 'You are not authenticated.' });
    })
}

export default authenticated(async (req, res) => {

    if (req.method === "POST") {
        const { company_id, user_id, client_id, value } = req.body

        if (!value) {
            res.status(400).json({ message: "Missing parameters on request body" })
        } else {

            const { db } = await connect()

            const companyExist = await db.collection('companies').findOne({ _id: ObjectId(company_id) })

            const userExist = await db.collection('users').findOne({ _id: ObjectId(user_id) })


            const clientExist = companyExist?.clients?.find(elem => elem._id.toString() === client_id.toString())


            if (!companyExist || !userExist || !clientExist) {
                res.status(400).json({ message: "Company or user or client does not exist" })
            } else {

                const valuationCalc = {
                    ...clientExist?.valuation?.valuationCalc,
                    imobCustomValue: value
                }

                const response = await db.collection('companies').updateOne({
                    _id: ObjectId(company_id),
                    'clients._id': ObjectId(client_id)
                }, {
                    $set: {
                        'clients.$.valuation.valuationCalc': valuationCalc,
                        'clients.$.valuation.valueSelected': 'imobCustomValue',
                    }
                })

                console.log(response)

                if (response.modifiedCount > 0) {
                    res.status(200).json({ message: "Success" })
                } else {
                    res.status(400).json({ message: "Error" })
                }


            }

        }
    }







})