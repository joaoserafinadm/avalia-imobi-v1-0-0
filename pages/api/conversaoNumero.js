import { ObjectID } from 'bson'
import connect from '../../utils/database'
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


    if (req.method === 'PATCH') {

        const fatoresEmissao = await db.collection('fatoresEmissao').findOne({fatorEmissao: "Composicao dos combustiveis brasileiros"})

        




    }






})