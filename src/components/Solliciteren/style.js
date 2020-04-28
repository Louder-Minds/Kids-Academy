import styled from 'styled-components';

import { device } from '../../util/screensizes';

export const Container = styled.div`
    padding: 5%;

    .text-container {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
    }

    @media ${device.tablet} {
        .text-container {
            grid-column-gap: 5%;
            grid-template-columns: 1fr 1fr;
        }
    }
`;
