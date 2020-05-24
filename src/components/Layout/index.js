import React from 'react';
import '../../global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import Footer from './Footer';
import { Container } from './style';
import { injectIntl } from 'gatsby-plugin-intl';

const Layout = ({ children, intl }) => {
    return (
        <Container>
            <Navigation />
            {children}
            <Footer />
        </Container>
    );
};

export default injectIntl(Layout);
