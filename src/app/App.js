import React from 'react';
import PostList from './components/post-list';
import HotPost from './components/hot-post';
import NavBar from './components/nav-bar';

import './App.scss';

function App() {
  //目前这里没有业务逻辑
  return (
    <>
      <NavBar></NavBar>
      <div className="container-fluid">
        <div className='main-area'>
          {/* row-column 这个行列布局工具样式，是 Bootstrap 里面使用频率最高的工具样式 */}
          <div className="row">
            <div className="col-md-9">
              <PostList page={1}></PostList>
            </div>
            <div className="col-md-3">
              <HotPost></HotPost>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
