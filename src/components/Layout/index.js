import React from 'react';
import '../../global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import Footer from './Footer';
import { Container } from './style';

const Layout = ({ children }) => (
    <Container>
        <Navigation />
            {children}
        <Footer />
    </Container>
);

export default Layout;
