import styled from 'styled-components';

import { device } from '../../util/screensizes';

export const Container = styled.div`
    padding: 5%;

    div {
        display: grid;
        grid-column-gap: 5%;
        grid-template-columns: 1fr;
        grid-row-gap: 30px;
        justify-items: center;

        div {
            display: flex;
            flex-direction: column;
            align-items: center;

            img {
                width: 100%;
                margin-bottom: 10%;
                max-width: 100%;
            }

            h2 {
                margin-bottom: 1%;
            }

            span {
                margin: 0;
                font-size: 12px;
                margin-bottom: 5%;
                color: rgb(202, 52, 52);
                font-weight: 700;
            }

            p {
                max-width: 100%;
                text-align: center;
            }
        }
    }

    @media ${device.tablet} {
        div {
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 5%;
            grid-row-gap: 30px;
        }
    }

    @media ${device.laptop} {
        div {
            grid-template-columns: 1fr 1fr 1fr;
            grid-row-gap: 30px;
        }
    }
`;
