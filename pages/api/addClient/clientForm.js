import axios from 'axios'
import { connect } from '../../../utils/db'
import bcrypt from 'bcrypt'
import { ObjectId } from 'bson'
import baseUrl from '../../../utils/baseUrl'

export default async function (req, res) {

    if (req.method === "GET") {

        const { user_id, client_id } = req.query


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

                if (clientExist.status === "outdated") {


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
                        profileImageUrl: userExist?.profileImageUrl,
                        status: clientExist.status
                    }
                    res.status(200).json(data)

                } else {

                    const data = {
                        userFirstName: userExist?.firstName,
                        userLastName: userExist?.lastName,
                        profileImageUrl: userExist?.profileImageUrl,
                        celular: clientExist?.celular,
                        logo: companyExist?.logo,
                        //                         creci: userExist?.creci,
                        //                         email: userExist?.email,
                        //                         celular: userExist?.celular,
                        //                         telefone: userExist?.telefone,
                        //                         headerImg: companyExist?.headerImg_id ? companyExist.headerImages.find(elem => elem._id.toString() === companyExist?.headerImg_id).imageUrl : '',
                        // creci
                        // email
                        // celular
                        // telefone
                        // profileImageUrl
                        // headerImg
                        // logo
                    }

                    res.status(400).json({ error: 'Client active', data: data })
                }

            }

        }

    } else if (req.method === "POST") {

        const data = req.body


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

                    const clientExist = companyExist?.clients?.find(elem => elem?._id?.toString() === data.client_id)


                    if (!clientExist) {
                        res.status(400).json({ error: 'Client does not exist' })
                    } else {

                        const {
                            slide,
                            client_id,
                            styles,
                            logo,
                            backgroundImg,
                            companyName,
                            userFirstName,
                            userLastName,
                            profileImageUrl,

                            ...dataFilter
                        } = data

                        const newData = {
                            ...clientExist,
                            ...dataFilter,
                            active: true,
                            status: 'active',
                            dateUpdated: new Date(),
                            dateAdded: new Date()
                        }


                        const result = await db.collection('companies').updateOne(
                            { _id: ObjectId(companyExist._id), 'clients._id': ObjectId(data.client_id) }, {
                            $set: {
                                'clients.$': newData,
                            }
                        })





                        if (result.matchedCount) {

                            const notification = {
                                user_id: userExist._id,
                                subject: "clientUpdated",
                                title: 'Imóvel atualizado!',
                                text: `As informações de '${clientExist.clientName}' foram atualizadas! Clique aqui para avaliar o imóvel.`,
                                imageUrl: "https://res.cloudinary.com/joaoserafinadm/image/upload/v1717456528/AVALIA%20IMOBI/NOTIFICATION_IMG/jh9wkm7dz6xcwvg9u8x8.png",
                                link: "https://app.avaliaimobi.com.br/clientsManagement?client_id=" + data.client_id,
                            }

                            await axios.post(`${baseUrl()}/api/notifications`, {
                                user_id: userExist._id,
                                notification: notification
                            })


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