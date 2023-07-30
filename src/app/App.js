import React from 'react';
import UserList from './user-list';
import GameDetail from './game-detail';

import './App.scss';

/**
 * JSX 的作用与其它框架中的模板表达式比较类似，掌握以下技术细节：
 * Step1: 引入外部CSS，在HTML标签中使用样式
 * Step2: 获取动态值
 * Step3: 标签模板里面支持函数调用
 * Step4: 标签内部支持基本表达式
 * Step5: JS 代码与 HTML 代码混写
 * Step6: 利用 ref 来直接操作 DOM 元素或者组件实例（真实项目中尽量少用）
 * Step7: 事件写法
 */
function App() {
  return (
    <div className="container-fluid">
      <UserList />
      <GameDetail />
    </div>
  );
}

export default App;
