import React from 'react';
import MyClock from './components/my-clock';
import './App.scss';

/**
 * 本节目标
 * step1: 标签： 总是返回单个根标签
 * step1: 表达式：JSX 写标签属性的时候支持动态值、函数调用、基本的表达式（这个特性跟其它前端模板引擎类似）
 * step1: 样式：HTML 标签的 class 属性需要用 className 代替（写 class 编译器会警告，也能运行）
 * step1: 样式：JSX 在编写内联样式的时候全部使用驼峰语法，编译器会处理成原生的标准样式
 * step1: 事件：JSX 的事件语法与原生 HTML 标准不同，JSX 里面使用 onClick、onChange
 * step1: 扩展了 HTML 属性：JSX 在 HTML 标签上扩展了一些自己特有的属性：key/ref/dangerouslySetInnerHTML
 * @returns 
 */
function App() {
  return (
    // 这里的 className 会被编译成 class
    <div className="App">
      <MyClock />
      {/* JSX 标签中可以进行基本的表达式运算 */}
      <p style=
        {
          {
            color: "#ff3300",
            fontSize: "32px"//内联的 style 需要用驼峰法则命名，这里不是 font-size
          }
        }
      >
        1 + 1={1 + 1}
      </p>
      <button
        className='btn btn-success btn-lg'
        onClick={
          (e) => {
            console.log(e);
            alert(e);
          }
        }
      >确定</button>
    </div >
  );
}

export default App;
