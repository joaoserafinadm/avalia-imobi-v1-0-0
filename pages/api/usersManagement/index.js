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

    if (req.method === "GET") {

        const { company_id } = req.query


        if (!company_id) {
            res.status(400).json({ message: "Missing parameters on request body" })
        } else {

            const { db } = await connect()

            const companyExist = await db.collection('companies').findOne({ _id: ObjectId(company_id) })


            if (!companyExist) {
                res.status(400).json({ message: "Company does not exist" })
            } else {

                const usersArray = await db.collection('users').find({ company_id }).toArray()


                if (usersArray.length > 0) {

                    res.status(200).json(usersArray)

                } else {

                    res.status(400).json({ message: "There are no users" })

                }


            }
        }
    } else if (req.method === "PATCH") {

        const { company_id, user_id, userSelected, userStatus } = req.body

        if (!company_id || !user_id || !userSelected || !userStatus) {
            res.status(400).json({ message: "Missing parameters on request body" })
        } else {

            const { db } = await connect()

            const companyExist = await db.collection('companies').findOne({ _id: ObjectId(company_id) })

            const userExist = await db.collection('users').findOne({ _id: ObjectId(user_id) })

            if (!companyExist) {
                res.status(400).json({ message: "Company does not exist" })
            } else if (!userExist) {
                res.status(400).json({ message: "User does not exist" })
            } else {

                const userSelectedExist = await db.collection('users').findOne({ _id: ObjectId(userSelected) })

                if (!userSelectedExist) {
                    res.status(400).json({ message: "User selected does not exist" })
                } else {

                    const response = await db.collection('users').updateOne(
                        { _id: ObjectId(userSelected) },
                        { $set: { userStatus: userStatus } }
                    )

                    if (response.matchedCount) {
                        res.status(200).json({ message: "User updated" })
                    } else {
                        res.status(400).json({ message: "Cant update user" })
                    }


                }


            }

        }


    } else if (req.method === "DELETE") {


        const { company_id, user_id, userSelected } = req.body

        if (!company_id || !user_id || !userSelected) {
            res.status(400).json({ message: "Missing parameters on request body" })
        } else {

            const { db } = await connect()

            const companyExist = await db.collection('companies').findOne({ _id: ObjectId(company_id) })

            const userExist = await db.collection('users').findOne({ _id: ObjectId(user_id) })

            if (!companyExist) {
                res.status(400).json({ message: "Company does not exist" })
            } else if (!userExist) {
                res.status(400).json({ message: "User does not exist" })
            } else {

                const userSelectedExist = await db.collection('users').findOne({ _id: ObjectId(userSelected) })

                if (!userSelectedExist) {
                    res.status(400).json({ message: "User selected does not exist" })
                } else {

                    const response = await db.collection('users').deleteOne(
                        { _id: ObjectId(userSelected) }
                    )

                    if (response.deletedCount) {
                        res.status(200).json({ message: "User deleted" })
                    } else {
                        res.status(400).json({ message: "Cant delete user" })
                    }


                }


            }


        }


    }



})