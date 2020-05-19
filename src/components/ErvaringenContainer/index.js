import React from 'react';

import "./style.scss"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useStaticQuery, graphql } from 'gatsby';
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
    const data = useStaticQuery(graphql`
    query ervaring {
        allContentfulErvaring {
          edges {
            node {
              naamVanDePersoon
              fotoVanDePersoon {
                file {
                  url
                }
              }
              content {
                content
              }
            }
          }
        }
    }
    `);

    
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
            <Carousel infiniteLoop showThumbs={false}>
                {data.allContentfulErvaring.edges.map(({node}, i) => (
                    <Ervaring key={node.naamVanDePersoon} naam={node.naamVanDePersoon} foto={node.fotoVanDePersoon} content={node.content}/>
                ))}
            </Carousel>
            <div className="buttons">
                <Button pagename='/inschrijven' text="Schrijf je direct in"/>
                <Button pagename='/contact' text="Kennismakingsgesprek"/>
            </div>
        </Container>
    );
};

export default ErvaringenContainer;
