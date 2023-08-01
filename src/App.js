import React, { useState, useEffect } from 'react';
import './App.scss';

/**
 * 本节目标：改成 SCSS ，安装配置好 Bootstrap 3.3.7  
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
