import React from "react";
import { NavLink } from "react-router-dom";

function ManageMenu(props) {
    return (
        <ul className="list-group">
            <li className="list-group-item active">
                管理后台
            </li>
            <li className="list-group-item">
                <NavLink to="/manage/post/">内容管理</NavLink>
            </li>
            {/* 请学员实现以下路由对应的组件 */}
            <li className="list-group-item">
                <NavLink to="/manage/category/">分类管理</NavLink>
            </li>
            <li className="list-group-item">
                <NavLink to="/manage/tag/">标签管理</NavLink>
            </li>
            <li className="list-group-item">
                <NavLink to="/manage/comment/">评论管理</NavLink>
            </li>
        </ul>
    );
}

export default ManageMenu;