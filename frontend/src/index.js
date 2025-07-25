import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // You can remove this line if index.css does not exist

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
