import React from 'react';

import { Container } from './style';
import Title from '../Typography/Title';
import Paragraph from '../Typography/Paragraph';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const TeamShowcase = () => {
    const data = useStaticQuery(graphql`
        query people {
            allContentfulMedewerker(filter: { node_locale: { eq: "nl" } }) {
                edges {
                    node {
                        naam
                        foto {
                            fluid {
                                ...GatsbyContentfulFluid_withWebp
                            }
                        }
                        functie
                        overHetPersoon {
                            json
                        }
                    }
                }
            }
        }
    `);
    return (
        <Container>
            <Title type="h2">Het Team</Title>
            <div>
                {data.allContentfulMedewerker.edges.map(({ node }) => {
                    const { naam, foto, functie, overHetPersoon } = node;
                    return (
                        <div>
                            <Img fluid={foto.fluid} />
                            <Title type="h2">{naam}</Title>
                            <span>{functie}</span>
                            <Paragraph>{documentToReactComponents(overHetPersoon.json)}</Paragraph>
                        </div>
                    );
                })}
            </div>
        </Container>
    );
};

export default TeamShowcase;
