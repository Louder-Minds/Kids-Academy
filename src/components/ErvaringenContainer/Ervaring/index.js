import React from 'react';

import Paragraph from '../../Typography/Paragraph';

import { Container } from './style';

const Ervaring = ({naam, foto, review}) => (
    <Container id="ervaring">
        <div className="ervaring">
            <div className="persoon">
                <span>{naam}</span>
                <img src={foto} alt="test" />
            </div>
            <Paragraph>
                {review}
            </Paragraph>
        </div>
    </Container>
);

export default Ervaring;
