import React from 'react';

import { Container } from './style';

import path from './path.png';

const ExplanationContainer = () => (
    <Container>
        <div>
            <h1>Van bijles naar bij de les</h1>
            <div>
                <h2>Ervaren docenten nemen de tijd voor uw kind</h2>
                <p>
                    Kids Academy biedt bijles in de vorm van intensieve taal- en
                    rekencursussen. In 12 weken leren we leerlingen vaardigheden
                    aan, waar ze de rest van hun leven profijt van hebben en
                    waardoor ze vol zelfvertrouwen en met plezier naar school
                    gaan.{' '}
                </p>
                <p>
                    Wekelijks krijgen zij 2 uur les in rekenen of taal, op één
                    van onze locaties. Beginnend bij de basis wordt alles stap
                    voor stap uitgelegd, totdat iedereen alles begrijpt.
                </p>
            </div>
            <div>
                <h2>Kids Academy staat voor persoonlijke aandacht</h2>
                <p>
                    Per kind bekijken we welke methode het beste werkt en deze
                    kunnen we makkelijk aanpassen (aan de behoefte van elk
                    kind). Bij ons staat het kind centraal en niet de methode.
                    Ook monitoren we per leerling hoeveel huiswerk er gemaakt
                    moet worden voor rekenen of taal. Achterstanden worden
                    weggewerkt en samen halen wij er uit wat erin zit. Na deze
                    cursus is er geen bijles meer nodig.
                </p>
            </div>
            <div>
                <h2>Onbezorgd, vol vertrouwen en met plezier naar school</h2>
                <p>
                    Exclusief voor onze (oud-)leerlingen bieden we een unieke
                    online leeromgeving, met aparte modules voor alle taal- en
                    rekentoetsen. Hier kunnen leerlingen zich met extra uitleg,
                    video’s en oefeningen gericht voorbereiden op alle school-,
                    Cito-, Iep en Route8-toetsen.
                </p>
            </div>
        </div>
        <img src={path} alt="leerjaren grafiek" />
    </Container>
);

export default ExplanationContainer;
