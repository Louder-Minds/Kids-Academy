import styled from 'styled-components';

import { layout } from '../../util/styling_vars';
import { device } from '../../util/screensizes';

export const Container = styled.ul`
    padding: ${layout.padding.height.mobile} ${layout.padding.width.mobile};
    margin-bottom: 0;

    .buttons {
        button {
            width: 100%;
            margin-bottom: 5%;
        }

        button:last-child {
            margin-bottom: 0;
        }
    }

    @media ${device.tablet} {
        padding: ${layout.padding.height.tablet} ${layout.padding.width.tablet};
        .buttons {
            display: flex;
            justify-content: space-evenly;

            button {
                width: auto;
                margin-bottom: 0;
            }
        }
    }

    @media ${device.laptop} {
        padding: ${layout.padding.height.laptop} ${layout.padding.width.laptop};
    }

    @media ${device.desktop} {
        padding: ${layout.padding.height.desktop} ${layout.padding.width.desktop};
    }
`;

