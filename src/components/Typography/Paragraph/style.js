import styled from 'styled-components';

import { device } from '../../../util/screensizes';

export const P = styled.p`
    text-align: justify;
    hyphens: auto;

    font-size: 1em;
    line-height: 1.9;

    margin-bottom: 10%;

    
    @media ${device.tablet} {
        margin-bottom: 5%;

        &:last-child {
            margin-bottom: 0%;
        }
    }
`;
