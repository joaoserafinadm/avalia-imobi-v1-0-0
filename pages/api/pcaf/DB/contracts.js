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

    if (req.method === "POST") {

        const {
            company_id,
            user_id,
            asset,
            processNumber,
            financingValue,
            debitBalance,
            projectTotal,
            cidade,
            estado,
            cnaeCompany,
            cnaeProject,
            dateStart,
            dateEnd,
            inventoryAudited,
            totalEmission,
            calculator
        } = req.body

        if (!company_id || !user_id || !asset || !processNumber || !financingValue || !debitBalance || !cnaeProject || !dateStart || !dateEnd) {

            res.status(400).json({ error: "Missing parameters on request body" })
        } else {
            const { db } = await connect()

            const companyExists = await db.collection('companies').findOne({ _id: ObjectId(company_id) })
            const contractExists = companyExists.pcafContracts.find(elem => elem.contractNumber === contractNumber)

            if (!companyExists) {
                res.status(400).json({ error: "Company does not exist" })
            } else if (contractExists) {
                res.status(400).json({ error: "Contract already exist" })
            } else {
                const newUnid_id = ObjectId()

                const response = await db.collection('companies').updateOne(
                    { _id: ObjectId(company_id) },
                    {
                        $addToSet: {
                            "pcafContracts":
                            {
                                "_id": newUnid_id,
                                "asset": asset,
                                "processNumber": processNumber,
                                "financingValue": financingValue,
                                "debitBalance": debitBalance ? debitBalance : 0,
                                "projectTotal": projectTotal ? projectTotal : 0,
                                "cidade": cidade,
                                "estado": estado,
                                "cnaeCompany": cnaeCompany,
                                "cnaeProject": cnaeProject,
                                "dateStart": dateStart,
                                "dateEnd": dateEnd,
                                "inventoryAudited": inventoryAudited ? inventoryAudited : '',
                                "totalEmission": totalEmission ? +totalEmission : 0,
                                "calculator": calculator,
                                "active": true,
                                "deleted": false,
                                "dateAdd": Date(),
                                "dateUpdated": '',
                                "addedBy": user_id,
                                "updatedBy": '',
                            }
                        }
                    })


                if (response) {
                    res.status(200).json(response)
                }
            }


        }

    }

    else if (req.method === 'GET') {

        const { company_id } = req.query

        if (!company_id) {
            res.status(400).json({ error: 'Missing company name on request body' })
        } else {
            const { db } = await connect()

            const companyExists = await db.collection('companies').findOne({ _id: ObjectId(company_id) })

            const contractsList = companyExists.pcafContracts

            if (!contractsList) {
                res.status(400).json({ error: 'company not found' })
            } else {
                res.status(200).json(contractsList)
            }
        }


    }








})