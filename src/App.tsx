import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../src/routes';

import GlobalStyles from '../src/styles/global';
const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyles/> 
  </>
);

export default App;
