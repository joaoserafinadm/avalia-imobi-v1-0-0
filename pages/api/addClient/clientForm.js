import { connect } from '../../../utils/db'
import bcrypt from 'bcrypt'
import { ObjectId } from 'bson'

export default async function (req, res) {

    if (req.method === "GET") {

        const { user_id, client_id } = req.query

        console.log("req.body", user_id, client_id)

        if (!user_id || !client_id) {

            res.status(400).json({ error: 'Missing parameters on request body' })

        } else {

            const { db } = await connect()

            const userExist = await db.collection('users').findOne({ _id: ObjectId(user_id) })

            const company_id = userExist?.company_id

            const companyExist = await db.collection('companies').findOne({ _id: ObjectId(company_id) })

            const clientExist = companyExist?.clients?.find(elem => elem._id.toString() === client_id)

            if (!userExist || !companyExist || !clientExist) {
                res.status(400).json({ error: 'User or company or client does not exist' })
            } else {

                const data = {
                    client_id: client_id,
                    clientName: clientExist?.clientName,
                    clientLastName: clientExist?.clientLastName,
                    email: clientExist?.email,
                    celular: clientExist?.celular,
                    styles: companyExist?.styles,
                    logo: companyExist?.logo,
                    backgroundImg: companyExist?.backgroundImg_id ? companyExist.backgroundImages.find(elem => elem._id.toString() === companyExist?.backgroundImg_id).imageUrl : '',
                    companyName: companyExist?.companyName,
                    user_id: user_id,
                    userFirstName: userExist?.firstName,
                    userLastName: userExist?.lastName,
                    profileImageUrl: userExist?.profileImageUrl
                }
                res.status(200).json(data)
            }

        }

    } else if (req.method === "POST") {

        const data = req.body

        console.log(data)

        if (!data.user_id) {

            res.status(400).json({ error: 'Missing parameters on request body' })
        } else {

            const { db } = await connect()

            const userExist = await db.collection('users').findOne({ _id: ObjectId(data.user_id) })

            if (!userExist) {
                res.status(400).json({ error: 'User does not exist' })
            } else {

                const companyExist = await db.collection('companies').findOne({ _id: ObjectId(userExist?.company_id) })

                if (!companyExist) {
                    res.status(400).json({ error: 'Company does not exist' })
                } else {

                    console.log("companyExist", companyExist)

                    const clientExist = companyExist?.clients?.find(elem => elem?._id?.toString() === data.client_id)

                    
                    if (!clientExist) {
                        res.status(400).json({ error: 'Client does not exist' })
                    } else {

                        const newData = {
                            ...clientExist,
                            ...data
                        }

                        const result = await db.collection('companies').updateOne(
                            { _id: ObjectId(companyExist._id), 'clients._id': ObjectId(data.client_id) }, {
                            $set: {
                                'clients.$': newData,
                            }
                        })


                        if (result) {
                            res.status(200).json({ success: 'Client updated successfully' })
                        } else {
                            res.status(400).json({ error: 'Error updating client' })
                        }
                    }
                }

            }





        }
    } else {

        res.status(400).json({ error: 'Method not allowed' })
    }




}