import React from 'react';
import Paragraph from '../Typography/Paragraph';
import { Container } from './style';
import Title from '../Typography/Title';
import uil from './uiltje.png';
const index = ({ title }) => {
    return (
        <Container>
            <Title type="h2">{title}</Title>
            <div className="content">
                <p>Een korte samenvatting van de subsidieregeling:</p>
                <ul>
                    <li>
                        {' '}
                        <img src={uil} alt="lg" />
                        Per leerling is er een budget van € 900,- beschikbaar gesteld
                    </li>
                    <li>
                        {' '}
                        <img src={uil} alt="lg" />
                        Subsidie mag besteed worden aan extra activiteiten buiten het lesprogramma
                        om{' '}
                    </li>
                    <li>
                        <img src={uil} alt="lg" />
                        Het aangeboden programma moet minimaal 30 studie-uren vullen
                    </li>
                    <li>
                        <img src={uil} alt="lg" />
                        De subsidie kan aangevraagd worden van 18 augustus tot en met 18 september
                        2021
                    </li>
                    <li>
                        <img src={uil} alt="lg" />
                        Er komt eventueel nog een tijdvak voor de subsidieregeling als er geld over
                        is
                    </li>
                    <li>
                        <img src={uil} alt="lg" />
                        Voor 10% van de leelringen kan een subsidie worden aangevraagd, tenzij de
                        school een hoge achterstandsscore heeft. Als dit het geval is kan er voor
                        20% van de ingeschreven leerlingen een subsidie aanvraag gedaan worden.
                    </li>
                </ul>
            </div>

            <div className="buttons">
                <button>
                    <a href="mailto:info@kidsacademy.nl">Bel ons voor meer informatie</a>
                </button>
                <button>
                    <a href="mailto:info@kidsacademy.nl">Of stuur een e-mail</a>
                </button>
            </div>
        </Container>
    );
};

export default index;
