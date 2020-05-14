import React from 'react';

import { Container } from './style';

import Paragraph from '../../Typography/Paragraph';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Button from '../../Button';

const CursusBlock = ({ name, description, image }) => {
    const options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => (
                <Paragraph>{children}</Paragraph>
            ),
        },
    };

    return (
        <Container>
            <h3>{name}</h3>
            <div>
                <img src={image.file.url} alt="foto van kind"></img>
                <div id="flag" />
            </div>
            {documentToReactComponents(description.json, options)}
            <Button>Bekijk de cursus</Button>
        </Container>
    );
};

export default CursusBlock;
