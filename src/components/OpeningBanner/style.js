import styled from 'styled-components';

import speelplaats from './speelplaats.jpeg';

import { device } from '../../util/screensizes';

export const Container = styled.div`
    width: 100%;
    height: 300px;

    padding: 10% 5%;
    margin: 0;

    background-image: url(${speelplaats});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    h1 {
        text-transform: uppercase;
        font-size: 24px;
        font-weight: 700;
        line-height: 1;
        color: white;
        margin-bottom: 10%;
    }

    button {
        margin-left: auto;
        margin-right: auto;
    }

    @media ${device.tablet} {
        min-height: 90vh;
        height: 100%;
        max-height: 90vh;

        max-width: 50%;
        padding: 5%;

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
