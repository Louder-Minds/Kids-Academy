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
                            fluid(quality: 90, maxWidth: 960) {
                                ...GatsbyContentfulFluid
                            }
                        }
                        cursusPoints {
                            json
                        }
                        node_locale
                        alleenInHetEngels
                    }
                }
            }
        }
    `);

    return (
        <Container>
            {data.allContentfulCursus.edges.map(({ node }, j) => {
                if (node.node_locale === intl.locale) {
                    const {
                        titel,
                        cursusPoints,
                        fotoVanDeCursus,
                        alleenInHetEngels,
                    } = node;
                    return (
                        <CursusBlock
                            key={j}
                            name={titel}
                            description={cursusPoints}
                            image={fotoVanDeCursus}
                            english={alleenInHetEngels}
                        />
                    );
                }
            })}
        </Container>
    );
};

export default injectIntl(CursusGrid);
