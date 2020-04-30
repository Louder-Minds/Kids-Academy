import React from 'react';

import Title from '../Typography/Title';
import Paragraph from '../Typography/Paragraph';

import { Container } from './style';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const CursusExplanation = ({ tagline, description, fotoCursus }) => {
    const options = {
        renderNode: {
            // prettier-ignore
            [BLOCKS.PARAGRAPH]: (node, children) => (
                <Paragraph>{children}</Paragraph>
            )
        },
    };

    return (
        <Container>
            <div className="content">
                <Title type="h2">{tagline}</Title>
                <div>
                    {documentToReactComponents(description.json, options)}
                </div>
            </div>
            <div className="imgbox">
                <img src={fotoCursus.file.url} alt={'people'} />
            </div>
        </Container>
    );
};

export default CursusExplanation;
