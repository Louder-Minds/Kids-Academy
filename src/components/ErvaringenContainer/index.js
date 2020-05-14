import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Ervaring from './Ervaring';
import Title from '../Typography/Title';
import Button from '../Button';

import { Container } from './style';

const list = [
    {
        naam: 'Sarah Kapper',
        foto: 'https://source.unsplash.com/200x200',
        review:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut ali quip ex ea commodo consequat',
    },
    {
        naam: 'Bram Knuvers',
        foto: 'https://source.unsplash.com/200x200',
        review:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut ali quip ex ea commodo consequat',
    },
    {
        naam: 'Ruben Nijhuis',
        foto: 'https://source.unsplash.com/200x200',
        review:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut ali quip ex ea commodo consequat',
    },
];

const ErvaringenContainer = () => {

    
    // const shuffle = () => {
    //         for (let i = this.length - 1; i > 0; i--) {
    //             const j = Math.floor(Math.random() * (i + 1));
    //             [this[i], this[j]] = [this[j], this[i]];
    //         }
    //         return this;
    // }

    return (
        <Container id="ervaringen">
            <Title type="h2">Ervaringen van onze leerlingen</Title>
            <Carousel infiniteLoop>
                {list.map(({naam, foto, review}, i) => (
                    <Ervaring naam={naam} foto={foto} review={review}/>
                ))}
            </Carousel>
            <div className="buttons">
                <Button>Schrijf direct in</Button>
                <Button>Kennismakingsgesprek</Button>
            </div>
        </Container>
    );
};

export default ErvaringenContainer;
