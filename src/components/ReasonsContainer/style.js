import styled from 'styled-components';

import { device } from '../../util/screensizes';
import { layout, colors } from '../../util/styling_vars';

export const Container = styled.div`
    padding: calc(${layout.padding.height.mobile} - 5%) ${layout.padding.width.mobile};
    color: ${colors.blue};
    position: relative;
    padding-bottom: 0%;
    display: flex;
    flex-direction: column;
    align-items: center;

    hr {
        background: ${colors.blue};
        height: 3px;
        width: 100%;
        margin-top: 30px;
        margin-bottom: 30px;
    }

    hr:last-child {
        margin-top: 0;
    }

    h1 {
        margin-bottom: 10px;
        font-size: 2em;
        color: ${colors.blue};
        font-weight: 600;
    }

    h1,
    h5 {
        text-align: center;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        button {
            margin-bottom: 30px;
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

        p {
            display: none;
        }
    }

    button {
        margin-bottom: 30px;
        margin-top: 30px;
    }

    @media ${device.tablet} {
        padding: ${layout.padding.height.tablet} ${layout.padding.width.tablet};
        padding-bottom: 0%;
        min-width: 50%;

        ul li {
            margin-bottom: 30px;
        }

        h1 {
            font-size: 2em;
        }
    }

    @media ${device.laptop} {
        padding: 5%;
        padding-bottom: 0%;

        h1 {
            font-size: 4em;
        }

        h5 {
            margin-bottom: 5%;
        }

        div {
            ul {
                li {
                    font-size: 1em;
                    margin-bottom: 1.4em;
                    font-weight: 400;

                    img {
                        margin-right: 15px;
                    }
                }

                li:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }
`;
