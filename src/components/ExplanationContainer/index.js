import React from 'react';

import { Container } from './style';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import path from './path.png';

import Paragraph from '../Typography/Paragraph';

const ExplanationContainer = ({ headline, content }) => {
    const options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => (
                <Paragraph>{children}</Paragraph>
            ),
            [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
        },
    };

    // console.log(content);

    return (
        <Container>
            <div>
                <h1>{headline}</h1>
                <div>{documentToReactComponents(content.json, options)}</div>
            </div>
            <img src={path} alt="leerjaren grafiek" />
        </Container>
    );
};

export default ExplanationContainer;
