import React from 'react';

import { Container } from './style';

import Button from '../Button';
import Divider from '../Divider';

import uil from './uiltje.png';

const ReasonsContainer = () => (
    <Container>
        <h1>Summerschool 2020</h1>
        <h5>Mei - Juni - Juli - Augustus</h5>
        <hr />
        <ul>
            <li>
                <img src={uil} alt="uil-logo" />
                Wij helpen uw kind met het wegwerken van achterstanden in taal
                en rekenen
            </li>
            <li>
                <img src={uil} alt="uil-logo" />
                Kinderen presteren direct beter op school
            </li>
            <li>
                <img src={uil} alt="uil-logo" />
                Wij bereiden uw kind grondig voor op school- en Cito-toetsen
            </li>
            <li>
                <img src={uil} alt="uil-logo" />
                Overzichtelijke periode van 12 weken
            </li>
            <li>
                <img src={uil} alt="uil-logo" />
                Schrijf je nu in en start binnen een week
            </li>
        </ul>
        <Button full={false}>Schrijf je direct in</Button>
        <hr style={{marginBottom: '0'}} />
    </Container>
);

export default ReasonsContainer;
