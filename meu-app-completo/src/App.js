  
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes/index';

import GlobalStyles from './styles/global';

const App = () => {
  return (
    <>
      <BrowserRouter>
          <Routes />
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;