import React from 'react';
import Title from '../Typography/Title';
import Paragraph from '../Typography/Paragraph';
import { Container } from './style';

const index = ({ title, content }) => {
    return (
        <>
            <Title type="h1">{title}</Title>
            <Container>
                <Paragraph>
                    Kids Academy verzorgt steunles rekenen en steunles taal op school. Zowel tijdens
                    als na schooltijd helpen wij leerlingen met opfrissen van kennis en wegwerken
                    van achterstanden. Beginnend bij de basis herhalen wij alle lesstof stap voor
                    stap. Vervolgens laten wij kinderen de lesstof toepassen op opdrachten, tot zij
                    er goed mee kunnen werken. Weer "mee kunnen met de klas" geeft rust en
                    zelfvertrouwen aan de leerling en biedt docenten de mogelijkheid verder te
                    kunnen met het curriculum. Heeft u interesse of wenst u meer informatie, dan
                    horen wij graag van u. Referenties op verzoek.
                </Paragraph>
                <div className="buttons">
                    <button>
                        <a href="mailto:info@kidsacademy.nl">Bel ons voor meer informatie</a>
                    </button>
                    <button>
                        <a href="mailto:info@kidsacademy.nl">Of stuur een emil</a>
                    </button>
                </div>
                <div className="imgbox">
                    <img style={{ maxWidth: '100%' }} src={'https://source.unsplash.com/800x600'} />
                </div>
            </Container>
        </>
    );
};

export default index;
