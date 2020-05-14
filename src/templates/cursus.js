import React from 'react';

import Layout from '../components/Layout';
import Title from '../components/Typography/Title';
import ErvaringenContainer from '../components/ErvaringenContainer';
import Divider from '../components/Divider';

import OpeningCursus from '../components/OpeningCursus';
import CursusExplanation from '../components/CursusExplanation';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';

export const query = graphql`
    query($slug: String!) {
        contentfulCursus(titel: { eq: $slug }) {
            titel
            voorWieIsDezeCursus {
                json
            }
            tagline
            cursusUitleg {
                json
            }
            fotoVanDeCursus {
                file {
                    url
                }
            }
        }
    }
`;

const Cursus = ({ data }) => {
    const {
        titel,
        voorWieIsDezeCursus,
        tagline,
        cursusUitleg,
        fotoVanDeCursus,
    } = data.contentfulCursus;

    return (
        <Layout>
            <SEO title={`Cursus ${titel}`} />
            <Title type="h1">{titel}</Title>
            <OpeningCursus explanation={voorWieIsDezeCursus} />
            <Divider />
            <CursusExplanation
                tagline={tagline}
                description={cursusUitleg}
                fotoCursus={fotoVanDeCursus}
            />
            {/* <Divider /> */}
            {/* <NumberBanner/> */}
            <Divider />
            <ErvaringenContainer />
        </Layout>
    );
};

export default Cursus;
