import styled from 'styled-components';

import { device } from '../../util/screensizes';
import { layout } from '../../util/styling_vars';

export const Container = styled.div`
    padding: ${layout.padding.height.mobile} ${layout.padding.width.mobile};

    .content {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        margin-bottom: 5%;

        h2 {
            text-align: left;
        }

        .imgbox {
            padding: 0 0 30px 30px;

            img {
                max-height: 300px;
                max-width: 100%;
                box-shadow: -30px 30px 0 rgb(180, 0, 0);
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
        padding: ${layout.padding.height.tablet} ${layout.padding.width.tablet};

        .content {
            grid-column-gap: 50px;
            align-items: center;
            grid-template-columns: 3fr 2fr;
            
        }

        .buttons {
            display: flex;
            justify-content: space-around;

            button {
                width: auto;
                margin-bottom: 0;
            }
        }
    }

    @media ${device.laptop} {
        padding: ${layout.padding.height.laptop} ${layout.padding.width.laptop};
    }
`;
