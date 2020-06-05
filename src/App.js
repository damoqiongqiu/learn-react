import React, { Component } from 'react';
import UserList from './UserList';
import GameDetail from './GameDetail';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './App.css';

/**
 * JSX 的作用与其它框架中的模板表达式比较类似，必须掌握以下技术细节：
 * 1、引入外部CSS，在HTML标签中使用样式
 * 2、获取动态值
 * 3、标签模板里面支持函数调用
 * 4、标签内部支持基本表达式
 * 5、JS代码与HTML代码混写
 * 6、ref（真实项目中很少用）
 * 7、事件写法
 */

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <UserList/>
        <GameDetail/>
      </div>
    );
  }
}

export default App;
