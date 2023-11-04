import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'components/GlobalStyles';

const theme = {
  colors: {
    main: '#021005',
    header: '#153834',
    backgraund: '#75bcbd',
    active:'#820b0b',
    text:'#232323',
    input:'#edb234',
    acent:'#e8fefe',
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
