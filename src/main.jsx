import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import Root from './Pages/Root.jsx';
import LandingPage from './Pages/LandingPage';
import Bookings from './Pages/Bookings';
import AboutUs from './Pages/AboutUs';
import Services from './Pages/Services';

import Admin from './Pages/User/Admin/Admin';
import Profile from './Pages/User/Admin/Profile';
import AuthNavigator from './Pages/User/Admin/AuthNavigator';
import ServicesAdmin from './Components/Admin/ServicesAdmin';
import BookingAdmin from './Components/Admin/BookingAdmin'
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
        element:
          <Services />,
      },
      {
        path: "/login",
        element: <AuthNavigator />

      },
      {
        path: "/Admin",
        element: <Admin />

      },
      {
        path: "/Profile",
        element: <Profile />

      },
      {
        path: "Services-Admin",
        element: <ServicesAdmin />
      },
      {
        path: "Booking-Admin",
        element: <BookingAdmin />
      }
    ]
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
