import { ObjectId, ObjectID } from 'bson'
// import connect from '../../utils/database'
import { verify, sign } from 'jsonwebtoken'
import cookie from 'cookie'

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

        const { financingValue,
            projectTotal,
            debitBalance,
            cnaeProject,
            dateStart,
            dateEnd,
            totalEmission,
            cidade,
            estado } = req.body

        const result = {
            fatorAtribuicao: 100,
            score: 100,
            emissaoFinanciada: 100,
        }

        console.log("req.query", req.body)


        res.status(200).json({
            fatorAtribuicao: 100,
            score: 100,
            emissaoFinanciada: 100,
        })


    }




})



