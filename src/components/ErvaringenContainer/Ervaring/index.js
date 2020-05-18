import React from 'react';

import Paragraph from '../../Typography/Paragraph';

import { Container } from './style';

const Ervaring = ({naam, foto, content}) => (
    <Container id="ervaring">
        <div className="ervaring">
            <div className="persoon">
                <span>{naam}</span>
                <img src={foto.file.url} alt="test" />
            </div>
            <Paragraph>
                {content.content}
            </Paragraph>
        </div>
    </Container>
);

export default Ervaring;
