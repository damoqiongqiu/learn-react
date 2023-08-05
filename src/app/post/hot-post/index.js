import React, { useEffect, useState } from "react";
import usePostList from './use-post-list';

function PostList(props) {
    const { postList, isLoading } = usePostList();

    if (isLoading) {
        return <div>Loading...</div>;
    }

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