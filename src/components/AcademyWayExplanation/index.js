import React from 'react';

import Title from '../Typography/Title';

import { Container, Grid } from './style';

const AcademyWayExplanation = () => (
    <Container>
        <Title type="h2">Waarom The Kids Academy way?</Title>
        <Grid>
            <div>
                <img
                    src={'https://source.unsplash.com/30x30'}
                    alt="cursus"
                ></img>
                <p>Het kind staat centraal en niet de methode</p>
            </div>
            <div>
                <img
                    src={'https://source.unsplash.com/30x30'}
                    alt="cursus"
                ></img>
                <p>Meer dan 10 jaar ervaring</p>
            </div>
            <div>
                <img
                    src={'https://source.unsplash.com/30x30'}
                    alt="cursus"
                ></img>
                <p>Direct betere resultaten</p>
            </div>
            <div>
                <img
                    src={'https://source.unsplash.com/30x30'}
                    alt="cursus"
                ></img>
                <p>Haal er uit wat er in zit</p>
            </div>
            <div>
                <img
                    src={'https://source.unsplash.com/30x30'}
                    alt="cursus"
                ></img>
                <p>Aandacht voor School - en Citotoetsen</p>
            </div>
            <div>
                <img
                    src={'https://source.unsplash.com/30x30'}
                    alt="cursus"
                ></img>
                <p>Kleine klassen (max 5 leerlingen)</p>
            </div>
            <div>
                <img
                    src={'https://source.unsplash.com/30x30'}
                    alt="cursus"
                ></img>
                <p>Contact met scholen</p>
            </div>
            <div>
                <img
                    src={'https://source.unsplash.com/30x30'}
                    alt="cursus"
                ></img>
                <p>Academisch geschoolde docenten</p>
            </div>
        </Grid>
    </Container>
);

export default AcademyWayExplanation;
