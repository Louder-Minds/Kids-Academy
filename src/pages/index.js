import React from 'react';

import Layout from '../components/Layout';

import ReasonsContainer from '../components/ReasonsContainer';
import CursusContainer from '../components/CursusContainer';
import VideoContainer from '../components/VideoContainer';
import ExplanationContainer from '../components/ExplanationContainer';
import OpeningHome from '../components/OpeningHome';
import FlexContainer from '../components/FlexContainer';
import Divider from '../components/Divider';

const index = () => (
    <Layout padding={false}>
        <FlexContainer>
            <OpeningHome />
            <ReasonsContainer />
        </FlexContainer>
        <CursusContainer />
        <Divider />
        <ExplanationContainer />
        <VideoContainer />
    </Layout>
);

export default index;
