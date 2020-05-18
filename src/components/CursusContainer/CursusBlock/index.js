import React from 'react';

import { Container } from './style';

import Paragraph from '../../Typography/Paragraph';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Button from '../../Button';
import uil from './uiltje.png';

const CursusBlock = ({ name, description, image }) => {
    const options = {
        renderNode: {
            [BLOCKS.LIST_ITEM]: (node, children) =>(
                <li>
                    <img src={uil} alt='lg'/>
                    {children[0].props.children[0]}
                </li>
            ),
            [BLOCKS.UL_LIST]: (node, children) => (
                <ul>
                    {children}
                </ul>
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
