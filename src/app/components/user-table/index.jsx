import React, { useState, useEffect } from "react";
import UserDetail from "../user-row";
import eventBus from "../EventBus";
import LoggerWrapper from "../logger-warpper";
import userListMock from "./user-list.mock.json";

/**
 * Step1: 利用 props 在父子组件之间传递参数（包括基本类型的数据，已经复杂的对象类型）
 * Step2: 利用 props 在父子组件之间传递事件处理函数
 * 
 * @param {*} props 
 * @returns 
 */
function UserTable(props) {
    const [userList, setUserList] = useState(userListMock);

    const removeHandler = (id) => {
        setUserList(userList.filter(user => user.id !== id));
    }

    useEffect(() => {
        console.log("添加事件监听器>");
        eventBus.on("edit", (event) => {
            console.log(event);
        });
    }, []);

    return (
        <div className="container-fluid">
            <div className="panel panel-primary">
                <div className="panel-heading">UserTable 组件</div>
                <div className="panel-body">
                    <ul className="list-group">
                        {
                            userList.map((user, index) => {
                                return (
                                    <li
                                        key={index}
                                        className="list-group-item"
                                    >
                                        <UserDetail
                                            removeHandler={removeHandler}
                                            userInfo={user}
                                        >
                                        </UserDetail>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
                <div className="panel-footer"></div>
            </div>
        </div>
    );
}

export default LoggerWrapper(UserTable);