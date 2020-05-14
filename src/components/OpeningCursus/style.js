import styled from 'styled-components';

import { device } from '../../util/screensizes';
import { layout } from '../../util/styling_vars';

export const Container = styled.div`
    padding: ${layout.padding.height.mobile} ${layout.padding.width.mobile};

    .content {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        margin-bottom: 5%;

        h2 {
            text-align: left;
        }

        .imgbox {
            padding: 0 0 30px 30px;

            img {
                max-height: 300px;
                max-width: 100%;
                box-shadow: -30px 30px 0 rgb(180, 0, 0);
            }
        }
    }

    hr {
        height: 2px;
        background: black;
    }

    h3 {
        margin-bottom: 10px;
        font-size: 20px;
        font-weight: 600;
    }

    ul {
        margin: 0;
        li {
            display: flex;
            align-items: center;
            font-size: 20px;
            margin-bottom: 30px;
            font-weight: 600;
            color: #14B09C;

            img {
                margin-right: 15px;
                width: 15px;
            }
        }
    }

    .buttons {
        button {
            width: 100%;
            margin-bottom: 5%;
        }

        button:last-child {
            margin-bottom: 0;
        }
    }

    @media ${device.tablet} {
        padding: ${layout.padding.height.tablet} ${layout.padding.width.tablet};

        .content {
            grid-column-gap: 50px;
            align-items: center;
            grid-template-columns: 3fr 2fr;
        }

        .buttons {
            display: flex;
            justify-content: space-evenly;

            button {
                width: auto;
                margin-bottom: 0;
            }
        }

        ul {
            li {
                font-size: 14px;
                margin-bottom: 10px;
            }
        }
    }

    @media ${device.laptop} {
        padding: ${layout.padding.height.laptop} ${layout.padding.width.laptop};
    }

    @media ${device.desktop} {
        padding: ${layout.padding.height.desktop} ${layout.padding.width.desktop};
    }
`;
