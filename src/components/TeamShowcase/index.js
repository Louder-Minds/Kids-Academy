import React from 'react';

import { Container } from './style';
import Title from '../Typography/Title';
import Paragraph from '../Typography/Paragraph';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl';

const TeamShowcase = ({ intl }) => {
    const data = useStaticQuery(graphql`
        query people {
            allContentfulMedewerker {
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
                        node_locale
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
            <Title type="h2">
                <FormattedMessage id="het-team" />
            </Title>
            <div>
                {data.allContentfulMedewerker.edges.map(({ node }, j) => {
                    if (node.node_locale === intl.locale) {
                        const { naam, foto, functie, overHetPersoon } = node;
                        return (
                            <div key={j}>
                                <Img fluid={foto.fluid} />
                                <Title type="h2">{naam}</Title>
                                <span>{functie}</span>
                                {documentToReactComponents(overHetPersoon.json, options)}
                            </div>
                        );
                    }
                })}
            </div>
        </Container>
    );
};

export default injectIntl(TeamShowcase);
