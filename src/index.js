import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import "./app/shared/i18n";

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
