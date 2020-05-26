import styled from 'styled-components';
import Img from 'gatsby-image';
import { device } from '../../util/screensizes';
import { layout } from '../../util/styling_vars';

export const Container = styled.div`
    padding: ${layout.padding.height.mobile} ${layout.padding.width.mobile};
    padding-top: 25%;
    padding-bottom: 5%;
    margin: 0;
    position: relative;
    min-width: 50%;
    min-height: 250px;

    .heading {
        span {
            text-transform: uppercase;
            font-size: 2em;
            font-weight: 700;
            line-height: 1;
            color: white;
            position: relative;
            display: inline-block;
            margin-right: 2.5%;
            z-index: 5;
            transform: translateX(0);
        }
        span:before {
            z-index: -1;
            content: '';
            position: absolute;
            bottom: -2.5%;
            left: 5px;
            width: calc(100%);
            height: 20px;
            background: #14b09c;
            opacity: 75%;
        }
        margin-bottom: 10%;
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

        div span {
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
    object-fit: 50% 30% !important;
    z-index: 0 !important;
    min-height: 300px;

    @media ${device.desktop} {
        picture img {
            object-position: 10% 30% !important;
        }
    }
`;
