import React from 'react';

import Title from '../Typography/Title';
import Paragraph from '../Typography/Paragraph';

import { Container } from './style';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Img from 'gatsby-image';

const CursusExplanation = ({ tagline, description, fotoCursus }) => {
    const options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
        },
    };

    return (
        <Container>
            <div className="content">
                <Title type="h2">{tagline}</Title>
                <div>{documentToReactComponents(description.json, options)}</div>
            </div>
            <div className="imgbox">
                <Img fluid={fotoCursus.fluid} alt={'people'} />
            </div>
        </Container>
    );
};

export default CursusExplanation;
