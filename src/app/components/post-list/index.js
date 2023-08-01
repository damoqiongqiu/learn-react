import React, { useEffect, useState } from "react";
import postListMock from "./post-list.mock.json";

function PostList(props) {
    //props 是组件的属性，是只读的，不能修改
    console.log(props);

    //state 是组件的状态，是可读可写的
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setPostList(postListMock);
        }, 1000);
    }, []);

    return (
        <ul className="list-group">
            {
                postList.map(post => (
                    <li className="list-group-item" key={post.id}>
                        <div className="d-flex justify-content-between">
                            <span>{post.title}</span>
                            <span>{post.updateTime}</span>
                        </div>
                    </li>
                ))
            }
        </ul>
    );
}

export default PostList;