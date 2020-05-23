import React from 'react';
import { Container } from './style';
import CursusBlock from '../CursusBlock';
import { useStaticQuery, graphql } from 'gatsby';

const CursusGrid = () => {
    const data = useStaticQuery(graphql`
        query names {
            allContentfulCursus(filter: { node_locale: { eq: "$locale" } }) {
                edges {
                    node {
                        titel
                        fotoVanDeCursus {
                            fluid(maxWidth: 400, quality: 100) {
                                ...GatsbyContentfulFluid
                            }
                        }
                        cursusPoints {
                            json
                        }
                    }
                }
            }
        }
    `);

    return (
        <Container>
            {data.allContentfulCursus.edges.map(({ node }, j) => {
                const { titel, cursusPoints, fotoVanDeCursus } = node;
                return (
                    <CursusBlock
                        key={j}
                        name={titel}
                        description={cursusPoints}
                        image={fotoVanDeCursus}
                    />
                );
            })}
        </Container>
    );
};

export default CursusGrid;
