import { createBrowserRouter } from 'react-router-dom';

import Dashbord from "../pages/Dashbord";
import Repository from "../pages/Repository";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Dashbord/>
    },
    {
      path: '/repositories/:repository*',
      element: <Repository/>
    }
  ]);

export default router;