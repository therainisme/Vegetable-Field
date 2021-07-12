import React, { useEffect, useRef, useState } from "react";
import axios from 'axios';

function NavBar() {
    const [chatperData, setChatperData] = useState<({ title: string, url: string }[])>();
    useEffect(() => {
        axios.get('/chapter-data.json')
            .then((res) => {
                setChatperData(res.data);
            })
    }, []);

    return (
        <nav className="navbar navbar-light navbar-expand-md navigation-clean-button">
            <div className="container"><a className="navbar-brand" href="#">Vegetable Field</a><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="navbar-nav mr-auto">
                        {chatperData?.map(x => {
                            return <NavBarItem
                                key={Object.keys(x)[0]}
                                chapter={Object.keys(x)[0]}
                                articles={Object.values(x)[0] as any}
                            />
                        })}
                    </ul><span className="navbar-text actions"> </span><span className="navbar-text actions"> <a className="login" href="#">Log In</a></span>
                </div>
            </div>
        </nav>
    )
}

function NavBarItem({ chapter, articles }: { chapter: string, articles: { title: string, url: string }[] }) {

    return (
        <li className="nav-item dropdown"
        >
            <a className="dropdown-toggle nav-link"
                aria-expanded="false"
                data-toggle="dropdown"
                href="#">
                {chapter}
            </a>
            <div className="dropdown-menu">
                {articles.map(x => {
                    return <a key={x.title}
                        className="dropdown-item"
                        href={x.url}>
                        {x.title}
                    </a>;
                })}
            </div>
        </li>
    )
}

export default NavBar;