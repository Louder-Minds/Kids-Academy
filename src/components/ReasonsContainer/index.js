import React from 'react';

import { Container } from './style';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Button from '../Button';
import { FormattedMessage } from 'gatsby-plugin-intl';

import uil from './uiltje.png';

const ReasonsContainer = ({ main, sub, points }) => {
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
            <div>
                <h1>{main}</h1>
                <h5>{sub}</h5>
                <hr />
            </div>
            <div>
                {documentToReactComponents(points.json, options)}
                <Button pagename="inschrijven">
                    <FormattedMessage id="inschrijven_button" />
                </Button>
            </div>
            <hr style={{ marginBottom: '0' }} />
        </Container>
    );
};

export default ReasonsContainer;
