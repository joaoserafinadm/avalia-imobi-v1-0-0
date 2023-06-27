import { ObjectId, ObjectID } from 'bson'
import connect from '../../../../utils/database'
import { verify, sign } from 'jsonwebtoken'
import cookie from 'cookie'


export default async function pcafApi(req, res) {

    if (req.method === "GET") {

        const {accessKey} = req.query

        const company_id = accessKey.slice(-24)

        console.log(accessKey, company_id)

        const { db } = await connect()

        const companyExists = await db.collection('companies').findOne({ _id: ObjectId(company_id) })

        if(companyExists.pcafApiConfig.accessKey === accessKey) {

            return res.status(200).json({result: 100})
        }



    }



}