import React from 'react';

import Title from '../Typography/Title';
import { Container } from './style';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { FormattedMessage } from 'gatsby-plugin-intl';

const Solliciteren = ({ content }) => (
    <Container>
        <Title type="h2">Wil je solliciteren?</Title>
        <div className="text-container" id="solliciteren">
            {documentToReactComponents(content.json)}
        </div>
        <button>
            <a href="mailto:info@kidsacademy.nl">
                <FormattedMessage id="stuur-email" />
            </a>
        </button>
    </Container>
);

export default Solliciteren;
