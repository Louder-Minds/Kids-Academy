import styled from 'styled-components';

import { device } from '../../util/screensizes';
import { layout } from '../../util/styling_vars';

export const Container = styled.div`
    padding: ${layout.padding.height.mobile} ${layout.padding.width.mobile};
    background-color: white;
    color: rgb(55, 55, 92);
    position: relative;

    hr {
        background: rgb(55,55,92);
        height: 2px;
    }

    h1 {
        margin-bottom: 10px;
        font-size: 2em;
        color: rgb(55, 55, 92);
        font-weight: 600;
    }

    h1, h5 {
        text-align: center;
    }

    button {
        margin: auto;
        display: block;
        margin-bottom: 10%;
    }

    ul {
        margin: 0;
        li {
            display: flex;
            align-items: center;
            font-size: 16px;
            margin-bottom: 30px;
            font-weight: 500;
            color: #14B09C;

            img {
                margin-right: 15px;
                width: 15px;
            }
        }
    }

    @media ${device.tablet} {
        padding: ${layout.padding.height.tablet} ${layout.padding.width.tablet};
        padding-bottom: 0%;
        min-width: 50%;
        ul li {
            margin-bottom: 30px;
        }

        button {
            margin-left: auto;
            margin-right: auto;
            display: block;
            margin-bottom: 7.5%;
        }

        h1 {
            font-size: 2em;
        }
    }

    @media ${device.laptop} {
        h1 {
            font-size: 3em;
        }
        padding: 5%;
        padding-bottom: 0%;
    }
`;
