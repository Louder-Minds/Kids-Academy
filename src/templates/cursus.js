import React from 'react';

import Layout from '../components/Layout';
import RedButton from '../components/RedButton';

const index = ({ name, explanation, tagline, description }) => (
    <Layout>
        <h1>{name}</h1>
        <h2>Voor wie is deze cursus?</h2>
        <p>{explanation}</p>
        <img src={'https://source.unsplash.com/400x400'} alt={'people'} />
        <RedButton>Schrijf direct in</RedButton>
        <RedButton>Plan je gratis proefles</RedButton>
        <hr />
        <h2>{tagline}</h2>
        <div>{description}</div>
        <hr />
        {/* <NumberBanner/> */}
        <hr />
        <h2>Ervaringen</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
        </p>
    </Layout>
);

export default index;
