import styled from 'styled-components';

import { device } from '../../util/screensizes';

export const Container = styled.div`
    padding: 5%;
    padding-bottom: 10%;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;

    .text {
        h2 {
            text-align: left;
            margin: 0;
            margin-bottom: 2.5%;
        }
    }

    .imgbox {
        padding: 0 0 15px 15px;

        .img {
            width: 100%;
            height: auto;
            box-shadow: -15px 15px 0 rgb(180, 0, 0);
        }
    }

    @media ${device.tablet} {
        padding: 2.5% 5%;
        grid-column-gap: 50px;
        align-items: center;
        grid-template-columns: 3fr 2fr;
    }
`;
