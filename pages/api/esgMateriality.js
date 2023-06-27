import { ObjectId, ObjectID } from 'bson'
import connect from '../../utils/database'
import { verify } from 'jsonwebtoken'

const authenticated = fn => async (req, res) => {

    verify(req.cookies.auth, process.env.JWT_SECRET, async function (err, decoded) {
        if (!err && decoded) {
            return await fn(req, res)
        }

        res.status(500).json({ message: 'You are not authenticated.' })
    })
}

export default authenticated(async (req, res) => {

    if (req.method === "PATCH") {

        const { company_id, user_id, _id, materiality } = req.body


        if (!company_id || !user_id || !_id || !materiality.length) {

            res.status(400).json({ error: 'Missing parameters on request body' })

        } else {

            const { db } = await connect()

            const companyExists = await db.collection('companies').findOne({ _id: ObjectId(company_id) })

            if (companyExists) {

                const questionExists = companyExists.esgIndicators.find(elem => elem._id === _id)

                if (questionExists) {


                    const response = await db.collection('companies').updateOne(
                        { _id: ObjectID(company_id), "esgIndicators._id": _id },
                        {
                            $set: {
                                "esgIndicators.$.materiality": materiality,
                                "esgIndicators.$.user_id": user_id,
                                "esgIndicators.$.dateUpdate": new Date()
                            }
                        }
                    )

                    if (response) {
                        res.status(200).json({ message: 'esgIndicator updated.' })
                    } else {
                        res.status(400).json({ error: 'cant update.' })
                    }

                }

            }

        }


    }


})