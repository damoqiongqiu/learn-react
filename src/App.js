import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './App.css';

/**
 * 纯函数无状态组件
 * @param {*} props 
 */
function MyButton(props) {
  return (
    <button className="btn btn-danger">我的按钮</button>
  );
}

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="panel panel-primary">
          <div className="panel-heading">面板标题</div>
          <div className="panel-body">
            <MyButton></MyButton>
          </div>
          <div className="panel-footer"></div>
        </div>
      </div>
    );
  }
}

export default App;
