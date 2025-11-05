import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Authlayout from '../layout/Authlayout';

import Login from '../pages/Login';
import Signup from '../pages/Signup';

export const router = createBrowserRouter([
    {
      path:"/",
      element:<Authlayout/>,
      children:[
        { path:"", element: <Login />},
        { path:"/signup", element: <Signup />}
        ]
    }
]);

