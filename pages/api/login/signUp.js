import { connect } from '../../../utils/db'
import bcrypt from 'bcrypt'
import { ObjectId } from 'bson'

export default async function (req, res) {

    if (req.method === 'POST') {

        const { firstName, lastName, email, password } = req.body

        if (!firstName || !lastName || !email || !password) {
            res.status(400).json({ error: 'Missing body parameters.' })
        } else {

            const { db } = await connect()

            const userExists = await db.collection('users').findOne({ email: email })

            if (userExists) {
                res.status(400).json({ error: 'User already exists.' })
            } else {

                const saltPassword = await bcrypt.genSalt(10)
                const securePassword = await bcrypt.hash(password, saltPassword)

                Date.prototype.addDays = function (days) {

                    var date = new Date(this.valueOf());
                    date.setDate(date.getDate() + days);
                    return date;
                }

                let date = new Date()

                const styles = {
                    primaryColor: '',
                    secundaryColor: '',
                    terciaryColor: '',
                    backgroundImage: '',
                    logo: ''
                }


                const notifications = [
                    {
                        // _id: ObjectId(),
                        dateAdded: new Date(),
                        subject: 'star',
                        text: "Bem vindo ao Avalia Imobi! Clique aqui para fazer um tour pela plataforma!",
                        link: 'http://localhost:3000',
                        imageUrl: 'https://res.cloudinary.com/dywdcjj76/image/upload/v1693963692/PUBLIC/TEMPLATE_IMG_shcaor.png'
                    }
                ]

                const newCompany = await db.collection('companies').insertOne({
                    companyName: '',
                    companyCreci: '',
                    email: '',
                    celular: '',
                    telefone: '',
                    cep: '',
                    logradouro: '',
                    numero: '',
                    cidade: '',
                    estado: '',
                    headerImg: '',
                    logo: '',
                    active: true,
                    dateAdded: new Date(),
                    dateUpdate: '',
                    styles: styles
                })


                const newUser = await db.collection('users').insertOne({
                    firstName: firstName,
                    lastName: lastName,
                    cpf: '',
                    email: email,
                    workEmail: email,
                    creci: '',
                    telefone: '',
                    celular: '',
                    cep: '',
                    logradouro: '',
                    numero: '',
                    cidade: '',
                    estado: '',
                    company_id: newCompany.insertedId.toString(),
                    userStatus: 'admGlobal',
                    profileImageUrl: 'https://res.cloudinary.com/joaoserafinadm/image/upload/v1692760589/PUBLIC/user_template_ocrbrg.png',
                    password: securePassword,
                    permissions: false,
                    dateAdd: new Date(),
                    dateLimit: date.addDays(8),
                    dateUpdated: '',
                    passwordResetToken: '',
                    passwordResetExpires: '',
                    accessCount: 0,
                    active: true,
                    deleted: false,
                    notifications: notifications
                })

                if (newCompany.insertedId && newUser.insertedId) {
                    res.status(200).json({ message: "User registered" })
                } else {
                    res.status(400).json({ error: "Trouble in connect to database" })

                }



            }

        }



    }

}


