import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostList from './components/post-list';
import WritePost from './components/write-post';
import HotPost from './components/hot-post';
import NavBar from './components/nav-bar';

import './App.scss';

/**
 * 本节目标：
 * step1: 理解客户端路由的概念
 * step2: 安装配置 react-router-dom
 * step3: 使用 react-router-dom 实现路由跳转
 * step4: 使用 react-router-dom 实现路由参数传递
 * 
 * 下一节：
 * step5: 使用 react-router-dom 实现嵌套路由
 * step6: 使用 react-router-dom 实现路由守卫
 * step7: 使用 react-router-dom 实现路由懒加载
 * 
 * @returns 
 */
function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <div className="container-fluid">
        <div className='main-area'>
          <div className="row">
            <div className="col-md-9">
              <Routes >
                <Route path="/post-list" element={<PostList page={1}></PostList>} />
                <Route path="/write" element={<WritePost></WritePost>} />
                <Route path="*" element={<PostList></PostList>} />
              </Routes >
            </div>
            <div className="col-md-3">
              <HotPost></HotPost>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
