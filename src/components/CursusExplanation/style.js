import styled from 'styled-components';

import { device } from '../../util/screensizes';

export const Container = styled.div`
    padding: 5%;

    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;

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

    .content {
        div {
            p {
                text-align: justify;
                hyphens: auto;

                font-size: 14px;
                line-height: 1.9;

                margin-bottom: 2.5%;
            }
        }
    }

    @media ${device.tablet} {
        grid-column-gap: 50px;
        align-items: center;
        grid-template-columns: 3fr 2fr;

        .content {
            div {
                p {
                    p:last-child {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
`;
