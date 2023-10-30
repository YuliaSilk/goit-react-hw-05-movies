import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'components/GlobalStyles';

const theme = {
  colors: {
    main: 'red',
  },
  spacing: value => `${value*4}px`,
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/goit-react-hw-05-movies'>
      <ThemeProvider theme={theme}>
    <App />
    <GlobalStyles/>
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
