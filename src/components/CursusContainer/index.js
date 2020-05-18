import React from 'react';
import { Container } from './style';
import CursusGrid from './CursusGrid';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Paragraph from '../Typography/Paragraph';
import Title from '../Typography/Title';

const CursusContainer = ({ headline, content }) => {
    const options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => (
                <Paragraph>{children}</Paragraph>
            ),
            // [BLOCKS.HEADING_5]: (node, children) => (
            //     <h5>{children}</h5>
            // ),

        },
    };
    
    return (
        <Container>
            <Title type="h2">Onze cursussen</Title>
            <CursusGrid />
            <div className="content">
                <h1>{headline}</h1>
                {documentToReactComponents(content.json, options)}
            </div>
        </Container>
    );
};

export default CursusContainer;
