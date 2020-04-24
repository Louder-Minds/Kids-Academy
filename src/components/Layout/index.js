import React from 'react';
import '../../global.css';
import { Container } from './style';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ padding, children }) => (
    <>
        <Navigation />
        <Container padding={padding}>{children}</Container>
        <Footer />
    </>
);

export default Layout;
