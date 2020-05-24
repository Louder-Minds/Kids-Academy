import React from 'react';

import { Container, StyledImg } from './style';
import Button from '../Button';
import { FormattedMessage } from 'gatsby-plugin-intl';
const OpeningHome = ({ titel, foto }) => (
    <Container>
        <StyledImg fluid={foto.fluid} />
        <h1>{titel}</h1>
        <Button pagename="contact">
            <FormattedMessage id="kennismakingsgesprek_button" />
        </Button>
    </Container>
);

export default OpeningHome;
