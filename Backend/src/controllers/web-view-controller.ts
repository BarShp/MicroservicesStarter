import fs from 'fs';
import { promisify } from 'util';

const readFileAsync = promisify(fs.readFile);

export async function getWebView(req: any, res: any, next: any) {
    try {
        const html = await readFileAsync('./index.html');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(html);
    }
    catch (err) {
        res.write(err.toString());
    }
    res.end();
}