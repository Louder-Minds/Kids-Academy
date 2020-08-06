import React from 'react';
import Paragraph from '../Typography/Paragraph';
import { Container } from './style';
import Title from '../Typography/Title';
import uil from './uiltje.png';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

const index = ({ title, content }) => {
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
            <Title type="h2">{title}</Title>
            <div className="content">
                <p>Een korte samenvatting van de subsidieregeling:</p>
                {documentToReactComponents(content.json, options)}
            </div>

            <div className="buttons">
                <button>
                    <a href="tel:0207173060">Bel ons voor meer informatie</a>
                </button>
                <button>
                    <a href="mailto:info@kidsacademy.nl">Of stuur een emil</a>
                </button>
            </div>
        </Container>
    );
};

export default index;
