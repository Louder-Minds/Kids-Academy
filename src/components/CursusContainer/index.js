import React from 'react';
import { Container } from './style';
import CursusGrid from './CursusGrid';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Paragraph from '../Typography/Paragraph';
import Title from '../Typography/Title';
import { injectIntl, Link, FormattedMessage } from 'gatsby-plugin-intl';

const CursusContainer = ({ headline, content }) => {
    const options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => (
                <Paragraph>{children}</Paragraph>
            ),
        },
    };

    return (
        <Container>
            <Title type="h2">
                {' '}
                <FormattedMessage id="onze-cursussen_headline" />
            </Title>
            <CursusGrid />
            <div className="content">
                <h1>{headline}</h1>
                {documentToReactComponents(content.json, options)}
            </div>
        </Container>
    );
};

export default CursusContainer;
