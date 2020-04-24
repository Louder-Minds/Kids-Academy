import React from 'react';

import Layout from '../components/Layout';

import ReasonsContainer from '../components/ReasonsContainer';
import CursusContainer from '../components/CursusContainer';
import VideoContainer from '../components/VideoContainer';
import ExplanationContainer from '../components/ExplanationContainer';
import OpeningHome from '../components/OpeningHome';
import FlexContainer from '../components/FlexContainer';

const index = () => (
    <Layout padding={false}>
        <FlexContainer>
            <OpeningHome />
            <ReasonsContainer />
        </FlexContainer>
        <CursusContainer />
        <hr
            style={{
                height: '2px',
                backgroundColor: '#37375c',
                width: '80%',
                margin: '0 auto',
            }}
        />
        <ExplanationContainer />
        <VideoContainer />
    </Layout>
);

export default index;
