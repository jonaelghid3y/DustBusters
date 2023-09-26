import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import '../../App.css'
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
