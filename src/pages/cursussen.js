import React from 'react';

import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import CursusGrid from '../components/CursusContainer/CursusGrid';
import Title from '../components/Typography/Title';

const Container = styled.div`
    padding: 5%;
`;

const Cursussen = ({ data }) => (
    <Layout>
        <SEO title="Cursussen" />
        <Container>
            <Title type="h2">Al onze curssusen</Title>
            <CursusGrid />
        </Container>
    </Layout>
);

export default Cursussen;
