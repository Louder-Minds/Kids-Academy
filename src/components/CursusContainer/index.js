import React from 'react';
import { Container } from './style';
import CursusGrid from './CursusGrid';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Paragraph from '../Typography/Paragraph';

const CursusContainer = ({ headline, content }) => {
    const options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => (
                <Paragraph>{children}</Paragraph>
            ),
        },
    };
    
    return (
        <Container>
            <div className="content">
                <h1>{headline}</h1>
                {documentToReactComponents(content.json, options)}
            </div>
            <CursusGrid />
        </Container>
    );
};

export default CursusContainer;
