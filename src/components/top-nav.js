import React from "react";
import { NavLink } from "react-router-dom";

function TopNav(props) {
    return (
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-6" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">ReactRouter案例</a>
                </div>

                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6">
                    <ul class="nav navbar-nav">
                        <li><NavLink to="/articles">文章</NavLink></li>
                        <li><NavLink to="/jokes">段子</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default TopNav;