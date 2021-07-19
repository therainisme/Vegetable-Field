import axios from "axios";
import React, { useEffect, useState, useMemo, useRef } from "react";
import MarkdownUtlis from "../../utlis/markdown-utlis";
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'highlight.js/styles/vs.css';
import './code.css';
import 'codemirror/lib/codemirror.css';

import 'codemirror/theme/neo.css';
import 'codemirror/addon/hint/show-hint.css';

import style from './index.module.scss';

import 'codemirror/addon/hint/show-hint';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/hint/javascript-hint';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/closebrackets';

import { requestUrlToFileUrl } from "../../utlis";

import "ses";
import { WorkerClient } from "../../worker/judgerClient";

function Problem({ location }: any) {
    const [content, setContent] = useState<string>(null!);
    const [title, setTitle] = useState<string>(null!);
    const [author, setAuthor] = useState<string>(null!);
    const [chapter, setChapter] = useState<string>(null!);
    const [testScript, setTestScript] = useState<string>(null!);
    let [templateScript, setTemplateScript] = useState<string>(null!);
    const inputScript = useRef<string>("");

    useEffect(() => {
        const loading = async () => {
            const text = await axios.get(requestUrlToFileUrl(location.pathname));
            const parseRes = MarkdownUtlis.parse(text.data);

            setTitle(parseRes.title);
            setAuthor(parseRes.author);
            setChapter(parseRes.chapter);
            setContent(parseRes.html);
            setTestScript(parseRes.script.test);
            setTemplateScript(parseRes.script.template);
            inputScript.current = parseRes.script.template;
        }

        loading();
    }, [location.pathname]);

    const worker = useMemo(() => new WorkerClient(), []);
    useEffect(() => {
        return () => worker.close()
    }, [worker]);

    const [resultMsg, setResultMsg] = useState<string>("");
    const [testTime, setTestTime] = useState<string>(new Date().toString());
    const [outputs, setOutputs] = useState<string[]>(null!);
    const [running, setRunning] = useState(false);
    const handleOnTest = async () => {
        setRunning(true);
        const timeout = setTimeout(() => {
            worker.reset("Timeout");
        }, 3000);
        setTestTime(new Date().toString());
        setResultMsg("");
        try {
            const response = await worker.request({
                inputScript: inputScript.current,
                judgerScript: testScript
            });
            if (response.result == "error") {
                console.error('judger error', response.error);
                setResultMsg("Error!\n" + response.error);
            } else {
                if (response.result === "success") {
                    setResultMsg("Success!");
                } else {
                    setResultMsg("Wrong!");
                }
            }
            setOutputs(response.consoleOutputs);
        } catch (error) {
            console.error('judger error', error);
            setResultMsg("Error!\n" + error);
        } finally {
            clearTimeout(timeout);
            setRunning(false);
        }
    }

    return (
        <section className={`article-clean ${style.article}`}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-xl-12 offset-lg-1 offset-xl-0">
                        <div className="intro">
                            <h1 className="text-center">{title}</h1>
                            <p className="text-center">
                                <span className="by">by</span>
                                <a href="#">{author}</a>
                                <span className="date">{chapter}</span>
                            </p>
                        </div>
                        <div className="text" dangerouslySetInnerHTML={{ __html: content }}>
                        </div>
                        <div className={style.codeinputCard}>
                            <CodeMirror
                                value={templateScript}
                                className={style.codemirror}
                                options={{
                                    mode: "javascript",
                                    theme: "neo",
                                    lineNumbers: true,
                                    indentUnit: 4,
                                    inputStyle: "contenteditable",
                                    matchBrackets: true,
                                    autoCloseBrackets: true,
                                    extraKeys: {
                                        "Ctrl-Space": "autocomplete"
                                    },
                                }}
                                onChange={(editor, data, value) => {
                                    inputScript.current = value;
                                }}
                            />
                        </div>
                        <button
                            className="btn btn-primary"
                            type="button"
                            disabled={running}
                            onClick={e => { handleOnTest() }}>
                            {running ? <span className="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true"></span> : null}
                            测试
                        </button>

                        <button className="btn btn-success" type="button" data-toggle="modal" data-target="#staticBackdrop" style={{ margin: 20 }}>查看答案</button>

                        {outputs?.length ?
                            <div className="alert alert-info" role="alert">
                                <p><strong>{"[console]"}</strong></p>
                                {outputs.map(msg => <div>{msg}</div>)}
                            </div> : ''
                        }

                        {resultMsg ?
                            <div className={`alert ${resultMsg === "Success!" ? "alert-success" : "alert-danger"}`} role="alert">
                                <p><strong>{testTime}</strong></p>
                                {resultMsg.split('\n').map(msg => <div>{msg}</div>)}
                            </div> : ''
                        }


                        <div className="modal fade" id="staticBackdrop" data-keyboard="false" tabIndex={"-1" as any} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="staticBackdropLabel">参考答案</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        懒到家了哈哈哈哈哈哈，根本不想写答案！
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-success" data-dismiss="modal">好的我明白</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Problem;
