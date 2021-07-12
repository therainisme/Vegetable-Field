import * as fs from 'fs';
import * as path from "path";
import ChapterLoader from '../src/utlis/chapter-loader';

const chapterData = [
    { "黑魔法": ChapterLoader.run('public/magic/') }
]

fs.writeFileSync('public/chapter-data.json', JSON.stringify(chapterData));
