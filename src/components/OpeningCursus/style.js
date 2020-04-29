import styled from 'styled-components';

import { device } from '../../util/screensizes';

export const Container = styled.div`
    padding: 5%;

    .content {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        margin-bottom: 5%;

        h2 {
            text-align: left;
        }

        .imgbox {
            padding: 0 0 15px 15px;
            margin-bottom: 5%;

            img {
                max-height: 300px;
                max-width: 100%;
                box-shadow: -15px 15px 0 rgb(180, 0, 0);
            }
        }
    }

    .buttons {
        button {
            width: 100%;
            margin-bottom: 5%;
        }

        button:nth-child(2) {
            margin-bottom: 0;
        }
    }

    @media ${device.tablet} {
        padding: 5%;

        .content {
            grid-column-gap: 50px;
            align-items: center;
            grid-template-columns: 3fr 2fr;
        }

        .buttons {
            display: flex;
            justify-content: space-between;

            button {
                width: 45%;
                margin-bottom: 0;
            }
        }
    }
`;
