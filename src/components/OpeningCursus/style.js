import styled from 'styled-components';

import { device } from '../../util/screensizes';
import { layout, colors } from '../../util/styling_vars';

export const Container = styled.div`
    padding: ${layout.padding.height.mobile} ${layout.padding.width.mobile};

    .content {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        margin-bottom: 5%;

        a {
            color: ${colors.turqouise};
            text-decoration: underline;
        }

        h2 {
            text-align: left;
        }
    }

    .points {
        width: 100%;
        p {
            display: none;
        }
    }

    hr {
        height: 2px;
        background: black;
        margin-top: 0;
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
            font-size: 1em;
            margin-bottom: 5%;
            font-weight: 600;
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
    }

    @media ${device.laptop} {
        padding: ${layout.padding.height.laptop} ${layout.padding.width.laptop};
        .points {
            width: auto;
        }
    }

    @media ${device.desktop} {
        padding: ${layout.padding.height.desktop} ${layout.padding.width.desktop};
    }
`;
