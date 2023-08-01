import React, { useState, useEffect } from 'react';
import './App.css';

/**
 * 本节目标：上手体验 JSX/useEffect/useState 
 * step1: 在 HTML 标签中获取 time
 * step2: 用 useEffect 实现定时器
 * step3: 修改外观
 * step4: 把时钟逻辑抽离成一个组件
 * 完成以上步骤，就完成了 Quick Start 这个小节的目标。
 * @returns 
 */
function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="App">
      <h1>React Clock</h1>
      <h2>{time.toLocaleString()}.</h2>
    </div>
  );
}

export default App;
