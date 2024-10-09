import { connect } from "../../../utils/db";
import { verify, sign } from "jsonwebtoken";
import { ObjectId, ObjectID } from "bson";
import { Resend } from "resend";
import SacUserEmail from "../../../src/emails/SacUserEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

const authenticated = (fn) => async (req, res) => {
    verify(
        req.cookies.auth,
        process.env.JWT_SECRET,
        async function (err, decoded) {
            if (!err && decoded) {
                return await fn(req, res);
            }
            res.status(500).json({ message: "You are not authenticated." });
        }
    );
};

export default authenticated(async (req, res) => {
    if (req.method === "POST") {
        const { company_id, user_id, type, text } = req.body;

        if (!user_id || !type || !text) {
            res.status(400).json({
                message: "Missing parameters on request body",
            });
        } else {
            const { db } = await connect();

            const userExist = await db
                .collection("users")
                .findOne({ _id: ObjectId(user_id) });

            const companyExist = await db
                .collection("companies")
                .findOne({ _id: ObjectId(company_id) });


            if (!userExist) {
                res.status(400).json({ message: "User does not exist" });
            } else {
                const firstName = userExist.firstName;
                const lastName = userExist.lastName;
                const email = userExist.email;
                const companyName = companyExist?.companyName;
                const userStatus = typeOfUser(userExist.userStatus);

                const result = await resend.emails.send({
                    from: "Notificação SAC <notificacao@avaliaimobi.com.br>",
                    to: ["contato@avaliaimobi.com.br"],
                    subject: "Notificação SAC",
                    react: SacUserEmail({
                        username: firstName + " " + lastName,
                        companyName,
                        userEmail: email,
                        messageType: type,
                        messageBody: text,
                    }),
                });

                if (result.id) {
                    res.status(200).json({ message: "Email sent" });
                } else {
                    res.status(400).json({ message: "Email not sent" });
                }
            }
        }
    }
});

const typeOfUser = (userType) => {
    if (userType === "admGlobal") {
        return "Administrador";
    } else if (userType === "user") {
        return "Usuário";
    } else {
        return "Não especificado";
    }
};