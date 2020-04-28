import React from 'react';

import { Container } from './style';
import Title from '../Typography/Title';
import Paragraph from '../Typography/Paragraph';

import bram from './bram.png';
import alissa from './alissa.png';
import sarah from './sarah.png';

const TeamShowcase = () => (
    <Container>
        <Title type="h2">Het Team</Title>
        <div>
            <div>
                <img src={sarah} alt="cursus"></img>
                <Title type="h2">Sarah Kapper</Title>
                <span>FOUNDER & DIRECTEUR</span>
                <Paragraph>
                    Sarah is samen met Alissa de initiatiefnemer van Kids
                    Academy. Zij heeft een master in Scheikunde en geeft al
                    jaren bijles aan leerlingen van zowel de lagere school als
                    het voorgezet onderwijs. ​Binnen Kids Academy is zij
                    verantwoordelijk voor de programma’s.
                </Paragraph>
            </div>
            <div>
                <img src={alissa} alt="cursus"></img>
                <Title type="h2">Alissa Weijerman</Title>
                <span>FOUNDER & DIRECTEUR</span>
                <Paragraph>
                    Alissa is samen met Sarah de initiatiefnemer van Kids
                    Academy. Zij heeft een master in Communicatiewetenschap en
                    is 8 jaar directeur van een huiswerk instituut geweest.
                    Binnen Kids Academy is Alissa verantwoordelijk voor het
                    begeleiden van de docenten.
                </Paragraph>
            </div>
            <div>
                <img src={bram} alt="cursus"></img>
                <Title type="h2">Bram Knuvers</Title>
                <span>FOUNDER & DIRECTEUR</span>
                <Paragraph>
                    Bram heeft zich als adviseur verbonden aan Kids Academy. Hij
                    heeft een master in de Rechtswetenschappen en is al ruim 10
                    jaar directeur van Huiswerkinstituut de Uil. ​Binnen Kids
                    Academy onderhoudt hij contact met scholen, adviseert Sarah
                    en Alissa en coacht ouders en kinderen.
                </Paragraph>
            </div>
        </div>
    </Container>
);

export default TeamShowcase;
