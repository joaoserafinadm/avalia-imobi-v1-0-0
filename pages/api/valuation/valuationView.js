import bcrypt from 'bcrypt'
import { connect } from '../../../utils/db'
import { ObjectID, ObjectId } from 'bson'
import { sign } from 'jsonwebtoken'
import cookie from 'cookie'

export default async (req, res) => {

    if (req.method === 'GET') {

        const { user_id, client_id } = req.query

        console.log("req.body", user_id, client_id)

        if (!user_id || !client_id) {
            res.status(400).json({ error: 'Missing parameters on request body.' })
        } else {

            const { db } = await connect()
            const userExist = await db.collection('users').findOne({ _id: ObjectId(user_id) })

            const company_id = userExist?.company_id

            const companyExist = await db.collection('companies').findOne({ _id: ObjectId(company_id) })

            const clientExist = companyExist?.clients?.find(elem => elem._id.toString() === client_id)

            const userData = {
                firstName: userExist?.firstName,
                lastName: userExist?.lastName,
                workEmail: userExist?.workEmail,
                creci: userExist?.creci,
                telefone: userExist?.telefone,
                celular: userExist?.celular,
                profileImageUrl: userExist?.profileImageUrl,
                companyName: companyExist?.companyName,
                logo: companyExist?.logo,
                backgroundImageUrl: companyExist.backgroundImages.find(elem => elem._id.toString() === companyExist.backgroundImg_id)?.imageUrl,
            }

            if (!userExist || !companyExist || !clientExist) {

                res.status(400).json({ error: 'User or company or client does not exist' })

            } else {

                res.status(200).json({ client: clientExist, user: userData })

            }
        }

    }




}