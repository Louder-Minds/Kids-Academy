import styled from 'styled-components';

import { device } from '../../util/screensizes';

export const Container = styled.div`
    padding: 5%;
    img {
        width: 100px;
        border-radius: 100%;
        margin: auto;
        display: block;
        margin-bottom: 2.5%;
    }

    p {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }

    div {
        button {
            width: 100%;
            margin-bottom: 5%;
        }
    }

    @media ${device.tablet} {
        div {
            display: flex;
            justify-content: space-between;
            button {
                width: 45%;
            }
        }
    }
`;
