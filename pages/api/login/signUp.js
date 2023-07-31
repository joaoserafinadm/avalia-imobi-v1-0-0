import { connect } from '../../../utils/db'
import bcrypt from 'bcrypt'


export default async function (req, res) {

    if (req.method === 'POST') {

        const { firstName, lastName, email, password } = req.body

        console.log(req.body)

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

                const newCompany = await db.collection('companies').insertOne({
                    companyName: '',
                    email: email,
                    phone: '',
                    cep: '',
                    logradouro: '',
                    numero: '',
                    cidade: '',
                    estado: '',
                    profileImageUrl: '',
                    active: true,
                    dateAdded: new Date(),
                    dateUpdate: '',
                    notifications: [],
                    styles: styles
                })


                //PESQUISAR COMO TIRA O ID DA COMPANY
                const compani_id = newCompany.data

                await db.collection('users').insertOne({
                    firstName: firstName,
                    lastName: lastName,
                    cpf: '',
                    email: email,
                    phone: '',
                    cep: '',
                    logradouro: '',
                    numero: '',
                    cidade: '',
                    estado: '',
                    company_id: '',
                    userStatus: 'admGlobal',
                    profileImageUrl: '',
                    password: securePassword,
                    permissions: false,
                    dateAdd: new Date(),
                    dateLimit: date.addDays(8),
                    dateUpdated: '',
                    passwordResetToken: '',
                    passwordResetExpires: '',
                    accessCount: 0,
                    active: true,
                    deleted: false
                })

            }

        }






        const response = await db.collection('users').insertOne({
            firstName: 'lala'
        })

        console.log(response)

        res.status(200).json(response)

    }

}


