import styled from 'styled-components';

import { device } from '../../util/screensizes';
import { layout } from '../../util/styling_vars';

export const Container = styled.div`
    padding: ${layout.padding.height.mobile} ${layout.padding.width.mobile};

    img {
        width: 100px;
        border-radius: 100%;
        margin: auto;
        display: block;
        margin-bottom: 5%;
    }

    p {
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
        .ervaring {
            display: flex;
            justify-content: center;
            .persoon {
                span {
                    display: block;
                    margin: auto;
                }
                img {
                    margin-right: 5%;
                }
            }

            p {
                margin-bottom: 0px;
            }

            margin-bottom: 5%;
        }

        div {
            display: flex;
            justify-content: space-between;
            button {
                width: 45%;
            }
        }
    }
`;
