import React, { useState, useEffect } from 'react';

function ReactClock() {
    const [time, setTime] = useState(new Date().toLocaleString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleString());
        }, 1000);
        return () => clearInterval(interval);
    });

    return (
        <header className="App-header">
            <h1>React Clock</h1>
            <h2>{time}</h2>
        </header>
    );
}

export default ReactClock;
