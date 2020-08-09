import styled from 'styled-components';

import { device } from '../../util/screensizes';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media ${device.tablet} {
        flex-direction: row;
        max-width: 800px;
        margin: auto;
        margin-bottom: 15%;
        /* border-bottom: 3px rgb(55, 55, 92) solid; */
    }

    @media ${device.laptop} {
        max-width: 1200px;
        margin-bottom: 2.5%;
    }
`;
