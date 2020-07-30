import React from 'react';

import Layout from '../components/Layout';
import Divider from '../components/Divider';
import OpeningAbout from '../components/OpeningAbout';
import AcademyWayExplanation from '../components/AcademyWayExplanation';
import TeamShowcase from '../components/TeamShowcase';
import Solliciteren from '../components/Solliciteren';
import Title from '../components/Typography/Title';
import ErvaringenContainer from '../components/ErvaringenContainer';
import SEO from '../components/SEO';
import { graphql } from 'gatsby';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';

export const query = graphql`
    query About {
        allContentfulOverOns {
            edges {
                node {
                    kop
                    opening {
                        json
                    }
                    openingFoto {
                        fluid {
                            ...GatsbyContentfulFluid_withWebp
                        }
                    }
                    solliciteren {
                        json
                    }
                    node_locale
                }
            }
        }
    }
`;

const index = ({ data, intl }) => {
    let text;
    intl.locale === 'en' ? (text = 'About us') : (text = 'Over ons');

    return data.allContentfulOverOns.edges.map(({ node }, j) => {
        if (node.node_locale === intl.locale) {
            const { kop, opening, openingFoto, solliciteren } = node;

            return (
                <Layout>
                    <SEO siteTitle={text} />
                    <Title type="h1">
                        <FormattedMessage id="over-ons" />
                    </Title>
                    <OpeningAbout heading={kop} content={opening} foto={openingFoto} />
                    <Divider />
                    <AcademyWayExplanation />
                    <Divider />
                    <TeamShowcase />
                    <Divider />
                    <ErvaringenContainer />
                    <Divider />
                    <Solliciteren content={solliciteren} />
                </Layout>
            );
        }
    });
};

export default injectIntl(index);
