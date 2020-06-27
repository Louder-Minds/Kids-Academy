import React from 'react';

import Title from '../Typography/Title';
import { Container } from './style';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { BLOCKS } from '@contentful/rich-text-types';
import Paragraph from '../Typography/Paragraph';

const Solliciteren = ({ content }) => {
    const options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
        },
    };
    return (
        <Container>
            <Title type="h2">
                <FormattedMessage id="wil-je-solliciteren" />
            </Title>
            <div className="text-container" id="solliciteren">
                {documentToReactComponents(content.json, options)}
            </div>
            <button>
                <a href="mailto:info@kidsacademy.nl">
                    <FormattedMessage id="stuur-email" />
                </a>
            </button>
        </Container>
    );
};

export default Solliciteren;
