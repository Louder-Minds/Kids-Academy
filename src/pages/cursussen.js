import React from 'react';

import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import CursusGrid from '../components/CursusContainer/CursusGrid';
import Title from '../components/Typography/Title';
import { FormattedMessage } from 'gatsby-plugin-intl';

const Container = styled.div`
    padding: 5%;
`;

const Cursussen = ({ data }) => (
    <Layout showNewsLetter={false}>
        <SEO siteTitle="Cursussen" />
        <Container>
            <Title type="h2">
                <FormattedMessage id="onze-cursussen_headline" />
            </Title>
            <CursusGrid />
        </Container>
    </Layout>
);

export default Cursussen;
