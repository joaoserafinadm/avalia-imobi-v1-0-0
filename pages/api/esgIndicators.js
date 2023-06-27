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

    if (req.method === "GET") {

        const { company_id } = req.query

        if (!company_id) {
            res.status(400).json({ error: 'Missing company name on request body' })
        } else {
            const { db } = await connect()

            const response = await db.collection('companies').findOne({ _id: ObjectId(company_id) })

            if (!response) {
                res.status(400).json({ error: 'company not found' })
            } else {

                const esgIndicatorsExists = 'esgIndicators' in response


                if (!esgIndicatorsExists) {

                    const data = await db.collection('companies').updateOne({ _id: ObjectId(company_id) }, {
                        $set: {
                            esgIndicators: []
                        }
                    })

                    res.status(200).json([])
                } else {

                    res.status(200).json(response.esgIndicators)
                }
            }
        }





    } else if (req.method === "PATCH") {

        const { company_id, user_id, _id, topic, theme, altId } = req.body

        if (!company_id || !user_id || !_id) {
            res.status(400).json({ error: 'Missing parameters on request body' })
        } else {

            const { db } = await connect()

            const companyExists = await db.collection('companies').findOne({ _id: ObjectId(company_id) })

            if (companyExists) {

                const questionExists = companyExists.esgIndicators.find(elem => elem._id === _id)

                if (questionExists) {

                    const response1 = await db.collection('companies').updateOne(
                        { _id: ObjectID(company_id), "esgIndicators._id": _id },
                        {
                            $set: {
                                "esgIndicators.$.altId": altId,
                                "esgIndicators.$.user_id": user_id,
                                "esgIndicators.$.dateUpdate": new Date()
                            }
                        }
                    )

                    if (response1) {
                        const data = await db.collection('companies').findOne({ _id: ObjectId(company_id) })

                        res.status(200).json(data.esgIndicators)
                    } else {
                        res.status(400).json({ error: 'cant update.' })
                    }


                } else {
                    const dataPush = [{
                        _id,
                        topic,
                        theme,
                        altId,
                        user_id,
                        dateAdded: new Date(),
                        dateUpdate: '',
                        materiality: [],
                        evidences: [],
                        tasks: []
                    }]

                    const response2 = await db.collection('companies').updateOne(
                        { _id: ObjectID(company_id) },
                        {
                            $push: {
                                esgIndicators: {
                                    $each: dataPush,
                                    $position: 0
                                }
                            }
                        }
                    )

                    if (response2) {

                        const data = await db.collection('companies').findOne({ _id: ObjectId(company_id) })

                        res.status(200).json(data.esgIndicators)
                    } else {
                        res.status(400).json({ error: 'cant update.' })
                    }
                }
            } else {

                res.status(400).json({ error: 'Company dont exist.' })
            }

        }

    } else {

        res.status(400).json({ error: 'Wrong request method' })

    }

}

)