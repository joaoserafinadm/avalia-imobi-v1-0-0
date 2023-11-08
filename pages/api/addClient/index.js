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

    if (req.method === 'POST') {

        const { company_id, user_id, clientName, clientLastName, celular, propertyType } = req.body


        console.log(company_id, user_id, clientName, clientLastName, celular, propertyType)

        if (!company_id || !user_id || !clientName) {

            res.status(400).json({ error: 'Missing parameters on request body' })
        } else {

            const { db } = await connect()

            const companyExist = await db.collection('companies').findOne({ _id: ObjectId(company_id) })
            const userExist = await db.collection('users').findOne({ _id: ObjectId(user_id) })

            if (!companyExist || !userExist) {
                res.status(400).json({ error: 'Company or user does not exist' })
            } else {

                const newId = ObjectId()

                // const urlToken = `${baseUrl()}/newClient/${newId}`
                const urlToken = `${baseUrl()}/newClient/params?id=${userExist._id}&clientId=${newId}`

                const response = await db.collection("companies").updateOne({ _id: ObjectId(company_id), },
                    {
                        $addToSet: {
                            "clients":
                            {
                                _id: newId,
                                clientName: clientName,
                                clientLastName: clientLastName,
                                celular: celular,
                                propertyType: propertyType,
                                urlToken: urlToken,
                            }
                        }
                    })

                console.log(response)

                res.status(200).json(urlToken)
            }
        }


    }

})

