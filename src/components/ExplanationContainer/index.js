import React from 'react';

import { Container } from './style';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import path from './path.png';

import Paragraph from '../Typography/Paragraph';

const ExplanationContainer = ({
    headline,
    content1,
    content2,
    content3,
    content4,
}) => {
    const options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => (
                <Paragraph>{children}</Paragraph>
            ),
            [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
        },
    };

    return (
        <Container>
            <h1>{headline}</h1>
            <div>
                <div>{documentToReactComponents(content1.json, options)}</div>
                <div>{documentToReactComponents(content2.json, options)}</div>
                <div>{documentToReactComponents(content3.json, options)}</div>
                <div>{documentToReactComponents(content4.json, options)}</div>
            </div>
            <img src={path} alt="leerjaren grafiek" />
        </Container>
    );
};

export default ExplanationContainer;
