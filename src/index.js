import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <BrowserRouter> */}
        <BrowserRouter basename="/react-router-6">
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
