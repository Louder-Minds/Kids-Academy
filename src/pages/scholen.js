import React from 'react';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import OpeningScholen from '../components/OpeningScholen';
import { injectIntl } from 'gatsby-plugin-intl';
import SummaryBlock from '../components/SummaryBlock';
import ScholenExplanation from '../components/ScholenExplanation';

export const query = graphql`
    query Scholen {
        allContentfulScholen {
            edges {
                node {
                    kop1
                    paragraaf1 {
                        json
                    }

                    foto1 {
                        fluid(quality: 75, maxWidth: 650) {
                            ...GatsbyContentfulFluid_withWebp
                        }
                    }

                    samengevat {
                        json
                    }
                    kop2
                    paragraaf2 {
                        json
                    }
                    node_locale
                }
            }
        }
    }
`;

const Scholen = ({ data, intl }) => {
    return data.allContentfulScholen.edges.map(({ node }, j) => {
        if (node.node_locale === intl.locale) {
            const { kop1, paragraaf1, foto1, samengevat, kop2, paragraaf2 } = node;
            console.log(node);
            return (
                <Layout>
                    <SEO siteTitle="Voor scholen" />
                    <OpeningScholen title={kop1} content={paragraaf1} foto={foto1} />
                    <SummaryBlock content={samengevat} />
                    <ScholenExplanation title={kop2} content={paragraaf2} />
                </Layout>
            );
        }
    });
};

export default injectIntl(Scholen);
