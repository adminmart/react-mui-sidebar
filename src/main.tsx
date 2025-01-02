import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root') as HTMLElement;  // Type assertion to HTMLElement

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
);
