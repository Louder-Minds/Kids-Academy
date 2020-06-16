import styled from 'styled-components';
import Img from 'gatsby-image';
import { device } from '../../util/screensizes';
import { layout, colors } from '../../util/styling_vars';

export const Container = styled.div`
    padding: ${layout.padding.height.mobile} ${layout.padding.width.mobile};
    padding-top: 25%;
    padding-bottom: 5%;
    margin: 0;
    position: relative;
    min-width: 50%;
    min-height: 250px;

    .heading {
        margin-bottom: 10%;

        span {
            text-transform: uppercase;
            font-size: 2em;
            font-weight: 700;
            line-height: 1;
            color: white;
            position: relative;
            display: inline-block;
            margin-right: 2.5%;
            transform: translateX(0);
        }

        span:before {
            z-index: -1;
            content: '';
            position: absolute;
            bottom: -2.5%;
            left: 5px;
            width: 100%;
            height: 20px;
            background: ${colors.turqouise};
            opacity: 75%;
        }
    }

    button {
        position: relative;
    }

    @media ${device.tablet} {
        max-width: 50%;
        padding: ${layout.padding.height.tablet} ${layout.padding.width.tablet};
        padding-bottom: 0%;

        .heading span,
        button {
            display: none;
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
    min-height: 300px;
`;
