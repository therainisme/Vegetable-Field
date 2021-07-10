import React from "react";

function Article() {
    return (
        <section className="article-clean"
            style={{ fontFamily: "font-family: -apple-system,BlinkMacSystemFont,Noto Sans CJK SC,Arial,Helvetica Neue!important;" }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-xl-12 offset-lg-1 offset-xl-0">
                        <div className="intro">
                            <h1 className="text-center">Array</h1>
                            <p className="text-center"><span className="by">by</span> <a href="#">THERAINISME</a><span className="date">集合引用类型</span></p>
                        </div>
                        <div className="text">
                            <h2>问题描述</h2>
                            <p>Sed lobortis mi. Suspendisse vel placerat ligula. <span style={{ textDecoration: "underline" }}>Vivamus</span> ac sem lac. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
                            <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac lacus. <strong>Ut vehicula rhoncus</strong> elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit <em>pulvinar dict</em> vel in justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
                            <h2>需要使用的方法</h2>
                            <p>Suspendisse vel placerat ligula. Vivamus ac sem lac. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
                            <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Suspendisse vel placerat ligula. Vivamus ac sem lac. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                            <figure className="figure d-block"></figure>
                            <h2>试验场地</h2>
                            <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Suspendisse vel placerat ligula. Vivamus ac sem lac. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                            <h2>期待的结果</h2>
                            <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Suspendisse vel placerat ligula. Vivamus ac sem lac. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                        </div>
                        <textarea style={{ width: "100%", height: 300 }}></textarea>
                        <button className="btn btn-primary" type="button">测试
                        </button>

                        <button className="btn btn-success" type="button" style={{ margin: 10 }}>查看答案</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Article;