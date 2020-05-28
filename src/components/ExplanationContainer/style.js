import styled from 'styled-components';
import { device } from '../../util/screensizes';
import { layout } from '../../util/styling_vars';

export const Container = styled.div`
    padding: ${layout.padding.height.mobile} ${layout.padding.width.mobile};
    color: black;

    h1 {
        font-size: 24px;
        margin-bottom: 1em;
        color: black;
        text-transform: uppercase;
        display: block;
    }

    h5 {
        font-size: 18px;
        font-weight: 500;
        margin-top: 1.6em;
    }

    p {
        margin-bottom: 0.6em;
    }

    img {
        max-width: 100%;
    }

    .heading {
        text-align: center;
        font-size: 2em;
        margin-bottom: 5%;
    }

    .imglinks {
        display: flex;
        align-items: center;
        flex-direction: column;
        img {
            display: block;
            margin-bottom: 5%;
        }

        .linkjes {
            display: inline-block;
            width: 100%;
            a {
                text-align: center;
                width: 100%;
                border-radius: 3px;
                display: block;
                background: #14b09c;
                width: 100%;
                margin-bottom: 5%;
                color: white;
                padding: 15px 0;
            }
        }
    }

    @media ${device.tablet} {
        padding: ${layout.padding.height.tablet} ${layout.padding.width.tablet};
        div {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 5%;

            div {
                width: 45%;
                margin-bottom: 0;
                h5 {
                    font-size: 18px;
                    font-weight: 500;
                    margin-top: 1.4em;
                }

                p {
                    margin-bottom: 0.6em;
                }
            }
        }

        .imglinks {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            justify-items: center;

            margin: auto;

            img {
                display: block;
                max-width: 500px;
                margin-bottom: 0;
                margin-right: 5%;
            }

            .linkjes {
                display: inline-block;
                width: auto;
                a {
                    text-align: center;
                    width: 100%;
                    border-radius: 3px;
                    display: block;
                    background: #14b09c;
                    width: 100%;
                    margin-bottom: 5%;
                    color: white;
                    padding: 15px 30px;
                }
                a:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }

    @media ${device.laptop} {
        padding: ${layout.padding.height.laptop} ${layout.padding.width.laptop};
    }

    @media ${device.desktop} {
        padding: ${layout.padding.height.desktop}
            ${layout.padding.width.desktop};
    }
`;
