import React, { useEffect, useState } from "react";
import hotPostMock from "./hot-post.mock.json";

function PostList(props) {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        setPostList(hotPostMock);
    }, []);

    return (
        <ul className="list-group">
            <li className="list-group-item active">
                热门内容
            </li>
            {
                postList.map((post, index) => (
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