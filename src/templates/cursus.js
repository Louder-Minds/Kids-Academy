import React from 'react';

import Layout from '../components/Layout';
import Title from '../components/Typography/Title';
import Ervaringen from '../components/Ervaringen';
import Divider from '../components/Divider';

import OpeningCursus from '../components/OpeningCursus';
import CursusExplanation from '../components/CursusExplanation';
import { graphql } from 'gatsby';

export const query = graphql`
    query($slug: String!) {
        contentfulCursus(titel: { eq: $slug }) {
            titel
            voorWieIsDezeCursus {
                json
            }
            kind {
                file {
                    url
                }
            }
            tagline
            cursusUitleg {
                json
            }
            fotoVanDeCursus {
                file {
                    url
                }
            }
        }
    }
`;

const index = ({ data }) => {
    const {
        titel,
        voorWieIsDezeCursus,
        kind,
        tagline,
        cursusUitleg,
        fotoVanDeCursus,
    } = data.contentfulCursus;

    console.log(data);
    return (
        <Layout>
            <Title type="h1">{titel}</Title>
            <OpeningCursus explanation={voorWieIsDezeCursus} kind={kind} />
            <Divider />
            <CursusExplanation
                tagline={tagline}
                description={cursusUitleg}
                fotoCursus={fotoVanDeCursus}
            />
            {/* <Divider /> */}
            {/* <NumberBanner/> */}
            <Divider />
            <Ervaringen />
        </Layout>
    );
};

export default index;
