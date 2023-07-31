import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>//严格模式只在开发状态有效，会导致所有 useEffect() 执行两次
    <App />
    // </React.StrictMode>
);