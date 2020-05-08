import React from 'react';

import Layout from '../components/Layout';

import ReasonsContainer from '../components/ReasonsContainer';
import CursusContainer from '../components/CursusContainer';
import VideoContainer from '../components/VideoContainer';
import ExplanationContainer from '../components/ExplanationContainer';
import OpeningHome from '../components/OpeningHome';
import FlexContainer from '../components/FlexContainer';
import Divider from '../components/Divider';
import { graphql } from 'gatsby';

export const query = graphql`
    query {
        contentfulHome {
            kop1
            paragraaf1 {
                json
            }
            kop2
            paragraaf2 {
                json
            }
            video {
                file {
                    url
                }
            }
        }
    }
`;

const index = ({ data }) => {
    const { kop1, paragraaf1, kop2, paragraaf2, video } = data.contentfulHome;

    return (
        <Layout>
            <FlexContainer>
                <OpeningHome />
                <ReasonsContainer />
            </FlexContainer>
            <CursusContainer headline={kop1} content={paragraaf1} />
            <Divider />
            <ExplanationContainer headline={kop2} content={paragraaf2} />
            <Divider />
            <VideoContainer video={video} />
        </Layout>
    );
};

export default index;
