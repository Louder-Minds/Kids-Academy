import styled from 'styled-components';

import speelplaats from './speelplaats.jpeg';

import { device } from '../../util/screensizes';
import { layout } from '../../util/styling_vars';

export const Container = styled.div`
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
        max-width: 50%;
        padding: ${layout.padding.height.tablet} ${layout.padding.width.tablet};
        padding-bottom: 0%;

        h1 {
            font-size: 2.2em;
        }
    }

    @media ${device.laptop} {
        padding: 5%;
        padding-bottom: 0%;

        h1 {
            font-size: 3em;
        }
    }
`;
