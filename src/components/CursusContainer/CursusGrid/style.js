import styled from 'styled-components';

import { device } from '../../../util/screensizes';

export const Container = styled.div`
    display: grid;
    grid-column-gap: 10px;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 75px;
    justify-items: center;
    margin-bottom: 10%;

    @media (min-width: 550px) {
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 60px;
    }

    @media ${device.tablet} {
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 5%;
    }
    @media ${device.laptop} {
        grid-template-columns: repeat(3, 1fr);
        grid-row-gap: 100px;
        margin-bottom: 5%;
    }

    @media ${device.desktop} {
        grid-template-columns: repeat(4, 1fr);
    }
`;
