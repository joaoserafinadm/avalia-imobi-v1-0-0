const nodemailer = require("nodemailer");

export default async function authMail(req, res) {
  if (req.method === "POST") {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "admin@akvo-esg.com.br",
        pass: "eugeniaUnifloraWorkspace",
      },
    });

    await transporter
      .sendMail({
        from: "admin@akvo-esg.com.br", // sender address
        to: "joaoserafin.adm@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      })
      .then((response) => res.status(200).json({ response }))
      .catch((error) => res.status(400).json(error));
  }
}
