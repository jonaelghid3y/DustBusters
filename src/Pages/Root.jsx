import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../App.css'
import { Outlet, useLocation } from 'react-router-dom'; 





const Root = () => {
   
    return (
        <>
       
            <Header   />
            <Outlet   />
            <Footer />
      
       
        </>
    );
};

export default Root;
