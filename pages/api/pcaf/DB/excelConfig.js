import { ObjectId } from 'bson'
import connect from '../../../../utils/database'
import { verify } from 'jsonwebtoken'

const authenticated = fn => async (req, res) => {

    verify(req.cookies.auth, process.env.JWT_SECRET, async function (err, decoded) {
        if (!err && decoded) {
            return await fn(req, res)
        }

        res.status(500).json({ message: 'You are not authenticated.' })
    })
}

export default authenticated(async (req, res) => {

    if (req.method === 'GET') {

        const { company_id } = req.query

        if (!company_id) {
            res.status(200).json({ message: "Missing parameters on request body" })
        } else {

            const { db } = await connect()

            const companyExists = await db.collection('companies').findOne({ _id: ObjectId(company_id) })

            if (!companyExists) {
                res.status(400).json({ error: 'Company does not exist' })
            } else {

                if (!companyExists.pcafApiConfig || !companyExists.pcafApiConfig.excelConfig) {

                    await db.collection('companies').updateOne({ _id: ObjectId(company_id) }, {
                        $set: {
                            'pcafApiConfig.excelConfig.headerRow': 1,
                            'pcafApiConfig.excelConfig.processNumberCol': '',
                            'pcafApiConfig.excelConfig.financingValueCol': '',
                            'pcafApiConfig.excelConfig.projectTotalCol': '',
                            'pcafApiConfig.excelConfig.debitBalanceCol': ''
                        }
                    })

                    const response = {
                        headerRow: 1,
                        processNumberCol: '',
                        financingValueCol: '',
                        projectTotalCol: '',
                        debitBalanceCol: ''
                    }

                    res.status(200).json({ response })
                } else {
                    const response = companyExists.pcafApiConfig.excelConfig

                    res.status(200).json(response)
                }

            }
        }



    } else if (req.method === 'POST') {

        const { company_id,
            headerRow,
            processNumberCol,
            financingValueCol,
            projectTotalCol,
            debitBalanceCol,
            cnaeCol } = req.body

        if (!company_id || !headerRow || !processNumberCol || !financingValueCol || !projectTotalCol || !debitBalanceCol || !cnaeCol) {

            res.status(200).json({ message: "Missing parameters on request body" })

        } else {

            const { db } = await connect()

            const companyExists = await db.collection('companies').findOne({ _id: ObjectId(company_id) })

            if (!companyExists) {
                res.status(400).json({ error: 'Company does not exist' })
            } else {

                const response = await db.collection('companies').updateOne({ _id: ObjectId(company_id) }, {
                    $set: {
                        'pcafApiConfig.excelConfig.headerRow': headerRow,
                        'pcafApiConfig.excelConfig.processNumberCol': processNumberCol,
                        'pcafApiConfig.excelConfig.financingValueCol': financingValueCol,
                        'pcafApiConfig.excelConfig.projectTotalCol': projectTotalCol,
                        'pcafApiConfig.excelConfig.debitBalanceCol': debitBalanceCol,
                        'pcafApiConfig.excelConfig.cnaeCol': cnaeCol
                    }
                })


                if (!response) {
                    res.status(400).json({ error: 'cant save data' })
                } else {
                    const data = {
                        headerRow: headerRow,
                        processNumberCol: processNumberCol,
                        financingValueCol: financingValueCol,
                        projectTotalCol: projectTotalCol,
                        debitBalanceCol: debitBalanceCol,
                        cnaeCol: cnaeCol
                    }
                    res.status(200).json(data)
                }
            }

        }



    } else {

        res.status(400).json({ error: 'wrong request method.' })
    }




}
)