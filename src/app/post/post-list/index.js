import React, { useEffect, useState } from "react";
import axios from "axios";

function PostList(props) {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        // 在组件挂载时发起数据请求
        axios.get('http://localhost:3001/postList') // 替换成你的 API 地址
            .then(response => {
                // 请求成功，设置数据
                setPostList(response.data);
            })
            .catch(error => {
                console.error('Error fetching :', error);
            });
    }, []);

    return (
        <>
            <div className="row">
                {
                    postList.map(post => (
                        <div className="col-md-4" key={post.id}>
                            <div className="thumbnail">
                                <img
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMzIwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMyMCAyMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MjAwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTg5YjEzOWRmYTggdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxNnB0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xODliMTM5ZGZhOCI+PHJlY3Qgd2lkdGg9IjMyMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMTguNDY2NjY3MTc1MjkyOTciIHk9IjEwNy4xMjk5OTk5MjM3MDYwNSI+MzIweDIwMDwvdGV4dD48L2c+PC9nPjwvc3ZnPg=="
                                    data-src="holder.js/100%x200"
                                    alt="100%x200"
                                    style={{ height: '200px', width: '100%', display: 'block' }}
                                    data-holder-rendered="true"
                                />
                                <div className="caption">
                                    <h3>{post.title}</h3>
                                    <p>{post.content}</p>
                                    <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default PostList;