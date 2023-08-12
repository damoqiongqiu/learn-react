import React from "react";
import "./index.scss";

function NavBar(props) {
    return (
        // nav 是 H5 引入的新标签，专门用来表示导航条
        // navbar 是 Bootstrap 的导航条组件
        // navbar-default 是 Bootstrap 导航条组件的默认样式
        // navbar-fixed-top 是 Bootstrap 导航条组件的固定在顶部的样式
        // container-fluid 是 Bootstrap 的容器组件，表示宽度为 100% 的容器
        // navbar-header 是 Bootstrap 导航条组件的头部样式
        // navbar-brand 是 Bootstrap 导航条组件的品牌样式
        // navbar-toggle 是 Bootstrap 导航条组件的切换按钮样式
        // collapsed 是 Bootstrap 用来支持响应式的样式，在移动端访问时，导航条会自动折叠
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