import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { device } from '../../util/screensizes';
import { layout } from '../../util/styling_vars';

const StyledImg = styled(Img)`
    max-width: 100%;
    height: 200px;

    @media ${device.tablet} {
        height: 300px;
    }

    @media ${device.laptop} {
        height: 400px;
    }
`;

const Container = styled.div``;

const Image = ({ foto }) => (
    <Container>
        <StyledImg fluid={foto.fluid} />
    </Container>
);

export default Image;
