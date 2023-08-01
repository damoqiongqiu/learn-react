import React from "react";
import "./index.scss";

function NavBar(props) {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">Brand</a>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <a href="#">首页 <span className="sr-only">(current)</span></a>
                        </li>
                        <li><a href="#">创作</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;