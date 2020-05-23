import React from 'react';

import Title from '../Typography/Title';
import Paragraph from '../Typography/Paragraph';
import Button from '../Button';
import { Container } from './style';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Solliciteren = ({ content }) => (
    <Container>
        <Title type="h2">Wil je solliciteren?</Title>
        <div className="text-container" id="solliciteren">
            {documentToReactComponents(content.json)}
        </div>
        <Button
            pagename="mailto:info@kidsacademy.nl"
            text="Stuur direct een email"
        />
    </Container>
);

export default Solliciteren;
