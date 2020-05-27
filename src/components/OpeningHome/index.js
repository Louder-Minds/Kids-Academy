import React from 'react';

import { Container, StyledImg } from './style';
import Button from '../Button';
import { FormattedMessage } from 'gatsby-plugin-intl';
const OpeningHome = ({ titel, foto }) => {
    let t = titel.split(' ');
    return (
        <Container>
            <StyledImg fluid={foto.fluid} />
            <div className="heading">
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
