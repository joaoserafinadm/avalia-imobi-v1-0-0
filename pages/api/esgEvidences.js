import { ObjectId, ObjectID } from 'bson'
import connect from '../../utils/database'
import { verify, sign } from 'jsonwebtoken'
import cookie from 'cookie'
const cloudinary = require("../../utils/cloudinary")


const authenticated = fn => async (req, res) => {

    verify(req.cookies.auth, process.env.JWT_SECRET, async function (err, decoded) {
        if (!err && decoded) {
            return await fn(req, res)
        }

        res.status(500).json({ message: 'You are not authenticated.' })
    })
}

export default authenticated(async (req, res) => {

    if (req.method === "POST") {

        const { company_id, user_id, question_id, description, files } = req.body

        if (!company_id, !user_id, !question_id) {

            res.status(400).json({ error: "Missing parameters on request body." })
        } else {

            const { db } = await connect()

            const companyExists = await db.collection('companies').findOne({ _id: ObjectId(company_id) })

            if (!companyExists) {

                res.status(400).json({ error: "Company dont exists" })

            } else {

                const questionExists = companyExists.esgIndicators.find(elem => elem._id === question_id)

                if (!questionExists) {

                    res.status(400).json({ error: "Criterion dont exists in DB" })

                } else {

                    const dataPush = {
                        _id: ObjectId(),
                        question_id,
                        user_id,
                        description,
                        files,
                        dateAdded: new Date(),
                        dateUpdate: '',
                        active: true
                    }

                    console.log("dataPush", dataPush)

                    const response = await db.collection('companies').updateOne(
                        { _id: ObjectID(company_id), "esgIndicators._id": question_id },
                        {
                            $push: {
                                "esgIndicators.$.evidences": dataPush,
                            }
                        }
                    )

                    if (response) {
                        res.status(200).json({ message: "Evidence updated" })
                    } else {
                        res.status(400).json({ error: "Cant save evidence" })

                    }

                }
            }
        }
    } else if (req.method === "DELETE") {

        const { company_id, user_id, question_id, evidence_id } = req.query

        console.log(company_id, user_id, question_id, evidence_id)

        if (!company_id || !user_id || !question_id || !evidence_id) {
            res.status(400).json({ error: "Missing parameter on request body." })
        } else {

            const { db } = await connect()

            const companyExists = await db.collection('companies').findOne({ _id: ObjectId(company_id) })

            if (!companyExists) {
                res.status(400).json({ error: "Company dont exists" })
            } else {

                const questionExists = companyExists.esgIndicators.find(elem => elem._id === question_id)

                if (!questionExists) {

                    res.status(400).json({ error: "Criterion dont exists in DB" })

                } else {

                    const response = await db.collection('companies').updateOne(
                        { _id: ObjectID(company_id), "esgIndicators._id": question_id }, {

                        $set: {
                            "esgIndicators.$.evidences.$[i].active": false
                        }

                    }, {
                        arrayFilters: [
                            { "i._id": ObjectId(evidence_id) }
                        ]
                    }
                    )

                    if (response) {
                        res.status(200).json({ message: "Evidence deleted." })
                    } else {
                        res.status(400).json({ error: "Network error" })
                    }
                }
            }
        }



    } else {

        res.status(400).json({ error: 'Wrong request method' })

    }








})