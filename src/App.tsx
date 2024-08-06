import React from 'react';
import { RouterProvider } from 
'react-router-dom';
import router from './routes';

import GlobalStyles from '../src/styles/global';

const App: React.FC = () => (
  <>
    <RouterProvider router={router}/>
    <GlobalStyles/> 
  </>
);

export default App;
