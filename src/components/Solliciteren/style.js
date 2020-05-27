import styled from 'styled-components';

import { device } from '../../util/screensizes';
import { layout } from '../../util/styling_vars';

export const Container = styled.div`
    padding: ${layout.padding.height.mobile} ${layout.padding.width.mobile};

    .text-container {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
    }

    button {
        text-transform: uppercase;
        height: 50px;
        background: #14b09c;
        background: linear-gradient(90deg, #14b09c 0%, #14b0b4 100%);
        border: none;
        letter-spacing: 0.5p;
        border-radius: 4px;
        display: block;
        margin: auto;
        cursor: pointer;
        color: #ffffff;
        font-family: Arial;
        font-size: 16px;
        text-decoration: none;
        padding: 0;

        a {
            padding: 12px 30px;
            color: white;
            display: block;
        }
    }

    @media ${device.tablet} {
        padding: ${layout.padding.height.tablet} ${layout.padding.width.tablet};
        .text-container {
            grid-column-gap: 5%;
            grid-template-columns: 1fr 1fr;
            margin-bottom: 5%;

            p {
                margin-bottom: 0;
                text-align: justify;
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
