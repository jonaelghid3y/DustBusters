import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Root from './Pages/Root.jsx';
import LandingPage from './Pages/LandingPage';
import Bookings from './Pages/Bookings';
import AboutUs from './Pages/AboutUs';
import Services from './Pages/Services';
import ServicesAdmin from './Admin/ServicesAdmin';
import Login from './Pages/Login';
import Admin from './Pages/Admin';
import Profile from './Pages/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/Bookings",
        element: <Bookings />,
      },
      {
        path: "/Aboutus",
        element: <AboutUs />,
      },
      {
        path: "/Services",
        element: (
          <>
            <Services />,
            {/* < ServicesAdmin />, */}
          </>
        ),
      },
      {
        path: "/login",
        element: <Login />

      },
      {
        path: "/Admin",
        element: <Admin />

      },
      {
        path: "/Profile",
        element: <Profile />

      }





    ]
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
