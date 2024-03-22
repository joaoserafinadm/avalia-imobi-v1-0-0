
import { verify, sign } from 'jsonwebtoken'
import puppeteer from 'puppeteer';



const authenticated = fn => async (req, res) => {
    verify(req.cookies.auth, process.env.JWT_SECRET, async function (err, decoded) {
        if (!err && decoded) {
            return await fn(req, res)
        }
        res.status(500).json({ message: 'You are not authenticated.' });
    })
}


export default async (req, res) => {
// export default authenticated(async (req, res) => {


    if (req.method === "POST") {
        const { link } = req.body;

        try {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();

            await page.goto(link, { waitUntil: 'networkidle2' });

            // Obter todas as imagens visíveis na página
            const images = await page.evaluate(() => {
                const imgs = Array.from(document.getElementsByTagName('img'));
                return imgs.map(img => img.getAttribute('src'));
            });

            // Fechar o navegador
            await browser.close();

            const imagesArray = images.filter(function (element) {
                const imovelImage = element.includes("logo") || element.includes("favicon") || element.includes("usuario") || element.includes("svg")
                console.log(imovelImage)
                if (!imovelImage) { return element }
            });

            console.log(imagesArray);


            res.send(imagesArray);


        } catch (error) {
            console.error(error);
            res.status(500).send({ error: 'Could not fetch images' });
        }
    }







}