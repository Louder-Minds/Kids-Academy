import React from 'react';

import './style.scss'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useStaticQuery, graphql } from 'gatsby';
import Ervaring from './Ervaring';
import Title from '../Typography/Title';
import Button from '../Button';

import { Container } from './style';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';

const ErvaringenContainer = () => {
    const data = useStaticQuery(graphql`
        query ervaring {
            allContentfulErvaring(filter: { node_locale: { eq: "nl" } }) {
                edges {
                    node {
                        naamVanDePersoon
                        fotoVanDePersoon {
                            fluid(quality: 90, maxWidth: 200) {
                                ...GatsbyContentfulFluid_withWebp
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

    const shuffle = (a) => {
        let newArray = a;
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };

    const shuffled = shuffle(data.allContentfulErvaring.edges);

    return (
        <Container id="ervaringen">
            <Title type="h2">
                <FormattedMessage id="leerling-ervaring_headline" />
            </Title>
            <Carousel infiniteLoop showThumbs={false}>
                {shuffled.map(({ node }, j) => (
                    <Ervaring
                        key={j}
                        naam={node.naamVanDePersoon}
                        foto={node.fotoVanDePersoon}
                        content={node.content}
                    />
                ))}
            </Carousel>
            <div className="buttons">
                <Button pagename="contact">
                    <FormattedMessage id="kennismakingsgesprek_button" />
                </Button>
            </div>
        </Container>
    );
};

export default injectIntl(ErvaringenContainer);
