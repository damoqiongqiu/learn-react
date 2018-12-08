import React from "react";
import { NavLink } from "react-router-dom";

function TopNav(props) {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-6" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">ReactRouter案例</a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-6">
                    <ul className="nav navbar-nav">
                        <li><NavLink to="/articles">文章</NavLink></li>
                        <li><NavLink to="/jokes">段子</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default TopNav;