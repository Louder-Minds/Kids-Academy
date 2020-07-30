import React from 'react';
import { Container } from './style';
import CursusBlock from '../CursusBlock';
import { useStaticQuery, graphql } from 'gatsby';
import { injectIntl } from 'gatsby-plugin-intl';

const CursusGrid = ({ intl }) => {
    const data = useStaticQuery(graphql`
        query names {
            allContentfulCursus(sort: { fields: positie, order: ASC }) {
                edges {
                    node {
                        titel
                        fotoVanDeCursus {
                            fluid(quality: 90, maxWidth: 300) {
                                ...GatsbyContentfulFluid_withWebp
                            }
                        }
                        cursusPoints {
                            json
                        }
                        contentful_id
                        node_locale
                        alleenInHetEngels
                    }
                    next {
                        titel
                        node_locale
                        contentful_id
                    }
                }
            }
        }
    `);

    const returnBlocks = () => {
        if (intl.locale === 'nl') {
            return data.allContentfulCursus.edges.map(({ node }, j) => {
                let coursename, linkname;
                if (node.node_locale === 'nl') {
                    coursename = node.titel;
                    linkname = node.titel;
                    const { titel, cursusPoints, fotoVanDeCursus, alleenInHetEngels } = node;
                    return (
                        <CursusBlock
                            key={j}
                            name={titel}
                            description={cursusPoints}
                            image={fotoVanDeCursus}
                            english={alleenInHetEngels}
                            to={titel}
                        />
                    );
                }
            });
        } else {
            return data.allContentfulCursus.edges.map(({ node, next }, j) => {
                let name = 'a';
                let link = 'a';
                if (next !== null) {
                    if (node.contentful_id === next.contentful_id) {
                        name = next.titel;
                        link = node.titel;
                        const { titel, cursusPoints, fotoVanDeCursus, alleenInHetEngels } = node;
                        return (
                            <CursusBlock
                                key={j}
                                name={name}
                                to={link}
                                description={cursusPoints}
                                image={fotoVanDeCursus}
                                english={alleenInHetEngels}
                            />
                        );
                    } else {
                        return;
                    }
                }
            });
        }
    };
    return <Container>{returnBlocks()}</Container>;
};

export default injectIntl(CursusGrid);
