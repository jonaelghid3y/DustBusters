import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Root from './Components/Pages/Root.jsx';
import LandingPage from './Components/Pages/LandingPage';
import Bookings from './Components/Pages/Bookings';
import AboutUs from './Components/Pages/AboutUs';
import Services from './Components/Pages/Services';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      {
        path: "/",
        element: <LandingPage/>,
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
        element: <Services />,
      },

    ]
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
