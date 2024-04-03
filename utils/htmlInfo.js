import axios from 'axios';
import cheerio from 'cheerio';


export default async function htmlInfo(url) {

    try {
        const response = await axios.get(url);
        const html = response.data;
        const $ = cheerio.load(html);
        const metaTags = $('meta').toArray().map(tag => ({
            name: $(tag).attr('name'),
            content: $(tag).attr('content'),
        }));
        console.log(metaTags);
    } catch (error) {
        console.error('Error fetching URL:', error);
        console.log('dsads');
    }
}