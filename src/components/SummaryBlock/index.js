import React from 'react';
import Title from '../Typography/Title';
import Paragraph from '../Typography/Paragraph';
import NumberBlock from '../Numberblock';
import { Container } from './style';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import uil from './uiltje.png';

const index = ({ content }) => {
    const options = {
        renderNode: {
            [BLOCKS.LIST_ITEM]: (node, children) => (
                <li>
                    <img src={uil} alt="lg" />
                    {children[0].props.children[0]}
                </li>
            ),
            [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
        },
    };
    return (
        <Container>
            <div className="samengevat">
                <span>Samengevat:</span>
                {documentToReactComponents(content.json, options)}
            </div>
            <NumberBlock className="test" side={false} />
        </Container>
    );
};

export default index;
