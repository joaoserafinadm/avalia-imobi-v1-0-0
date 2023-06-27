import { ObjectId, ObjectID } from 'bson'
import connect from '../../utils/database'
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

        res.status(200).json({ message: "file uploaded" })
    }

})

export const config = {
    api: {
      bodyParser: {
        sizeLimit: '16mb',
      },
    },
  }