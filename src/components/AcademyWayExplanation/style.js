import styled from 'styled-components';

import { device } from '../../util/screensizes';
import { layout } from '../../util/styling_vars';

export const Container = styled.div`
    padding: ${layout.padding.height.mobile} ${layout.padding.width.mobile};

    @media ${device.tablet} {
        padding: ${layout.padding.height.tablet} ${layout.padding.width.tablet};
    }

    @media ${device.laptop} {
        padding: ${layout.padding.height.laptop} ${layout.padding.width.laptop};
    }

    @media ${device.desktop} {
        padding: ${layout.padding.height.desktop} ${layout.padding.width.desktop};
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-column-gap: 10px;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 30px;
    justify-items: center;

    div {
        padding: 5%;
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        align-items: center;
        text-align: center;

        svg {
            margin-bottom: 10%;
            height: 50px;
            width: 50px;
        }

        p {
            font-size: 14px;
            margin-bottom: 0;
        }
    }

    @media ${device.tablet} {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-column-gap: 5%;
        grid-row-gap: 30px;
    }
`;
