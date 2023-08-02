import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostList from './components/post-list';
import HotPost from './components/hot-post';
import NavBar from './components/nav-bar';

import './App.scss';

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
                <Route path="/write" element={<PostList></PostList>} />
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
