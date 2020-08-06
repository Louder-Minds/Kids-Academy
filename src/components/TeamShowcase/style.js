import styled from 'styled-components';

import { device } from '../../util/screensizes';
import { layout, colors } from '../../util/styling_vars';

export const Container = styled.div`
    padding: ${layout.padding.height.mobile} ${layout.padding.width.mobile};

    .grid {
        display: grid;
        grid-column-gap: 5%;
        grid-template-columns: 1fr;
        grid-row-gap: 30px;
        justify-items: center;

        .member {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-height: fit-content;

            div {
                width: 100%;
                margin-bottom: 5%;
                max-width: 100%;
            }

            h2 {
                margin-bottom: 1%;
            }

            span {
                margin: 0;
                font-size: 12px;
                margin-bottom: 5%;
                color: ${colors.turqouise};
                font-weight: 700;
            }

            p {
                max-width: 100%;
                text-align: center;
                margin-bottom: 0;
            }
        }
    }

    @media ${device.tablet} {
        padding: ${layout.padding.height.tablet} ${layout.padding.width.tablet};
        .grid {
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 5%;
            grid-row-gap: 50px;
        }
    }

    @media ${device.laptop} {
        padding: ${layout.padding.height.laptop} ${layout.padding.width.laptop};
        .grid {
            grid-template-columns: 1fr 1fr 1fr;
            grid-row-gap: 60px;

            /* .member {
                min-height: 850px;
            } */
        }
    }

    @media ${device.desktop} {
        padding: ${layout.padding.height.desktop} ${layout.padding.width.desktop};
    }
`;
