import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Img from 'gatsby-image';
import { device } from '../util/screensizes';
import { layout, colors } from '../util/styling_vars';
import Title from '../components/Typography/Title';
import { graphql } from 'gatsby';

const Block = styled.div`
    width: 100%;
    height: 100%;
    text-decoration: none;

    h2 {
        font-weight: 600;
        font-size: 1em;
        margin-bottom: 1em;
        color: black;
    }

    p {
        color: rgba(0, 0, 0, 0.75);
        font-size: 0.8em;
    }

    div {
        max-width: 100%;
        height: 150px;
        margin-bottom: 1em;
    }
`;

const Container = styled.div`
    padding-top: 5%;
    h3 {
        margin-bottom: 0;
    }
`;

const Grid = styled.div`
    display: grid;
    grid-column-gap: 10px;
    grid-template-columns: 1fr;
    grid-row-gap: 30px;
    justify-items: center;
    margin-bottom: 10%;
    padding: ${layout.padding.height.mobile} ${layout.padding.width.mobile};

    a {
        width: 100%;
        text-decoration: none;
    }

    @media (min-width: 550px) {
        grid-template-columns: 1fr 1fr;
    }

    @media ${device.tablet} {
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 5%;
        grid-row-gap: 30px;
        padding: ${layout.padding.height.tablet} ${layout.padding.width.tablet};
    }

    @media ${device.laptop} {
        grid-row-gap: 120px;
        margin-bottom: 0;
        padding: ${layout.padding.height.laptop} ${layout.padding.width.laptop};
    }

    @media ${device.desktop} {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        padding: ${layout.padding.height.desktop} ${layout.padding.width.desktop};
    }
`;

export const query = graphql`
    query {
        allContentfulBlogPost(filter: { node_locale: { eq: "nl" } }) {
            edges {
                node {
                    naamVanDePost
                    achtergrondFoto {
                        fluid(quality: 90, maxWidth: 750) {
                            ...GatsbyContentfulFluid_withWebp
                        }
                    }
                    korteIntro
                    upload(formatString: "DD-MM-YY")
                }
            }
        }
    }
`;

const Blog = ({ data }) => (
    <Layout>
        <SEO title="Blog" />
        <Container>
            <Title type="h3">Onze blog posts</Title>
            <Grid>
                {data.allContentfulBlogPost.edges.map(({ node }, j) => {
                    const { naamVanDePost, achtergrondFoto, korteIntro } = node;
                    const titel = naamVanDePost.toLowerCase().replace(/\s/g, '-');
                    return (
                        <AniLink cover bg={`${colors.turqouise}`} to={`/nl/blog/${titel}`}>
                            <Block>
                                <Img fluid={achtergrondFoto.fluid} />
                                <h2>{naamVanDePost}</h2>
                                <p>{korteIntro}</p>
                            </Block>
                        </AniLink>
                    );
                })}
            </Grid>
        </Container>
    </Layout>
);

export default Blog;
