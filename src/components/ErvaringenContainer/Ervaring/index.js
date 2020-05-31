import React from 'react';

import Paragraph from '../../Typography/Paragraph';
import Img from 'gatsby-image';
import { Container } from './style';

const Ervaring = ({ naam, foto, content }) => (
    <Container id="ervaring">
        <div className="ervaring">
            <div className="persoon">
                <span>{naam}</span>
                <Img fluid={foto.fluid} alt="test" />
            </div>
            <Paragraph>{content.content}</Paragraph>
        </div>
    </Container>
);

export default Ervaring;
