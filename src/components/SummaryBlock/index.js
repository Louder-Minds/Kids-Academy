import React from 'react';
import Title from '../Typography/Title';
import Paragraph from '../Typography/Paragraph';
import NumberBlock from '../Numberblock';
import { Container } from './style';

import uil from './uiltje.png';

const index = () => {
    return (
        <Container>
            <div className="samengevat">
                <span>Samengevat:</span>
                <ul>
                    <li>
                        <img src={uil} alt="lg" />
                        Steunlessen tijdens en na schooltijd mogelijk
                    </li>
                    <li>
                        <img src={uil} alt="lg" />
                        Steunlessen op school of op één van onze vestigingen.
                    </li>
                    <li>
                        <img src={uil} alt="lg" />
                        Opfrissen van kennis en wegwerken van alle achterstanden
                    </li>
                    <li>
                        <img src={uil} alt="lg" />
                        Blijvend betere resultaten en een vrolijker kind
                    </li>
                    <li>
                        <img src={uil} alt="lg" />
                        Rustigere klassen en meer tijd van de docent voor alle leerlingen
                    </li>
                    <li>
                        <img src={uil} alt="lg" />
                        Tevreden ouders en ontspannen docenten
                    </li>
                </ul>
            </div>
            <NumberBlock />
        </Container>
    );
};

export default index;
