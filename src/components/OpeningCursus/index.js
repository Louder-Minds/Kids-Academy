import React from 'react';

import { Container } from './style';

import Title from '../Typography/Title';
import Paragraph from '../Typography/Paragraph';
import RedButton from '../RedButton';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const OpeningCursus = ({ explanation, kind }) => {
    const options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => (
                <Paragraph>{children}</Paragraph>
            ),
        },
    };

    console.log(explanation);
    
    return (
        <Container>
            <div className="content">
                <div>
                    <Title type="h2">Voor wie is deze cursus?</Title>
                    {documentToReactComponents(explanation.json, options)}
                </div>
                <div className="imgbox">
                    <img src={kind.file.url} alt={'people'} />
                </div>
            </div>
            <div className="buttons">
                <RedButton>Schrijf direct in</RedButton>
                <RedButton>Plan je gratis proefles</RedButton>
            </div>
        </Container>
    );
};

export default OpeningCursus;
