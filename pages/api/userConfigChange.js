import { ObjectId, ObjectID } from 'bson'
import connect from '../../utils/database'
import { verify, sign } from 'jsonwebtoken'
import cookie from 'cookie'
import Cookie from "js-cookie";
import jwt from "jsonwebtoken";

const authenticated = fn => async (req, res) => {

    verify(req.cookies.auth, process.env.JWT_SECRET, async function (err, decoded) {
        if (!err && decoded) {
            return await fn(req, res)
        }

        res.status(500).json({ message: 'You are not authenticated.' })
    })
}

export default authenticated(async (req, res) => {

    const token = jwt.decode(Cookie.get('auth'))

    if (req.method === "PATCH") {

        const {
            company_id,
            user_id,
            companyLogo,
            userConfig
        } = req.body

        if (!company_id || !user_id || !userConfig) {
            res.status(400).json({ error: 'Missing body parameter' })
            return
        } else {
            const { db } = await connect()

            const person = await db.collection('users').findOne({ _id: ObjectId(user_id) })

            const response = await db.collection('companies').updateOne({ _id: ObjectId(company_id) }, {
                $set: {
                    userConfig
                }
            })

            const company = await db.collection('companies').findOne({ _id: ObjectId(company_id) })

            console.log("userConfig", company)

            const clains = {
                sub: person._id,
                firstName: person.firstName,
                lastName: person.lastName,
                company_id: person.company_id,
                profilePicture: person.profileImageUrl,
                permissions: person.permissions,
                userStatus: person.userStatus,
                tools: company.tools ? company.tools : {
                    geeCalculator: false,
                    geeAgro: false,
                    esgIndicators: false,
                    pcaf: false
                },
                dateLimit: person.dateLimit,
                userConfig: userConfig ? userConfig : '',
                companyLogo: companyLogo,
                active: person.active
            }

            const jwt = sign(clains, process.env.JWT_SECRET, {})

            const response2 = res.setHeader('Set-Cookie', cookie.serialize('auth', jwt, {
                httpOnly: false,
                secure: process.env.NODE_ENV !== true, //em produção usar true
                sameSite: 'strict',
                maxAge: 3600,
                path: '/'
            }))
            res.status(200).json({ message: "Update success." })
        }


    }




    else if (req.method === 'DELETE') {

        const { companyName } = req.body

        if (!companyName) {
            res.status(400).json({ error: 'Missing company name on request body' })
            return
        }

        const { db } = await connect()

        const response = await db.collection('companies').findOne({ companyName })

        if (!response) {
            res.status(400).json({ error: 'company not found' })
            return
        } else {

            const response = await db.collection('companies').deleteOne({ companyName: companyName })

            res.status(200).json({ message: `Company ${companyName} was deleted.` })

        }

    }

    else {

        res.status(400).json({ error: 'Wrong request method' })
    }


})