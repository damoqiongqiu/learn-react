import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

function NavBar(props) {
    const [activeId, setActiveId] = useState("home");

    const toogleNav = (e) => {
        const target = e.target;
        setActiveId(target.id || target.parentNode.id);
    }

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
                    <NavLink to="/home" className="navbar-brand">Brand</NavLink>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li id="home" className={activeId === "home" ? "active" : ""} onClick={toogleNav}>
                            <NavLink to="/post-list">首页</NavLink>
                        </li>
                        <li id="write" className={activeId === "write" ? "active" : ""} onClick={toogleNav}>
                            <NavLink to="/write">创作</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
}

export default NavBar;