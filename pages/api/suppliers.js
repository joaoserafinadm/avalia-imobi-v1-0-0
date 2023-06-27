import { ObjectId, ObjectID } from 'bson'
import connect from '../../utils/database'
import { verify } from 'jsonwebtoken'
import { left } from '@popperjs/core'
const mail = require('@sendgrid/mail')
mail.setApiKey(process.env.SENDGRIP_API_KEY_AKVO)
import baseUrl from '../../utils/baseUrl'
import bcrypt from 'bcrypt'

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

        const {
            company_id,
            unid_id,
            emailsList,
            tools,
            fontesEmissao
        } = req.body

        if (!company_id || !unid_id || emailsList.length === 0) {
            res.status(400).json({ error: 'Missing parameters on request body' })
        } else {

            const { db } = await connect()

            const companyExists = await db.collection('companies').findOne({ _id: ObjectId(company_id) })
            const unidExists = companyExists.unidades.find(elem => elem._id.toString() === unid_id)

            if (!companyExists || !unidExists) {
                res.status(400).json({ error: 'Company or Unid do not exists' })
            } else {
                let userExists

                for (let [index, elem] of emailsList.entries()) {

                    userExists = await db.collection('users').findOne({ email: elem })


                    if (userExists && userExists.company_id === company_id) {
                        res.status(400).json({ email: userExists.email, error: 'user already exists' })
                    }
                    if (userExists && Array.isArray(userExists.company_id) && userExists.company_id.find(elem => elem === company_id)) {
                        res.status(400).json({ email: userExists.email, error: 'user already exists' })
                    }


                }

                let counter = 0

                let newUsersArray = []
                let newUsersArraySecret = []

                emailsList.map(elem => {
                    newUsersArray.push({
                        firstName: '',
                        lastName: '',
                        cpf: '',
                        email: elem,
                        celular: '',
                        cep: '',
                        logradouro: '',
                        numero: '',
                        cidade: '',
                        estado: '',
                        company_id: [company_id],
                        active: true,
                        deleted: false,
                        userStatus: 'supplier',
                        profileImageUrl: 'https://res.cloudinary.com/co2blue/image/upload/v1618519160/co2blue_profile_images/user_template_d4xng3.png',
                        password: randomPassword(),
                        permissions: [unid_id],
                        dateAdd: new Date(),
                        dateLimit: '',
                        dateUpdated: '',
                        accessCount: 0,
                        passwordResetToken: '',
                        passwordResetExpires: ''
                    })
                })

                for (let [index, elem] of newUsersArray.entries()) {
                    const saltPassword = await bcrypt.genSalt(10)
                    const securePassword = await bcrypt.hash(elem.password, saltPassword)

                    newUsersArraySecret.push({ ...elem, password: securePassword })
                    counter++
                }


                const response = await db.collection('users').insertMany(newUsersArraySecret)

                console.log("response", response.insertedCount)

                if (response.insertedCount) {
                    for (let [index, elem] of newUsersArray.entries()) {

                        const data = {
                            to: elem.email,
                            from: {
                                email: 'contato@akvo-esg.com.br',
                                name: 'AKVO ESG'
                            },
                            templateId: 'd-38ac9af9c7254efd843e3e0e495632ce',
                            dynamic_template_data: {
                                text: '',
                                link: ''
                            }
                        }

                        await mail.send(data)

                    }

                }
            }
        }


    }



})


const randomPassword = () => {
    let password = ''
    do {
        password += Math.random().toString(36).substr(2)
    } while (password.length < 8)
    password = password.substr(0, 8)
    return password
}