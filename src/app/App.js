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
            </div>
            {/* 可以通过 props 给组件传递任意参数，这是一个极其强大的机制 */}
            <PostList page={1}></PostList>
          </div>
          <div className="col-md-3">
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
