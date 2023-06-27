import { ObjectId, ObjectID } from 'bson'
import connect from '../../utils/database'
import { verify, sign } from 'jsonwebtoken'
import cookie from 'cookie'
const cloudinary = require("../../utils/cloudinary")

// const cloudinary = require('cloudinary').v2;



const authenticated = fn => async (req, res) => {

    verify(req.cookies.auth, process.env.JWT_SECRET, async function (err, decoded) {
        if (!err && decoded) {
            return await fn(req, res)
        }

        res.status(500).json({ message: 'You are not authenticated.' })
    })
}

export default authenticated(async (req, res) => {


    if (req.method === "DELETE") {

        const { file } = req.query

        const objFile = JSON.parse(file)

        await cloudinary.uploader.destroy(objFile.id)
            .then(result => {
                if (result.result === 'ok') res.status(200).json({ message: "file deleted" })
                else res.status(400).json({ message: "file not found" })
            })
            .catch(e => {
                res.status(400).json({ error: "cant delete the file" })
            })

    } else {

        res.status(400).json({ error: "Wrong request method" })
    }




})