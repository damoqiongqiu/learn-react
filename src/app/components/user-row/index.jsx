import React from "react";
import { useDispatch } from 'react-redux'
import { deleteUser } from '../userSlice';

function UserRow(props) {
    const dispatch = useDispatch();
    const removeHandler = (id) => {
        dispatch(deleteUser(id));
    }

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
                    () => {
                        removeHandler(props.userInfo.id);
                    }
                }
            >删除</button>
        </div>
    );
}

export default UserRow;