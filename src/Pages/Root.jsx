import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../App.css';
import { Outlet } from 'react-router-dom';
import { AuthProvider} from '../Components/Authcontext';

const Root = () => {

  return (

    <AuthProvider>
      <Header />
      <Outlet />
      <Footer />
    </AuthProvider>

  );
};

export default Root;
