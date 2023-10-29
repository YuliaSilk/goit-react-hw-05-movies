import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/goit-react-hw-05-movies'>
    <App />
    <createGlobalStyle/>
    </BrowserRouter>
  </React.StrictMode>
);
