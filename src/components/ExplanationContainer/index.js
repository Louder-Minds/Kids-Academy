import React from 'react';

import { Container } from './style';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Paragraph from '../Typography/Paragraph';

const ExplanationContainer = ({ headline, content1, content2, content3, content4 }) => {
    const data = useStaticQuery(graphql`
        query images {
            file(relativePath: { eq: "path.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
        }
    `);

    const options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
            [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
        },
    };

    return (
        <Container>
            <h1>{headline}</h1>
            <div>
                <div>{documentToReactComponents(content1.json, options)}</div>
                <div>{documentToReactComponents(content2.json, options)}</div>
                <div>{documentToReactComponents(content3.json, options)}</div>
                <div>{documentToReactComponents(content4.json, options)}</div>
            </div>
            <h5 className="heading">Test jezelf</h5>
            <div className="imglinks">
                <Img
                    className="img"
                    fluid={data.file.childImageSharp.fluid}
                    alt="leerjaren grafiek"
                />
                <div className="linkjes">
                    <a
                        href="https://www.onlineexambuilder.com/nl/ben-jij-klaar-voor-groep-6/exam-351394"
                        target="_"
                    >
                        Ben jij klaar voor groep 6?
                    </a>
                    <a
                        href="https://www.onlineexambuilder.com/nl/ben-jij-klaar-voor-groep-7/exam-353470"
                        target="_"
                    >
                        Ben jij klaar voor groep 7?
                    </a>
                    <a
                        href="https://www.onlineexambuilder.com/nl/ben-jij-klaar-voor-de-entreetoets/exam-353245"
                        target="_"
                    >
                        Ben jij klaar voor de Entreetoets?
                    </a>
                    <a
                        href="https://www.onlineexambuilder.com/nl/ben-jij-klaar-voor-groep-8/exam-353442"
                        target="_"
                    >
                        Ben jij klaar voor groep 8?
                    </a>
                </div>
            </div>
        </Container>
    );
};

export default ExplanationContainer;
