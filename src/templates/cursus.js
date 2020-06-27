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

import { injectIntl } from 'gatsby-plugin-intl';

export const query = graphql`
    query($slug: String!) {
        allContentfulCursus(
            filter: { contentful_id: { eq: $slug } }
            sort: { fields: node_locale, order: DESC }
        ) {
            edges {
                node {
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
                        fluid(quality: 90, maxWidth: 500) {
                            ...GatsbyContentfulFluid_withWebp
                        }
                    }
                    node_locale
                }
            }
        }
    }
`;

const Cursus = ({ data, intl }) => {
    return data.allContentfulCursus.edges.map(({ node }, j) => {
        if (node.node_locale === intl.locale) {
            const {
                titel,
                voorWieIsDezeCursus,
                tagline,
                cursusUitleg,
                fotoVanDeCursus,
                cursusPoints2,
            } = node;

            console.log(titel);

            return (
                <Layout>
                    <SEO siteTitle={titel} />
                    <Title type="h1">{titel}</Title>
                    <OpeningCursus explanation={voorWieIsDezeCursus} points={cursusPoints2} />
                    <Divider />
                    <CursusExplanation
                        tagline={tagline}
                        description={cursusUitleg}
                        fotoCursus={fotoVanDeCursus}
                    />
                    <Numberblock />
                    <ErvaringenContainer />{' '}
                </Layout>
            );
        }
    });
};

export default injectIntl(Cursus);
