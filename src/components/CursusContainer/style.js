import styled from 'styled-components';

import { device } from '../../util/screensizes';
import { layout, colors } from '../../util/styling_vars';

export const Container = styled.div`
    padding: ${layout.padding.height.mobile} ${layout.padding.width.mobile};
    position: relative;

    .content {
        padding-top: 5%;
        h1 {
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 0;
            position: relative;
            width: fit-content;
            margin-bottom: 2.5%;

            &:before {
                content: '';
                position: absolute;
                width: 100%;
                height: 3px;
                background-color: ${colors.blue};
                bottom: 0;
            }
        }
        p:last-child {
            margin-bottom: 0;
        }

        a {
            color: ${colors.turqouise};
            text-decoration: underline;
        }
    }

    h2 {
        font-weight: 700;
        font-size: 3em;
        margin-bottom: ${layout.padding.height.mobile};
    }

    @media ${device.tablet} {
        padding: ${layout.padding.height.tablet} ${layout.padding.width.tablet};
        h2 {
            margin-bottom: ${layout.padding.height.tablet};
        }
    }

    @media ${device.laptop} {
        padding: ${layout.padding.height.laptop} ${layout.padding.width.laptop};
        h2 {
            margin-bottom: ${layout.padding.height.laptop};
        }
    }

    @media ${device.desktop} {
        padding: ${layout.padding.height.desktop} ${layout.padding.width.desktop};
        h2 {
            margin-bottom: ${layout.padding.height.desktop};
        }
    }
`;
