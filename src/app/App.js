import React from 'react';
import PostList from './components/post-list';
import HotPost from './components/hot-post';
import NavBar from './components/nav-bar';

import './App.scss';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="container-fluid">
        <div className='main-area'>
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
