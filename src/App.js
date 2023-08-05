import React from 'react';//备注：讲解过程中需要逐句解释这些 import 语句的作用
import ReactClock from './components/react-clock';
import './App.css';

/**
 * 关键目标：
 * Step1: 直接在 App 组件中编写时钟代码
 * Step2: 把时钟代码抽成一个组件
 * @returns 
 */
function App() { //解释：这里定义了一个名为 App 的组件，这是函数式组件。在 React 中，组件名称一般以大写字母开头，这是 React 的规范。
  return (//解释：JSX 语法，这是一个表达式，表达式的值就是返回值，这里我们返回了组件的 HTML 结构
    <div className="App">
      {/* 备注：为了方便初学者理解，第一步先把时钟逻辑直接编写在这里，然后再拆分成组件。 */}
      <ReactClock></ReactClock>
    </div>
  );
}

export default App;//解释：导出 App 组件，这样其他组件才能使用 App 组件，这里使用了 ES6 的模块化语法，在 ES6 的课程内容中，老师会详细讲解。
