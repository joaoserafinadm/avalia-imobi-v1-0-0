import { connect } from '../../../utils/db'
import { verify, sign } from 'jsonwebtoken'
import { ObjectId, ObjectID } from 'bson'
import cookie from 'cookie'
import baseUrl from '../../../utils/baseUrl'
import bcrypt from 'bcrypt'
import randomPassword from '../../../utils/randomPassword'
import { Resend } from 'resend';
import { newUserEmail } from '../../../src/emails/newUserEmail';


const resend = new Resend(process.env.RESEND_API_KEY);


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

        const { company_id, user_id, client_id } = req.query

        if (!company_id || !user_id || !client_id) {
            res.status(400).json({ message: "Missing parameters on request body" })
        } else {

            const { db } = await connect()

            const companyExist = await db.collection('companies').findOne({ _id: ObjectId(company_id) })
            const userExist = await db.collection('users').findOne({ _id: ObjectId(user_id) })
            const clientExist = companyExist.clients.find(elem => elem._id.toString() === client_id)

            if (!companyExist || !userExist || !clientExist) {
                res.status(400).json({ message: "Company or user or client does not exist" })
            } else {
                res.status(200).json({ client: clientExist })
            }
        }




    }




})