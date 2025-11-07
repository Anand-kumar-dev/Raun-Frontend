import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Authlayout from '../layout/Authlayout';

import Login from '../pages/Login';
import Signup from '../pages/Signup';
import ProtectedRoutes from './ProtectedRoutes';
import Dashboard from '../pages/Dashboard';
import KiteCallback from '../pages/Callback';

export const router = createBrowserRouter([
  {
    element: <Authlayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/callback", element: <KiteCallback /> },

    ]},
   { element: <ProtectedRoutes />,
    children: [
      { path: "/dashboard", element: <Dashboard /> }
    ]
  }
]);

