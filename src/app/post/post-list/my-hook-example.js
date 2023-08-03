import React, { useState, useEffect } from 'react';

const MyHookExample = () => {
    const [count, setCount] = useState(0);

    // useEffect 副作用函数
    useEffect(() => {
        // 此处是副作用操作
        console.log('Component mounted');

        // 返回一个清理函数，在组件卸载时执行
        return () => {
            console.log('Component unmounted');
            // 在这里可以进行一些清理操作，比如取消订阅、清除定时器等
        };
    }, []); // 依赖项数组为空，表示只在组件 mount 时执行一次

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default MyHookExample;
