import React from 'react';
import ReactClock from './components/react-clock';
import './App.css';

/**
 * Step1: 直接在 App 组件中编写时钟代码
 * Step2: 把时钟代码抽成一个组件
 * @returns 
 */
function App() {
  return (
    <div className="App">
      <ReactClock></ReactClock>
    </div>
  );
}

export default App;
