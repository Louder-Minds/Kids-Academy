import React from 'react';
import { Container } from './style';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Voorwaarden = ({ content }) => {
    return <Container>{documentToReactComponents(content.json)}</Container>;
};

export default Voorwaarden;
