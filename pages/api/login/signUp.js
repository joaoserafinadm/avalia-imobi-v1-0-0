import { connect } from '../../../utils/db'

export default async function (req, res) {

    if (req.method === 'POST') {

        const { db } = await connect()


        const response = await db.collection('users').insertOne({
            firstName: 'lala'
        })

        console.log(response)

        res.status(200).json(response)

    }

}


