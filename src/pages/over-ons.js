import React from 'react';

import Layout from '../components/Layout';
import Divider from '../components/Divider';
import OpeningAbout from '../components/OpeningAbout';
import AcademyWayExplanation from '../components/AcademyWayExplanation';
import TeamShowcase from '../components/TeamShowcase';
import Solliciteren from '../components/Solliciteren';
import Title from '../components/Typography/Title';
import Ervaringen from '../components/Ervaringen';

const index = () => (
    <Layout padding={true}>
        <Title type="h1">Over ons</Title>
        <OpeningAbout />
        <Divider />
        <AcademyWayExplanation />
        <Divider />
        <TeamShowcase />
        <Divider />
        <Ervaringen />
        <Divider />
        <Solliciteren />
    </Layout>
);

export default index;
