
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
const MDIT = new MarkdownIt({
    highlight: function (str: string, lang: string) {
        try {
            return '<pre class="code-block"><code>' +
                hljs.highlight(str, { language: lang }).value +
                '</code></pre>'
        } catch (__) { }
        return '';
    }
});

export interface Content {
    title: string;
    author: string;
    chapter: string;
    html: string;
    script: {
        test: string,
        template: string,
    }
}

function parse(target: string) {
    // todo get title, author, and chapter
    const info = target.split('---')[1];
    const infoArray = info.split('\r\n');
    const infoObject = {} as any;
    const keyArray = ["author", "chapter", "title"];
    infoArray.forEach(x => {
        const keyValue = x.split(':');
        const key = keyValue[0];
        if (keyArray.includes(key)) {
            infoObject[key] = keyValue[1].trim();
        }
    })
    const testString = target.match(/<script(([\s\S])*?)<\/script>/g);
    const testScript = testString![0]
        .replace("<script test>", "")
        .replace("</script>", "")
        .trim();
    const templateScript = testString![1]
        .replace("<script template>", "")
        .replace("</script>", "")
        .trim();
    const html = MDIT.render(target
        .replace(`---${info}---`, "")
        .replace(/<script(([\s\S])*?)<\/script>/g, "")
    );
    infoObject.html = html;
    infoObject.script = {
        test: testScript,
        template: templateScript
    }
    // todo end
    return infoObject as Content;
}

const MarkdownUtlis = {
    parse
}

export default MarkdownUtlis