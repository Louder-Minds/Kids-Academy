import styled from 'styled-components';

import { layout } from '../../util/styling_vars';
import { device } from '../../util/screensizes';

export const Container = styled.div`
    padding: ${layout.padding.height.mobile} ${layout.padding.width.mobile};

    .vidcontainer {
        max-width: 100%;

        video {
            max-width: 100%;
            outline: none;
            margin-bottom: 5%;
            border-radius: 3px;
        }
    }

    h3 {
        text-align: left;
        margin-bottom: 5%;
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

        .buttons {
            display: flex;
            justify-content: space-evenly;

            button {
                width: auto;
                margin-bottom: 0;
            }

            button:nth-child(2) {
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
