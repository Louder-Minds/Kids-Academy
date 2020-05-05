import styled from 'styled-components';

import speelplaats from './speelplaats.jpeg';

import { device } from '../../util/screensizes';
import { layout } from '../../util/styling_vars';

export const Container = styled.div`
    height: 300px;

    padding: ${layout.padding.height.mobile} ${layout.padding.width.mobile};
    margin: 0;

    background-image: url(${speelplaats});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-width: 50%;

    h1 {
        text-transform: uppercase;
        font-size: 2em;
        font-weight: 700;
        line-height: 1;
        color: white;
        margin-bottom: 10%;
    }

    @media ${device.tablet} {
        min-height: 700px;
        height: 100%;
        max-height: 90vh;

        max-width: 50%;
        padding: ${layout.padding.height.tablet} ${layout.padding.width.tablet};

        h1 {
            font-size: 2.2em;
        }
    }

    @media ${device.laptop} {
        padding: 5%;

        h1 {
            font-size: 3em;
        }
    }
`;
