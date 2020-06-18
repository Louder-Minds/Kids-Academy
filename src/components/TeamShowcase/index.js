import React from 'react';

import { Container } from './style';
import Title from '../Typography/Title';
import Paragraph from '../Typography/Paragraph';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

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

    const options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
        },
    };

    return (
        <Container>
            <Title type="h2">Het Team</Title>
            <div>
                {data.allContentfulMedewerker.edges.map(({ node }, j) => {
                    const { naam, foto, functie, overHetPersoon } = node;
                    return (
                        <div key={j}>
                            <Img fluid={foto.fluid} />
                            <Title type="h2">{naam}</Title>
                            <span>{functie}</span>
                            {documentToReactComponents(overHetPersoon.json, options)}
                        </div>
                    );
                })}
            </div>
        </Container>
    );
};

export default TeamShowcase;
