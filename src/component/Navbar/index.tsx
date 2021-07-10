import React from "react";

function NavBar() {
    return (
        <nav className="navbar navbar-light navbar-expand-md navigation-clean-button">
            <div className="container"><a className="navbar-brand" href="#">Vegetable Field</a><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"></li>
                        <li className="nav-item"></li>
                        <li className="nav-item dropdown"><a className="dropdown-toggle nav-link" aria-expanded="false" data-toggle="dropdown" href="#">集合引用类型</a>
                            <div className="dropdown-menu"><a className="dropdown-item" href="#">First Item</a><a className="dropdown-item" href="#">Second Item</a><a className="dropdown-item" href="#">Third Item</a></div>
                        </li>
                    </ul><span className="navbar-text actions"> </span><span className="navbar-text actions"> <a className="login" href="#">Log In</a></span>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;