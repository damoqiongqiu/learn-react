import React, { useContext } from "react";

function UserRow(props) {
    console.log(props);
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
                className="btn btn-danger"
                onClick={
                    props.removeHandler(props.userInfo.id)
                }
            >删除</button>
        </div>
    );
}

export default UserRow;