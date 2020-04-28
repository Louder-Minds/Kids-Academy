import styled from 'styled-components';

import { device } from '../../util/screensizes';

export const Container = styled.div`
    padding: 5%;

    @media ${device.tablet} {
        padding: 5%;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-column-gap: 10px;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 30px;
    justify-items: center;

    div {
        padding: 10%;
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        align-items: center;

        text-align: center;

        img {
            margin-bottom: 10%;
        }

        p {
            font-size: 14px;
            margin-bottom: 0;
        }
    }

    @media ${device.tablet} {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-column-gap: 5%;
        grid-row-gap: 30px;
    }
`;
