import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import Articles from "./components/Articles";
import Jokes from "./components/Jokes";
import TopNav from "./components/top-nav";

import './App.css';

/**
 * 全局容器，同时负责一级路由导航
 */
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <TopNav></TopNav>
          <div className="container main-content">
            <Switch>
              <Route path="/articles" component={Articles} />
              <Route path="/jokes" component={Jokes} />
            </Switch>
          </div>
        </div>
      </Router >
    );
  }
}

export default App;
