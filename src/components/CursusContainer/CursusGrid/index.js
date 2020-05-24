import React from 'react';
import { Container } from './style';
import CursusBlock from '../CursusBlock';
import { useStaticQuery, graphql } from 'gatsby';
import { injectIntl, Link, FormattedMessage } from 'gatsby-plugin-intl';

const CursusGrid = ({ intl }) => {
    const data = useStaticQuery(graphql`
        query names {
            allContentfulCursus {
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
                        node_locale
                    }
                }
            }
        }
    `);

    return (
        <Container>
            {data.allContentfulCursus.edges.map(({ node }, j) => {
                if (node.node_locale === intl.locale) {
                    const { titel, cursusPoints, fotoVanDeCursus } = node;
                    return (
                        <CursusBlock
                            key={j}
                            name={titel}
                            description={cursusPoints}
                            image={fotoVanDeCursus}
                        />
                    );
                }
            })}
        </Container>
    );
};

export default injectIntl(CursusGrid);
