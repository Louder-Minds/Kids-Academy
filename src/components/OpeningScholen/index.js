import React from 'react';
import Title from '../Typography/Title';
import Paragraph from '../Typography/Paragraph';
import { Container } from './style';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

import Img from 'gatsby-image';

const index = ({ title, content, foto }) => {
    const options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
            [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
        },
    };

    return (
        <Container>
            <div>
                <Title type="h1">{title}</Title>
                {documentToReactComponents(content.json, options)}
                <div className="buttons">
                    <button>
                        <a href="tel:0207173060">Bel ons voor meer informatie</a>
                    </button>
                    <button>
                        <a href="mailto:info@kidsacademy.nl">Of stuur een e-mail</a>
                    </button>
                </div>
            </div>

            <div className="imgbox">
                <Img fluid={foto.fluid} />
            </div>
        </Container>
    );
};

export default index;
