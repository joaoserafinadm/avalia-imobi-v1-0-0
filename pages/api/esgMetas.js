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


    if (req.method === "POST") {

        const {
            company_id,
            user_id,
            question_id,
            topic,
            tarefa,
            indicador,
            objetivos,
            dateStart,
            dateEnd,
            status,
            prioridade,
            responsavel_id,
            email
        } = req.body



        if (!company_id || !question_id || !topic) {
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

                    const response = await db.collection("companies").updateOne(
                        { _id: ObjectId(company_id), "esgIndicators._id": question_id },
                        {
                            $push: {
                                "esgIndicators.$.tasks":
                                {
                                    "_id": ObjectId(),
                                    "tarefa": tarefa || '',
                                    "indicador": indicador || '',
                                    "objetivos": objetivos || '',
                                    "dateStart": dateStart,
                                    "dateEnd": dateEnd,
                                    "responsavel_id": responsavel_id || "",
                                    "email": email,
                                    "dateAdded": new Date(),
                                    "dateUpdated": new Date(),
                                    "prioridade": prioridade,
                                    "status": status,
                                    "user_id": user_id,
                                    "history": [{
                                        "context": ["Tarefa criada"],
                                        "tarefa": tarefa || '',
                                        "indicador": indicador || '',
                                        "objetivos": objetivos || '',
                                        "dateStart": dateStart,
                                        "dateEnd": dateEnd,
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
                            templateId: 'd-61062ea5072b4ec1b75ad0a701c3d033',
                            dynamic_template_data: {
                                tarefa: tarefa,
                                link: `${baseUrl()}/esgManagement`
                            }
                        }

                        await mail.send(data)

                        res.status(200).json(response)
                    } else {
                        res.status(400).json({ error: "Cannot create assignment" })
                    }
                }
            }
        }
    } else if (req.method === "DELETE") {

        const {
            company_id,
            question_id,
            task_id,
        } = req.query

        console.log("req.query", req.query)

        if (!company_id && !task_id) {
            res.status(400).json({ error: "Missing parameters on request body" })
        } else {

            const { db } = await connect()

            const companyExists = await db.collection('companies').findOne({ _id: ObjectId(company_id) })
            const questionExists = companyExists.esgIndicators.find(elem => elem._id.toString() === question_id)
            const metaExists = questionExists.tasks.find(elem => elem._id.toString() === task_id)

            console.log("exists", questionExists, metaExists)

            if (!companyExists) {
                res.status(400).json({ error: "Company do not exists" })
            } else if (!metaExists || !questionExists) {
                res.status(400).json({ error: "Task do not exists" })
            } else {
                const response = await db.collection('companies').updateOne(
                    { _id: ObjectId(company_id), "esgIndicators._id": question_id },
                    {
                        $pull: {
                            "esgIndicators.$.tasks": {
                                "_id": ObjectId(task_id)
                            }
                        }
                    })

                if (response) {
                    const companyUpdated = await db.collection('companies').findOne({ _id: ObjectId(company_id) })
                    res.status(200).json(companyUpdated.esgIndicators)
                } else {
                    res.status(400).json({ error: "Goal can not be deleted" })
                }
            }


        }


    } else if (req.method === "PATCH") {
        const {
            company_id,
            user_id,
            question_id,
            task_id,
            tarefa,
            indicador,
            objetivos,
            dateStart,
            dateEnd,
            status,
            prioridade,
            responsavel_id,
            email
        } = req.body


        console.log(req.body)



        if (!company_id || !question_id || !task_id) {
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

                    const questionExists = companyExists.esgIndicators.find(elem => elem._id.toString() === question_id)
                    const metaExists = questionExists.tasks.find(elem => elem._id.toString() === task_id)


                    let contextMessage = []

                    if (metaExists.tarefa != tarefa) contextMessage.push('Tarefa alterada')
                    if (metaExists.objetivos != objetivos) contextMessage.push('Objetivos alterados')
                    if (metaExists.indicador != indicador) contextMessage.push('Indicador alterado')
                    if (metaExists.dateStart != dateStart) contextMessage.push('Data de início alterada')
                    if (metaExists.dateEnd != dateEnd) contextMessage.push('Data de término alterada')
                    if (metaExists.status != status) contextMessage.push('Status alterado')
                    if (metaExists.prioridade != prioridade) contextMessage.push('Prioridade alterada')
                    if (metaExists.responsavel_id != responsavel_id) contextMessage.push('Responsável alterado')

                    const response = await db.collection("companies").updateOne(
                        { _id: ObjectId(company_id), "esgIndicators._id": question_id },
                        {
                            $set: {
                                "esgIndicators.$.tasks.$[elem].tarefa": tarefa || '',
                                "esgIndicators.$.tasks.$[elem].indicador": indicador || '',
                                "esgIndicators.$.tasks.$[elem].objetivos": objetivos || '',
                                "esgIndicators.$.tasks.$[elem].dateStart": dateStart,
                                "esgIndicators.$.tasks.$[elem].dateEnd": dateEnd,
                                "esgIndicators.$.tasks.$[elem].responsavel_id": responsavel_id || "",
                                "esgIndicators.$.tasks.$[elem].email": email,
                                "esgIndicators.$.tasks.$[elem].dateUpdated": new Date(),
                                "esgIndicators.$.tasks.$[elem].prioridade": prioridade,
                                "esgIndicators.$.tasks.$[elem].status": status,
                                "esgIndicators.$.tasks.$[elem].user_id": user_id,
                            },
                            $addToSet: {
                                "esgIndicators.$.tasks.$[elem].history": {
                                    "context": contextMessage,
                                    "tarefa": tarefa || '',
                                    "indicador": indicador || '',
                                    "objetivo": objetivos,
                                    "dateStart": dateStart,
                                    "dateEnd": dateEnd,
                                    "responsavel_id": responsavel_id || "",
                                    "email": email,
                                    "dateUpdated": new Date(),
                                    "prioridade": prioridade,
                                    "status": status,
                                    "user_id": user_id,
                                }
                            },

                        },
                        {
                            arrayFilters: [{
                                "elem._id": ObjectId(task_id)
                            }]
                        })

                    if (response) {


                        const data = {
                            to: email,
                            from: {
                                email: 'contato@akvo-esg.com.br',
                                name: 'AKVO ESG'
                            },
                            templateId: 'd-8bcea65e19f045a48e75dec9e82b7cb1',
                            dynamic_template_data: {
                                tarefa: tarefa,
                                link: `${baseUrl()}/esgManagement`
                            }
                        }

                        await mail.send(data)

                        res.status(200).json(response)
                    } else {
                        res.status(400).json({ error: "Cannot create assignment" })
                    }
                }
            }
        }





    } else {
        res.status(400).json({ error: 'Wrong paramter method' })
    }

})


