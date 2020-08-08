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

    #twentytwenty {
        display: none;
    }

    @media ${device.tablet} {
        max-width: 50%;
        padding: ${layout.padding.height.tablet} ${layout.padding.width.tablet};
        padding-bottom: 0%;

        .heading span,
        button {
            display: none;
        }

        display: relative;

        #twentytwenty {
            display: block;
            line-height: 2.6em;
            display: block;
            position: absolute;
            right: 10%;
            bottom: -10%;
            z-index: 10;

            span {
                color: ${colors.turqouise};
                font-weight: 700;
                font-size: 6em;
            }

            span:last-child {
                display: block;
                transform: translateX(25%);
            }
        }
    }

    @media ${device.laptop} {
        #twentytwenty {
            display: block;
            line-height: 2.6em;
            display: block;
            position: absolute;
            right: 10%;
            bottom: 0%;
            z-index: 10;

            span {
                color: ${colors.blue};
                font-weight: 700;
                font-size: 6em;
            }

            span:last-child {
                display: block;
                transform: translateX(25%);
            }
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

    @media ${device.tablet} {
        transform: translateX(5%) translateY(5%);
        position: relative !important;
        left: 0 !important;
        top: 0 !important;
        width: 350px !important;
        max-width: 350px !important;
        height: 350px !important;
        min-height: 350px;
        max-height: 350px;

        border-radius: 3px;
    }

    @media ${device.laptop} {
        transform: translateX(25%) translateY(0%);
        width: 450px !important;
        max-width: 450px !important;
        height: 450px !important;
        min-height: 400px;
        max-height: 400px;
    }

    @media ${device.laptop_large} {
        transform: translateX(15%) translateY(0%);
        width: 500px !important;
        max-width: 500px !important;
        height: 500px !important;
        min-height: 450px;
        max-height: 400px;
    }
`;
