import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Articles from "./components/articles";
import Jokes from "./components/jokes";
import TopNav from "./components/top-nav";

import './App.scss';

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <TopNav></TopNav>
        <div className="container main-content">
          <Routes >
            <Route path="/articles" element={<Articles></Articles>} />
            <Route path="/jokes" element={<Jokes></Jokes>} />
            <Route path="*" element={<Articles></Articles>} />
          </Routes >
        </div>
      </div>
    </Router >
  );
}

export default App;
