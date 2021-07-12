
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';

export const MDIT = new MarkdownIt({
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
        define: string,
        answer: string
    }
}

export function parse(target: string) {

    const info = target.split('---')[1];
    const infoArray = info.split(/\r?\n/);
    const infoObject = {} as any;
    const keyArray = ["author", "chapter", "title"];
    infoArray.forEach(x => {
        const keyValue = x.split(':');
        const key = keyValue[0];
        if (keyArray.includes(key)) {
            infoObject[key] = keyValue[1].trim();
        }
    })

    const testScript = getScriptByType(target, "test");
    const templateScript = getScriptByType(target, "template");
    const answerScript = getScriptByType(target, "answer");
    const defineScript = getScriptByType(target, "define");

    const html = MDIT.render(target
        .replace(`---${info}---`, "")
        .replace(/<script(([\s\S])*?)<\/script>/g, "")
    );
    infoObject.html = html;
    infoObject.script = {
        test: testScript,
        template: templateScript,
        answer: answerScript,
        define: defineScript
    }

    return infoObject as Content;
}

type ScriptType = "test" | "template" | "answer" | "define";

function getScriptByType(target: string, type: ScriptType) {
    const regExp = new RegExp(`<script ${type}(([\\s\\S])*?)<\/script>`, "g");
    const matchArray = target.match(regExp);
    if (matchArray && matchArray?.length > 0) {
        return matchArray[0]
            .replace(`<script ${type}>`, "")
            .replace("</script>", "")
            .trim();
    }
    return null;
}

export const MarkdownUtlis = {
    parse
}

export default MarkdownUtlis