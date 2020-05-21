import React from 'react';

import { Container } from './style';

import Title from '../Typography/Title';
import Paragraph from '../Typography/Paragraph';
import Button from '../Button';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import uil from './uiltje.png';

const OpeningCursus = ({ explanation, points }) => {
    const options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => (
                <Paragraph>{children}</Paragraph>
            ),

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
            <div className="content">
                <div>
                    <Title type="h2">Voor wie is deze cursus?</Title>
                    {documentToReactComponents(explanation.json, options)}
                </div>
                <div>
                    <h3>Voordelen van deze cursus</h3>
                    <hr />
                    {documentToReactComponents(points.json, options)}
                </div>
            </div>
            <div className="buttons">
                <Button pagename="inschrijven" text="Schrijf direct in" />
                <Button pagename="contact" text="Kennismakingsgesprek" />
            </div>
        </Container>
    );
};

export default OpeningCursus;
