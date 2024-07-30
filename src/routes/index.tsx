import React from "react";
import { Routes, Route} from 'react-router-dom';

import Dashbord from "../pages/Dashbord";
import Repository from "../pages/Repository";

const router: React.FC = () => (
        <Routes>
            <Route path="/" element={<Dashbord />} />
            <Route path="/repository" element={<Repository />} />
         </Routes>
);

export default router;