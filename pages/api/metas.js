import { ObjectId, ObjectID } from 'bson'
import connect from '../../utils/database'
import { verify } from 'jsonwebtoken'
import { left } from '@popperjs/core'
const mail = require('@sendgrid/mail')
mail.setApiKey(process.env.SENDGRIP_API_KEY_AKVO)
import baseUrl from '../../utils/baseUrl'

const authenticated = fn => async (req, res) => {

    verify(req.cookies.auth, process.env.JWT_SECRET, async function (err, decoded) {
        if (!err && decoded) {
            return await fn(req, res)
        }

        res.status(500).json({ message: 'You are not authenticated.' })
    })
}

export default authenticated(async (req, res) => {

    if (req.method === "GET") {
        const { company_id } = req.query

        if (!company_id) {
            res.status(400).json({ error: 'Missing company id on request body' })
        } else {

            const { db } = await connect()

            const response = await db.collection('companies').findOne({ _id: ObjectId(company_id) })

            if (!response) {
                res.status(400).json({ error: 'company not exists' })
            } else {
                const metas = response.metas
                res.status(200).json(metas)
            }

        }
    }

    if (req.method === "POST") {

        const {
            invFilter,
            unid_id,
            group,
            escopo,
            fonteEmissao,
            company_id,
            tarefa,
            meta,
            dateStart,
            dateEnd,
            indicador,
            responsavel_id,
            email,
            prioridade,
            status,
            user_id
        } = req.body

        if (!company_id) {
            res.status(400).json({ error: 'Missing company id on request body' })
        } else {

            if (!responsavel_id || !user_id) {

                res.status(400).json({ error: "Missing parameters on request body" })

            } else {

                const { db } = await connect()

                const companyExists = await db.collection('companies').findOne({ _id: ObjectId(company_id) })

                if (!companyExists) {
                    res.status(400).json({ error: "Company do not exists" })
                } else {

                    const response = await db.collection("companies").updateOne({ _id: ObjectId(company_id) },
                        {
                            $addToSet: {
                                "metas":
                                {
                                    "_id": ObjectId(),
                                    "invFilter": invFilter,
                                    "unid_id": unid_id,
                                    "group": group,
                                    "escopo": escopo,
                                    "fonteEmissao": fonteEmissao,
                                    "tarefa": tarefa || '',
                                    "meta": +meta || 0,
                                    "dateStart": dateStart,
                                    "dateEnd": dateEnd,
                                    "indicador": indicador || '',
                                    "responsavel_id": responsavel_id || "",
                                    "email": email,
                                    "dateAdded": new Date(),
                                    "dateUpdated": new Date(),
                                    "prioridade": prioridade,
                                    "status": status,
                                    "user_id": user_id,
                                    "history": [{
                                        "context": ["Tarefa criada"],
                                        "invFilter": invFilter,
                                        "unid_id": unid_id,
                                        "group": group,
                                        "escopo": escopo,
                                        "fonteEmissao": fonteEmissao,
                                        "tarefa": tarefa || '',
                                        "meta": +meta || 0,
                                        "dateStart": dateStart,
                                        "dateEnd": dateEnd,
                                        "indicador": indicador || '',
                                        "responsavel_id": responsavel_id || "",
                                        "email": email,
                                        "dateAdded": new Date(),
                                        "dateUpdated": new Date(),
                                        "prioridade": prioridade,
                                        "status": status,
                                        "user_id": user_id,
                                    }]
                                }
                            }
                        })

                    if (response) {

                        const data = {
                            to: email,
                            from: {
                                email: 'contato@akvo-esg.com.br',
                                name: 'AKVO ESG'
                            },
                            templateId: 'd-da448b3ee98f4ac488f2eaa02cc1c524',
                            dynamic_template_data: {
                                tarefa: tarefa,
                                link: `${baseUrl()}/inventoryManagement`
                            }
                        }

                        await mail.send(data)

                        res.status(200).json(response)
                    } else {
                        res.status(400).json({ error: "Can no create assignment" })

                    }
                }
            }
        }
    }

    if (req.method === "DELETE") {

        const {
            company_id,
            meta_id,
        } = req.query


        if (!company_id && !meta_id) {
            res.status(400).json({ error: "Missing parameters on request body" })
        } else {

            const { db } = await connect()

            const companyExists = await db.collection('companies').findOne({ _id: ObjectId(company_id) })
            const metaExists = companyExists.metas.find(elem => elem._id.toString() === meta_id)

            if (!companyExists) {
                res.status(400).json({ error: "Company do not exists" })
            } else if (!metaExists) {
                res.status(400).json({ error: "Goal do not exists" })
            } else {
                const response = await db.collection('companies').updateOne({ _id: ObjectId(company_id) },
                    {
                        $pull: {
                            metas: {
                                "_id": ObjectId(meta_id)
                            }
                        }
                    })

                if (response) {
                    const companyUpdated = await db.collection('companies').findOne({ _id: ObjectId(company_id) })
                    res.status(200).json(companyUpdated.metas)
                } else {
                    res.status(400).json({ error: "Goal can not be deleted" })
                }
            }

        }



    }

    if (req.method === "PATCH") {

        const {
            edit_id,
            invFilter,
            unid_id,
            group,
            escopo,
            fonteEmissao,
            company_id,
            tarefa,
            meta,
            dateStart,
            dateEnd,
            indicador,
            responsavel_id,
            email,
            prioridade,
            status,
            user_id,
            link
        } = req.body

        if (!company_id || !edit_id) {
            res.status(400).json({ error: 'Missing parameters on request body' })
        } else {

            if (!responsavel_id || !user_id) {

                res.status(400).json({ error: "Missing parameters on request body" })

            } else {

                const { db } = await connect()

                const companyExists = await db.collection('companies').findOne({ _id: ObjectId(company_id) })
                const metaExists = companyExists.metas.find(elem => elem._id.toString() === edit_id)

                let contextMessage = []

                if (metaExists.tarefa != tarefa) contextMessage.push('Tarefa alterada')
                if (metaExists.meta != meta) contextMessage.push('Meta alterada')
                if (metaExists.indicador != indicador) contextMessage.push('Indicador alterado')
                if (metaExists.dateStart != dateStart) contextMessage.push('Data de início alterada')
                if (metaExists.dateEnd != dateEnd) contextMessage.push('Data de término alterada')
                if (metaExists.status != status) contextMessage.push('Status alterado')
                if (metaExists.prioridade != prioridade) contextMessage.push('Prioridade alterada')
                if (metaExists.responsavel_id != responsavel_id) contextMessage.push('Responsável alterado')

                if (!companyExists) {
                    res.status(400).json({ error: "Company do not exists" })
                } else if (!metaExists) {
                    res.status(400).json({ error: "Goal do not exists" })
                } else {

                    const response = await db.collection("companies").updateOne({ _id: ObjectId(company_id), "metas._id": ObjectId(edit_id) },
                        {
                            $set: {
                                "metas.$.tarefa": tarefa || '',
                                "metas.$.meta": +meta || 0,
                                "metas.$.dateStart": dateStart,
                                "metas.$.dateEnd": dateEnd,
                                "metas.$.indicador": indicador || '',
                                "metas.$.responsavel_id": responsavel_id || "",
                                "metas.$.email": email,
                                "metas.$.dateUpdated": new Date(),
                                "metas.$.prioridade": prioridade,
                                "metas.$.status": status,
                                "metas.$.user_id": user_id
                            },
                            $addToSet: {
                                "metas.$.history": {
                                    "context": contextMessage,
                                    "invFilter": invFilter,
                                    "unid_id": unid_id,
                                    "group": group,
                                    "escopo": escopo,
                                    "fonteEmissao": fonteEmissao,
                                    "tarefa": tarefa || '',
                                    "meta": +meta || 0,
                                    "dateStart": dateStart,
                                    "dateEnd": dateEnd,
                                    "indicador": indicador || '',
                                    "responsavel_id": responsavel_id || "",
                                    "email": email,
                                    "dateAdded": new Date(),
                                    "dateUpdated": new Date(),
                                    "prioridade": prioridade,
                                    "status": status,
                                    "user_id": user_id,
                                }
                            }

                        })

                    if (response) {

                        let text1 = ''
                        let text2 = ''

                        if (metaExists.responsavel_id !== responsavel_id) {
                            text1 = `Você foi designado como o responsável pela seguinte tarefa: ${tarefa}`
                        }

                        if (metaExists.status !== status) {
                            text2 = `O status da tarefa "${tarefa}" foi alterado para "${status === "naoIniciado" ? "Não Iniciado" : status === "emAndamento" ? "Em andamento" : "Concluído"}"`
                        }

                        if (text1 || text2) {

                            const data = {
                                to: email,
                                from: {
                                    email: 'contato@akvo-esg.com.br',
                                    name: 'AKVO ESG'
                                },
                                templateId: 'd-38ac9af9c7254efd843e3e0e495632ce',
                                dynamic_template_data: {
                                    text: text1 || text2,
                                    link: link
                                }
                            }

                            await mail.send(data)
                        }

                        res.status(200).json(response)
                    } else {
                        res.status(400).json({ error: "Can no create assignment" })

                    }
                }
            }
        }





    }
})

