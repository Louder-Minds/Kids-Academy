import React from 'react';

import { Container } from './style';
import Title from '../Typography/Title';
import Paragraph from '../Typography/Paragraph';

const OpeningAbout = () => (
    <Container>
        <div className="text">
            <Title type="h2">The Kids Academy way</Title>
            <Paragraph>
                In 12 weken kun je alles leren. Rekenen, taal en binnenkort ook
                Chinees, programmeren en andere uitdagingen. Het is onze missie
                om leerlingen in 12 weken, een basis te geven waar ze de rest
                van hun leven profijt van hebben. Leerlingen horen vol
                zelfvertrouwen en met veel plezier naar school te gaan, om te
                laten zien wat zij kunnen. In onze visie is geen kind hetzelfde
                en daarom staat bij ons het kind centraal en niet de methode.
                Deze kunnen wij eenvoudig aanpassen. Met hard werken en er samen
                voor gaan, werken wij achterstanden weg, leren nieuwe dingen aan
                en halen er uit, wat er in zit. Dat is wat wij doen.
            </Paragraph>
        </div>
        <div className="imgbox">
            <img
                className="img"
                src={'https://source.unsplash.com/400x250'}
                alt="test"
            />
        </div>
    </Container>
);

export default OpeningAbout;
