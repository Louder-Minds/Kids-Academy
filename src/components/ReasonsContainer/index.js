import React from 'react';

import { Container } from './style';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Button from '../Button';

import uil from './uiltje.png';

const ReasonsContainer = ({ points }) => {
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
            <h1>Summerschool 2020</h1>
            <h5>Mei - Juni - Juli - Augustus</h5>
            <hr />
            <div>{documentToReactComponents(points.json, options)}</div>
            <Button pagename="contact" text="Schrijf je direct in" />
            <hr style={{ marginBottom: '0' }} />
        </Container>
    );
};

export default ReasonsContainer;
