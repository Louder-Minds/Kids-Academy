import React from 'react';

import { Container } from './style';

import Title from '../Typography/Title';
import Paragraph from '../Typography/Paragraph';
import Button from '../Button';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import uil from './uiltje.png';

const OpeningCursus = ({ explanation }) => {
    const options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => (
                <Paragraph>{children}</Paragraph>
            ),
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
                    <ul>
                        <li>
                            <img src={uil} alt="uil-logo" />
                            De beste voorbereiding op de Cito-toets
                        </li>
                        <li>
                            <img src={uil} alt="uil-logo" />
                            Behandelen van alle onderdelen van de Cito-toets
                        </li>
                        <li>
                            <img src={uil} alt="uil-logo" />
                            Aandacht voor achterstanden
                        </li>
                        <li>
                            <img src={uil} alt="uil-logo" />
                            Drie uur durende training
                        </li>
                    </ul>
                </div>
            </div>
            <div className="buttons">
                <Button>Schrijf direct in</Button>
                <Button>Kennismakingsgesprek</Button>
            </div>
        </Container>
    );
};

export default OpeningCursus;
