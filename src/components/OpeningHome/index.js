import React from 'react';

import { Container, StyledImg } from './style';
import Button from '../Button';
import { FormattedMessage } from 'gatsby-plugin-intl';
const OpeningHome = ({ titel, foto }) => {
    let t = titel.split(' ');
    return (
        <Container>
            <div>
                <StyledImg fluid={foto.fluid} />
            </div>
            <div className="heading">
                {t.map((item, j) => (
                    <span key={j}>{`${item} `}</span>
                ))}
            </div>
            {/* <div id="twentytwenty">
                <span>20</span>
                <br />
                <span>20</span>
            </div> */}
            <Button pagename="contact">
                <FormattedMessage id="kennismakingsgesprek_button" />
            </Button>
        </Container>
    );
};

export default OpeningHome;
