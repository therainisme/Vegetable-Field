import React from "react";
import { NavLink } from "react-router-dom";

import "./index.scss";

function Hello() {
    return (
        <>
            <section className="highlight-clean">
                <div className="container">
                    <div className="intro">
                        <h2 className="text-center">Vegetable Field</h2>
                        <div style={{ width: "100%", textAlign: "center" }}>
                            <img src="https://notebook.therainisme.com/logo.png" />
                        </div>
                        <p className="text-center" style={{marginTop: "2em"}}>如其名，就是一个菜地<br />点击上方的导航栏开始选择你想种的菜</p>
                    </div>
                    <div className="buttons">
                        <NavLink className="btn btn-primary" role="button" to={{ pathname: "/problem/magic/1" }}>
                            start
                        </NavLink>

                        <a href="https://github.com/Therainisme/Vegetable-Field"><button className="btn btn-light" type="button">
                            github
                        </button></a>
                    </div>
                </div>
            </section>
            <section className="features-clean">
                <section className="features-clean">
                    <div className="container">
                        <div className="dropdown-divider" style={{ marginBottom: "2em" }}></div>

                        <div className="intro">
                            <p className="text-center">这是一个我自己用来学习JavaScript的地方，突发奇想，花了一两天时间搭成这个样子。不得不说，Android实验真的很搞人心态！</p>
                        </div>
                        <div className="row features">
                            <div className="col-sm-6 col-lg-4 item">
                                <h3 className="name">随时随地种菜</h3>
                                <p className="description">因为这是一个网页，只要有浏览器的地方就能在这篇菜地上种菜。</p>
                            </div>
                            <div className="col-sm-6 col-lg-4 item">
                                <h3 className="name">几乎零延迟的测评</h3>
                                <p className="description">因为是跑在自己浏览器上的哈哈哈哈哈哈，所以根本不会和服务器交互。跨站脚本攻击什么的，不存在。</p>
                            </div>
                            <div className="col-sm-6 col-lg-4 item">
                                <h3 className="name">暴力美学</h3>
                                <p className="description">内容均解析自Markdown，反正是一种非常暴力的方式，因为我还没学正则表达式！</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Hello;