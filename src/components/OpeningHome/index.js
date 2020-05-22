import React from 'react';

import { Container, StyledImg } from './style';
import Button from '../Button';

const OpeningHome = ({ titel, foto }) => (
    <Container>
        <StyledImg fluid={foto.fluid} />
        <h1>{titel}</h1>
        <Button pagename="contact" text="Kennismakingsgesprek" />
    </Container>
);

export default OpeningHome;
