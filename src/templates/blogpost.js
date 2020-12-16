import React from 'react';
import styled from 'styled-components';
import { device } from '../util/screensizes';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

import Image from '../components/Blog/Image';
import Title from '../components/Blog/Title';
import Author from '../components/Blog/Author';
import Content from '../components/Blog/Content';
import SEO from '../components/SEO';

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(naamVanDePost: { eq: $slug }) {
            naamVanDePost
            auteur
            achtergrondFoto {
                fluid(quality: 90, maxWidth: 750) {
                    ...GatsbyContentfulFluid_withWebp
                }
            }
            content {
                json
            }
            upload(formatString: "DD-MM-YY")
        }
    }
`;

const Container = styled.div`
    max-width: 750px;
    margin: auto;

    @media ${device.tablet} {
        padding-top: 5%;
    }
`;

const Post = ({ data }) => {
    const { naamVanDePost, auteur, achtergrondFoto, content, upload } = data.contentfulBlogPost;
    return (
        <Layout showNewsLetter={false}>
            <SEO siteTitle={naamVanDePost} />
            <Container>
                <Image foto={achtergrondFoto} />
                <div style={{ background: 'rgba(0,0,0,0.05)', padding: '5%' }}>
                    <Title>{naamVanDePost}</Title>
                    <Author>{auteur}</Author>
                    <Author>{upload}</Author>
                </div>
                <Content content={content} />
            </Container>
        </Layout>
    );
};

export default Post;
