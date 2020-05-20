import React from 'react';

import { Container } from './style';
import Button from '../Button';
import speelplaats from './speelplaats.jpeg';

const OpeningHome = () => (
    <Container>
        <img src={speelplaats} />
        <h1>Met zelfvertrouwen en plezier naar school</h1>
        <Button pagename="contact" text="Kennismakingsgesprek" />
    </Container>
);

export default OpeningHome;
