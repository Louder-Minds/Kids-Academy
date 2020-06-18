import React from 'react';

import { Container } from './style';
import Title from '../Typography/Title';
import Paragraph from '../Typography/Paragraph';
import Img from 'gatsby-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const OpeningAbout = ({ heading, content, foto }) => (
    <Container>
        <div className="text">
            <Title type="h2">{heading}</Title>
            <div>{documentToReactComponents(content.json)}</div>
        </div>
        <div className="imgbox">
            <Img fluid={foto.fluid} />
        </div>
    </Container>
);

export default OpeningAbout;
