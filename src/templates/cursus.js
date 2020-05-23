import React from 'react';

import Layout from '../components/Layout';
import Title from '../components/Typography/Title';
import ErvaringenContainer from '../components/ErvaringenContainer';
import Divider from '../components/Divider';

import OpeningCursus from '../components/OpeningCursus';
import CursusExplanation from '../components/CursusExplanation';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';
import Numberblock from '../components/Numberblock';

export const query = graphql`
    query($slug: String!) {
        contentfulCursus(titel: { eq: $slug }) {
            titel
            cursusPoints2 {
                json
            }
            voorWieIsDezeCursus {
                json
            }
            tagline
            cursusUitleg {
                json
            }
            fotoVanDeCursus {
                fluid(maxWidth: 350, quality: 100) {
                    ...GatsbyContentfulFluid
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
        cursusPoints2,
    } = data.contentfulCursus;

    return (
        <Layout>
            <SEO title={`${titel}`} />
            <Title type="h1">{titel}</Title>
            <OpeningCursus
                explanation={voorWieIsDezeCursus}
                points={cursusPoints2}
            />
            <Divider />
            <CursusExplanation
                tagline={tagline}
                description={cursusUitleg}
                fotoCursus={fotoVanDeCursus}
            />
            <Numberblock />
            <ErvaringenContainer />
        </Layout>
    );
};

export default Cursus;
