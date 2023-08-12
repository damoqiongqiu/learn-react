import React, { useState, useEffect } from 'react';
import './index.scss';

function MyClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return function cleanup() {
            clearInterval(timer);
        };
    }, []);

    return (
        // React 要求组件的返回值必须是单个根标签，所以这里用一个空标签包裹起来
        // 项目里面有一些 CSS 是和 HTML 标签结构有关系，此时我们包一层空标签 <></>
        <>
            <h1>React Clock</h1>
            <h2>{time.toLocaleString()}.</h2>
        </>
    );
}

export default MyClock;
