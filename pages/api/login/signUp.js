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
                        _id: ObjectId(),
                        dateAdded: new Date(),
                        subject: 'star',
                        text: "Bem vindo ao Avalia Imobi! Clique aqui para fazer um tour pela plataforma!",
                        link: `https://app.avaliaimobi.com.br/companyEdit`,
                        imageUrl: 'https://res.cloudinary.com/joaoserafinadm/image/upload/v1693963692/PUBLIC/TEMPLATE_IMG_shcaor.png',
                        user_id: '',
                        checked: false
                    },
                    {
                        _id: ObjectId(),
                        dateAdded: new Date(),
                        subject: 'star',
                        text: "Configure a sua imobiliaria.",
                        link: `https://app.avaliaimobi.com.br/companyEdit`,
                        imageUrl: 'https://res.cloudinary.com/joaoserafinadm/image/upload/v1695601557/PUBLIC/6_otqvgl.png',
                        user_id: '',
                        checked: false
                    },
                    {
                        _id: ObjectId(),
                        dateAdded: new Date(),
                        subject: 'star',
                        text: "Configure o seu perfil.",
                        link: `https://app.avaliaimobi.com.br/editProfile`,
                        imageUrl: 'https://res.cloudinary.com/joaoserafinadm/image/upload/v1695601556/PUBLIC/2_fbxre3.png',
                        user_id: '',
                        checked: false
                    }
                ]


                const backgroundImages = [
                    {
                        _id: ObjectId(),
                        imageUrl: 'https://res.cloudinary.com/joaoserafinadm/image/upload/v1696809593/AVALIA%20IMOBI/BACKGROUND_IMAGES/1_rdqugq.png',
                        user_id: ''
                    },
                    {
                        _id: ObjectId(),
                        imageUrl: 'https://res.cloudinary.com/joaoserafinadm/image/upload/v1696809594/AVALIA%20IMOBI/BACKGROUND_IMAGES/bg1_qevnqz.png',
                        user_id: ''
                    },
                    {
                        _id: ObjectId(),
                        imageUrl: 'https://res.cloudinary.com/joaoserafinadm/image/upload/v1696809594/AVALIA%20IMOBI/BACKGROUND_IMAGES/bg2_odug7b.png',
                        user_id: ''
                    },
                    {
                        _id: ObjectId(),
                        imageUrl: 'https://res.cloudinary.com/joaoserafinadm/image/upload/v1696809594/AVALIA%20IMOBI/BACKGROUND_IMAGES/8_fym2vs.png',
                        user_id: ''
                    },
                    {
                        _id: ObjectId(),
                        imageUrl: 'https://res.cloudinary.com/joaoserafinadm/image/upload/v1696809593/AVALIA%20IMOBI/BACKGROUND_IMAGES/bg3_bjwf6x.png',
                        user_id: ''
                    },
                    {
                        _id: ObjectId(),
                        imageUrl: 'https://res.cloudinary.com/joaoserafinadm/image/upload/v1696809593/AVALIA%20IMOBI/BACKGROUND_IMAGES/4_xnjdaa.png',
                        user_id: ''
                    },
                    {
                        _id: ObjectId(),
                        imageUrl: 'https://res.cloudinary.com/joaoserafinadm/image/upload/v1696809593/AVALIA%20IMOBI/BACKGROUND_IMAGES/7_ucmfzk.png',
                        user_id: ''
                    },
                    {
                        _id: ObjectId(),
                        imageUrl: 'https://res.cloudinary.com/joaoserafinadm/image/upload/v1696809593/AVALIA%20IMOBI/BACKGROUND_IMAGES/5_bxgph5.png',
                        user_id: ''
                    },
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
                    backgroundImages: backgroundImages,
                    headerImg_id: '',
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
                    notifications: notifications,
                    history: []
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


