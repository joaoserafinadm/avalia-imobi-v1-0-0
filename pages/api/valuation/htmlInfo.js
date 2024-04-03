import axios from 'axios';
import cheerio from 'cheerio';

export default async function handler(req, res) {
  const { url } = req.query;

  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    // Inicializa as variáveis para armazenar os valores das meta tags
    let title = '';
    let description = '';
    let image = '';

    // Extrai o título da tag <title>
    title = $('title').text();

    // Procura outras meta tags relevantes e atribui os valores correspondentes às variáveis
    $('meta').each((index, tag) => {
      const tagName = $(tag).attr('name') || $(tag).attr('property');

      if (tagName === 'description') {
        description = $(tag).attr('content');
      } else if (tagName === 'og:image' || tagName === 'twitter:image') {
        image = $(tag).attr('content');
      }
    });

    // Retorna os valores das meta tags como JSON
    res.status(200).json({ title, description, image });
  } catch (error) {
    console.error('Error fetching URL:', error);
    res.status(500).json({ error: 'Error fetching URL' });
  }
}