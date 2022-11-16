import React from 'react';
import Header from '../sections/Header/Header';
import { Outlet } from "react-router-dom";
import Footer from '../pages/Footer/Footer';

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;