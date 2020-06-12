import React from 'react';

import Layout from '../components/Layout';

import ReasonsContainer from '../components/ReasonsContainer';
import CursusContainer from '../components/CursusContainer';
// import VideoContainer from '../components/VideoContainer';
import ExplanationContainer from '../components/ExplanationContainer';
import OpeningHome from '../components/OpeningHome';
import FlexContainer from '../components/FlexContainer';
import Numberblock from '../components/Numberblock';
import SEO from '../components/SEO';
import { graphql } from 'gatsby';

import { injectIntl } from 'gatsby-plugin-intl';

export const query = graphql`
    query Home {
        allContentfulHome {
            edges {
                node {
                    bannerTitel
                    bannerFoto {
                        fluid(quality: 100, maxWidth: 900) {
                            ...GatsbyContentfulFluid_withWebp
                        }
                    }
                    bulletPoints {
                        json
                    }
                    kop1
                    paragraaf1 {
                        json
                    }
                    kop2
                    paragraaf21 {
                        json
                    }
                    paragraaf22 {
                        json
                    }
                    paragraaf23 {
                        json
                    }
                    paragraaf24 {
                        json
                    }
                    video {
                        file {
                            url
                        }
                    }
                    node_locale
                }
            }
        }
    }
`;

const index = ({ intl, data }) => {
    return data.allContentfulHome.edges.map(({ node }, j) => {
        if (node.node_locale === intl.locale) {
            const {
                bannerTitel,
                bannerFoto,
                bulletPoints,
                kop1,
                paragraaf1,
                kop2,
                paragraaf21,
                paragraaf22,
                paragraaf23,
                paragraaf24,
                video,
            } = node;
            return (
                <Layout key={j}>
                    <SEO />
                    <FlexContainer>
                        <OpeningHome titel={bannerTitel} foto={bannerFoto} />
                        <ReasonsContainer points={bulletPoints} />
                    </FlexContainer>
                    <CursusContainer headline={kop1} content={paragraaf1} />
                    <Numberblock />
                    <ExplanationContainer
                        headline={kop2}
                        content1={paragraaf21}
                        content2={paragraaf22}
                        content3={paragraaf23}
                        content4={paragraaf24}
                    />
                    {/* <Divider />
                    <VideoContainer video={video} /> */}
                </Layout>
            );
        }
    });
};

export default injectIntl(index);
