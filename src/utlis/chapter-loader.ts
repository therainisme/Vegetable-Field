import * as fs from 'fs';
import * as path from "path";
import { fileUrlToRequestUrl } from '.';
import MarkdownUtlis from './markdown-utlis';

function run(path: string) {
    const files = loaderMarkdownFiles(path);
    return files.map(x => {
        const text = fs.readFileSync(path + x, 'utf8');
        const parseRes = MarkdownUtlis.parse(text);
        const fileUrl = ('/' + path + x).replace("/public", "");
        const requestUrl = fileUrlToRequestUrl(fileUrl);
        const title = parseRes.title;
        return { title, fileUrl, requestUrl };
    })
}

function loaderMarkdownFiles(dir: string) {
    return fs.readdirSync(dir).filter((self: any) => {
        return !fs.statSync(path.join(dir, self)).isDirectory()
    });
}

const ChapterLoader = {
    run
}

export default ChapterLoader;