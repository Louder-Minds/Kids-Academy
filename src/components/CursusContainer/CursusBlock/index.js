import React from 'react';

import { Container } from './style';

import Paragraph from '../../Typography/Paragraph';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

const CursusBlock = ({ name, description, image }) => {
    const options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => (
                <Paragraph>{children}</Paragraph>
            ),
        },
    };

    console.log(description);
    return (
        <Container>
            <h3>{name}</h3>
            {documentToReactComponents(description.json, options)}
            <div>
                <img src={image.file.url} alt="foto van kind"></img>
            </div>
            <div id="flag" />
        </Container>
    );
};

export default CursusBlock;
