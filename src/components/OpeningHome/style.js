import styled from 'styled-components';
import Img from 'gatsby-image';
import { device } from '../../util/screensizes';
import { layout } from '../../util/styling_vars';

export const Container = styled.div`
    padding: ${layout.padding.height.mobile} ${layout.padding.width.mobile};
    margin: 0;
    position: relative;
    min-width: 50%;

    h1 {
        text-transform: uppercase;
        font-size: 2em;
        font-weight: 700;
        line-height: 1;
        color: white;
        margin-bottom: 10%;
        position: relative;
    }

    button {
        position: relative;
    }

    @media ${device.tablet} {
        max-width: 50%;
        padding: ${layout.padding.height.tablet} ${layout.padding.width.tablet};
        padding-bottom: 0%;

        h1 {
            font-size: 2.2em;
        }
    }

    @media ${device.laptop} {
        padding: 5%;
        padding-bottom: 0%;

        h1 {
            font-size: 3em;
        }
    }
`;

export const StyledImg = styled(Img)`
    position: absolute !important;
    left: 0 !important;
    top: 0 !important;
    width: 100% !important;
    max-width: 100% !important;
    height: 100% !important;
    max-height: auto !important;
    object-fit: cover !important;
    z-index: 0 !important;
`;
