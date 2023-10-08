import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Details from './Pages/Details/Details';
import AllAbout from './Pages/About/AllAbout';
import Register from './Pages/Register/Register';
import AuthProviders from './Providers/AuthProviders';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=> fetch('/social.json'),
      },
      {
        path:"/cards/:id",
        element: <Details></Details>,
        loader:()=>fetch('/social.json'),
      },
      {
        path:"/about",
        element:<AllAbout></AllAbout>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders> 
    <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
