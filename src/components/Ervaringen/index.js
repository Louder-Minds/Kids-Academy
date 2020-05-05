import React from 'react';

import Title from '../Typography/Title';
import Paragraph from '../Typography/Paragraph';
import RedButton from '../RedButton';

import { Container } from './style';

const Ervaringen = () => (
    <Container id="ervaringen">
        <Title type="h2">Ervaringen</Title>
        <div className="ervaring">
            <div className="persoon">
                <span>naam</span>
                <img src={'https://source.unsplash.com/200x200'} alt="test" />
            </div>
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </Paragraph>
        </div>
        <div>
            <RedButton>Schrijf direct in</RedButton>
            <RedButton>Plan je gratis proefles</RedButton>
        </div>
    </Container>
);

export default Ervaringen;
