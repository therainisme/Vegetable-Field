import React, { useRef, useState } from "react";

function NavBar() {

    return (
        <nav className="navbar navbar-light navbar-expand-md navigation-clean-button">
            <div className="container"><a className="navbar-brand" href="#">Vegetable Field</a><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="navbar-nav mr-auto">
                        <NavBarItem />
                    </ul><span className="navbar-text actions"> </span><span className="navbar-text actions"> <a className="login" href="#">Log In</a></span>
                </div>
            </div>
        </nav>
    )
}

function NavBarItem() {
    const [show, setShow] = useState(false);
    const listHeaderRef = useRef<HTMLAnchorElement>(null!);

    function handleOnClick() {
        if (listHeaderRef.current === document.activeElement) {
            setShow(!show);
        }
    }

    return (
        <li className={`nav-item dropdown ${show ? "show" : ""}`}
            // onFocus={e => setShow(true)}
            onBlur={e => setShow(false)}
            onClick={e => handleOnClick()}
        >
            <a className="dropdown-toggle nav-link"
                aria-expanded={show}
                data-toggle="dropdown"
                href="#"
                ref={listHeaderRef}>
                集合引用类型
            </a>
            <div className={`dropdown-menu ${show ? "show" : ""}`}>
                <a className="dropdown-item" href="#">First Item</a>
                <a className="dropdown-item" href="#">Second Item</a>
                <a className="dropdown-item" href="#">Third Item</a>
            </div>
        </li>
    )
}

export default NavBar;