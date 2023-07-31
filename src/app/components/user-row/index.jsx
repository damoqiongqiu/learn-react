import React, { useEffect } from "react";
import eventBus from "../EventBus";

function UserRow(props) {
    return (
        <div style={
            {
                display: "flex"
            }
        }>
            {
                Object.keys(props.userInfo).map((key, index) => {
                    return (
                        <p key={index} style={{
                            display: "inline-block",
                            flex: 1,
                            border: '1px solid #ccc',
                        }}>
                            <span>{props.userInfo[key]}</span>
                        </p>
                    );
                })
            }
            <button
                className="btn btn-primary"
                onClick={() => {
                    console.log("事件发生器>" + props.userInfo.id);
                    eventBus.emit("edit", props.userInfo.id);
                }}
            >编辑</button>
            <button
                className="btn btn-danger"
                onClick={
                    () => {
                        props.removeHandler(props.userInfo.id);
                    }
                }
            >删除</button>
        </div>
    );
}

export default UserRow;