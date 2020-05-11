import React from 'react';
import '../../global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ children }) => (
    <>
        <Navigation />
            {children}
        <Footer />
    </>
);

export default Layout;
