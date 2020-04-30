import React from 'react';

import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

export const query = graphql`
    {
        allContentfulCursus {
            edges {
                node {
                    titel
                    kind {
                        file {
                            url
                        }
                    }
                }
            }
        }
    }
`;

const Cursussen = ({ data }) => (
    <Layout>
        <SEO title="Alle cursussen" />
        <div>
            {data.allContentfulCursus.edges.map(({ node }) => {
                return (
                    <div>
                        <h1>{node.titel}</h1>
                        <img
                            src={node.kind.file.url}
                            style={{ maxWidth: '100px' }}
                            alt="img foto"
                        />
                    </div>
                );
            })}
        </div>
    </Layout>
);

export default Cursussen;
