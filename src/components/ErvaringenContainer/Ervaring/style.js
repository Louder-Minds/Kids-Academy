import styled from 'styled-components';

import { device } from '../../../util/screensizes';

export const Container = styled.div`
    .ervaring {
        display: flex;
        flex-direction: column;
        align-items: center;

        .persoon {
            display: flex;
            flex-direction: column;
            align-items: center;

            img {
                width: 100px;
                border-radius: 100%;
                margin: auto;
                display: block;
                margin-bottom: 5%;
                box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
            }
        }

        p {
            margin-bottom: 0;
        }
    }

    @media ${device.tablet} {
        .buttons {
            display: flex;
            justify-content: space-evenly;

            button {
                width: auto;
            }
        }


        .ervaring {
            padding: 0 2.5%;
            flex-direction: row;
            margin-bottom: 5%;
            justify-content: center;
        

            .persoon {
                margin-right: 5%;

                span {
                    text-align: center;
                    margin-bottom: 5%;
                }
            }
        }

        p {
            max-width: 600px;
        }
    }
`;
