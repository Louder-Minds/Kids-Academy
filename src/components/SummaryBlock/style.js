import styled from 'styled-components';
import { layout, colors } from '../../util/styling_vars';
import { device } from '../../util/screensizes';

export const Container = styled.div`
    background: ${colors.blue};
    margin-top: 20%;

    .samengevat {
        box-sizing: border-box;
        background: white;
        margin: 5%;
        max-width: 120%;
        position: relative;
        top: -12.5px;
        border-radius: 3px;
        padding: 5%;
        margin-bottom: 0;

        span {
            font-size: 1.2em;
            margin-bottom: 5%;
            position: relative;
            display: inline-block;

            &:before {
                content: '';
                width: 100%;
                height: 3px;
                bottom: 0;
                background-color: ${colors.blue};
                position: absolute;
            }
        }

        ul {
            margin: 0;

            li {
                display: flex;
                align-items: center;
                font-size: 16px;
                margin-bottom: 30px;
                font-weight: 500;
                color: ${colors.turqouise};

                img {
                    margin-right: 15px;
                    width: 10px;
                }
            }

            li:last-child {
                margin-bottom: 0;
            }
        }

        &:before {
            content: '';
            background: ${colors.turqouise};
            border-radius: 3px;
            width: 107.5%;
            left: -3.75%;
            top: -12.5px;
            position: absolute;
            height: 115%;
            z-index: -1;
        }
    }

    @media ${device.tablet} {
        margin-top: 2.5%;
    }

    @media ${device.laptop} {
        display: flex;
        justify-content: space-evenly;
        margin-top: 0;

        .samengevat {
            max-width: 45%;
            top: -65px;
            margin: 2.5%;
            &:before {
                top: -25px;
            }
        }
    }

    @media ${device.desktop} {
        display: flex;
        justify-content: space-evenly;
        margin-top: 0;

        .samengevat {
            max-width: 45%;
            top: -100px;
            margin: 2.5%;
            &:before {
                top: -25px;
            }
        }
    }
`;
