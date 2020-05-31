import React from 'react';

import Layout from '../components/Layout';
import Divider from '../components/Divider';
import OpeningAbout from '../components/OpeningAbout';
import AcademyWayExplanation from '../components/AcademyWayExplanation';
import TeamShowcase from '../components/TeamShowcase';
import Solliciteren from '../components/Solliciteren';
import Title from '../components/Typography/Title';
import ErvaringenContainer from '../components/ErvaringenContainer';
import SEO from '../components/SEO';
import { graphql } from 'gatsby';

export const query = graphql`
    query About {
        contentfulOverOns {
            kop
            opening {
                json
            }
            openingFoto {
                fluid {
                    ...GatsbyContentfulFluid_withWebp
                }
            }
            solliciteren {
                json
            }
        }
    }
`;

const index = ({ data }) => {
    const { kop, opening, openingFoto, solliciteren } = data.contentfulOverOns;

    return (
        <Layout>
            <SEO titel="Over ons" />
            <Title type="h1">Over ons</Title>
            <OpeningAbout heading={kop} content={opening} foto={openingFoto} />
            <Divider />
            <AcademyWayExplanation />
            <Divider />
            <TeamShowcase />
            <Divider />
            <ErvaringenContainer />
            <Divider />
            <Solliciteren content={solliciteren} />
        </Layout>
    );
};

export default index;
