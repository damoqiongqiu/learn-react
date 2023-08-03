import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostMain from './post/post-main';
import PostList from './post/post-list';
import WritePost from './post/write-post';
import NavBar from './shared/nav-bar';
import ManageMain from './manage/manage-main';
import PostManage from './manage/post-manage';
import { Navigate } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <div className="container-fluid">
        <div className='main-area'>
          <Routes >
            <Route path="/post" element={<PostMain></PostMain>} >
              <Route path="post-list" element={<PostList page={1}></PostList>} />
              <Route path="write" element={<WritePost></WritePost>} />
            </Route>
            <Route path="/manage" element={<ManageMain></ManageMain>} >
              <Route path="post" element={<PostManage></PostManage>} />
            </Route>
            <Route path="*" element={<Navigate to="/post/post-list"></Navigate>} />
          </Routes >
        </div>
      </div>
    </Router>
  );
}

export default App;
