import styled from 'styled-components';

import { device } from '../../util/screensizes';
import { layout } from '../../util/styling_vars';

export const Container = styled.div`
    padding: ${layout.padding.height.mobile} ${layout.padding.width.mobile};
    background-color: white;
    color: rgb(55, 55, 92);
    position: relative;
    padding-bottom: 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: space-between;
    // min-height: 800px;
    // height: 75vh;

    hr {
        background: rgb(55, 55, 92);
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
        color: rgb(55, 55, 92);
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
        button {
            margin-bottom: 30px;
        }
        width: 100%;

        ul {
            margin: 0;
            li {
                display: flex;
                align-items: center;
                font-size: 16px;
                margin-bottom: 30px;
                font-weight: 500;
                color: #14b09c;

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
        h1 {
            font-size: 4em;
        }

        h5 {
            margin-bottom: 5%;a
        }

        div {
            
            ul {
                li {
                    font-size: 1.4em;
                    margin-bottom: 1.4em;
                    font-weight: 400;
                    img {
                        margin-right: 15px;
                        width: 15px;
                    }
                }
                li:last-child {
                    margin-bottom: 0;
                }
                margin-bottom: 1em;
            }
        }
        padding: 5%;
        padding-bottom: 0%;
    }
`;
