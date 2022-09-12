import React from 'react';
import ReactDOM from 'react-dom/client';
import 'reset.css';
import 'normalize.css';
import './index.css';
import App from './App';
import GlobalStyle from './styles/global';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>
);
