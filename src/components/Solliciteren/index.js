import React from 'react';

import Title from '../Typography/Title';
import Paragraph from '../Typography/Paragraph';
import RedButton from '../RedButton';
import { Container } from './style';

const Solliciteren = () => (
    <Container>
        <Title type="h2">Wil je solliciteren?</Title>
        <div className="text-container">
            <Paragraph>
                Omdat we kwalitatief hoogwaardige cursussen willen bieden aan
                onze leerlingen, stellen we hoge eisen aan onze docenten.
                Daarentegen is het niet nodig om ervaring te hebben met het
                geven van (bij)les, omdat je als nieuwe docent een uitgebreid
                opleidingstraject bij ons volgt.
            </Paragraph>
            <Paragraph>
                Studeer je aan de UVA, VU of andere universiteit en sta je
                bovengemiddeld goed, mail dan je c.v. met cijferlijst en we
                nemen contact met je op. Een referentiecheck en Verklaring
                Omtrent Gedrag maken onderdeel uit van de sollicitatieprocedure.
            </Paragraph>
        </div>
        <RedButton>Stuur direct een email</RedButton>
    </Container>
);

export default Solliciteren;
