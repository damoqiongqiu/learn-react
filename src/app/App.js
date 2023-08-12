import React from 'react';
import PostList from './components/post-list';

import './App.scss';

function App() {
  return (
    <div className="container-fluid">
      <div className='App'>

        <div className="row">
          <div className="col-md-9">
            <div className="jumbotron">
              <h1>头条文章</h1>
              <p>这是文章的内容。这是文章的内容。这是文章的内容。这是文章的内容。</p>
            </div>
            {/* 可以通过 props 给组件传递任意参数，这是一个极其强大的机制 */}
            <PostList
              page={1}
              userInfo={{ userName: "大漠穷秋", age: 18 }}
              roleId={10010}
            ></PostList>
          </div>
          <div className="col-md-3">
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
