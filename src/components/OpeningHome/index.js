import React from 'react';

import { Container, StyledImg } from './style';
import Button from '../Button';
import { FormattedMessage } from 'gatsby-plugin-intl';
const OpeningHome = ({ titel, foto }) => {
    let t = titel.split(' ');
    return (
        <Container>
            <StyledImg fluid={foto.fluid} />
            <div>
                {t.map((item) => (
                    <span>{`${item} `}</span>
                ))}
            </div>
            <Button pagename="contact">
                <FormattedMessage id="kennismakingsgesprek_button" />
            </Button>
        </Container>
    );
};

export default OpeningHome;
