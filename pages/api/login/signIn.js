import bcrypt from 'bcrypt'
import { connect } from '../../../utils/db'
import { ObjectID } from 'bson'
import { sign } from 'jsonwebtoken'
import cookie from 'cookie'

export default async (req, res) => {

    if (req.method === 'POST') {

        const { email, password } = req.body

        const { db } = await connect()

        const userExists = await db.collection('users').findOne({ email })

        let userConfig
        let companyLogo

        if (!userExists) {
            res.status(400).json({ error: 'Wrong e-mail or password.' })
        } else {

            const companyExist = await db.collection('companies').findOne(ObjectID(userExists.company_id))

            bcrypt.compare(password, userExists.password, async function (err, result) {
                if (!err && result) {

                    // if (userExists.active && (!userExists.dateLimit || userExists.dateLimit.toJSON().slice(0, 10) > new Date().toJSON().slice(0, 10))) {
                    const clains = {
                        sub: userExists._id,
                        firstName: userExists.firstName,
                        lastName: userExists.lastName,
                        company_id: userExists.company_id,
                        companyName: companyExist.companyName,
                        profileImageUrl: userExists.profileImageUrl,
                        userStatus: userExists.userStatus,
                        dateLimit: companyExist.dateLimit,
                        headerImg: companyExist.headerImg,
                        logo: companyExist.logo,
                        active: companyExist.active,
                        errorStatus: companyExist.errorStatus
                    }

                    const jwt = sign(clains, process.env.JWT_SECRET, {})

                    const response = res.setHeader('Set-Cookie', cookie.serialize('auth', jwt, {
                        httpOnly: false,
                        secure: process.env.NODE_ENV !== 'production', //em produção usar true
                        sameSite: 'strict',
                        path: '/',
                        maxAge: 31536000
                    }))

                    await db.collection('users').updateOne({ _id: ObjectID(userExists._id) },
                        {
                            $inc: {
                                accessCount: 1
                            }
                        })
                    res.status(200).json({ message: 'Ok' })

                } else {
                    res.status(400).json({ error: 'Wrong e-mail or password.' })
                }
            })
        }
    }

    else {
        res.status(400).json({ error: 'Wrong request method' })
    }

}