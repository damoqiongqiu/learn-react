import React, { useEffect, useState } from "react";
import postListMock from "./post-list.mock.json";

//每一个 React 组件的构造函数，默认都有一个 props 参数
function PostList(props) {
    //props 是组件的属性，是只读的，不能修改
    console.log(props);

    const { page, userInfo, roleId } = props;
    console.log(page);
    console.log(userInfo);
    console.log(roleId);

    //state 是组件的状态，是可读可写的
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setPostList(postListMock);
        }, 1000);
    }, []);

    const loadMore = () => {
        console.log("加载更多");
        for (let i = 0; i < 100; i++) {
            postList.push({
                id: 100 + i,
                title: "这是一篇新文章",
                updateTime: new Date().toLocaleString()
            });
        }
        setPostList([...postList]);
    }

    return (
        <>
            {/* ul 是 HTML 里面的无序列表标签 */}
            <ul className="list-group">
                {
                    postList.map(post => (
                        //li 是 HTML 里面的列表项标签
                        <li className="list-group-item" key={post.id}>
                            <div className="d-flex justify-content-between">
                                <span>{post.title}</span>
                                <span>{post.updateTime}</span>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <button className="btn btn-primary" onClick={() => {
                loadMore();
            }}>加载更多</button>
        </>
    );
}

export default PostList;