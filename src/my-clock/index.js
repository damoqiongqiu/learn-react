import React, { useState, useEffect } from 'react';

function MyClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return function cleanup() {
            clearInterval(timer);
        };
    }, []);

    return (
        <>
            <h1>React Clock</h1>
            <h2>{time.toLocaleString()}.</h2>
        </>
    );
}

export default MyClock;
