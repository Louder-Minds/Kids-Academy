import styled from 'styled-components';

import { layout } from '../../util/styling_vars';
import { device } from '../../util/screensizes';

export const Container = styled.div`
    padding: ${layout.padding.height.mobile} ${layout.padding.width.mobile};

    display: flex;
    justify-content: center;
    align-items: center;

    video {
        max-width: 100%;
        outline: none;
    }

    @media ${device.tablet} {
        padding: ${layout.padding.height.tablet} ${layout.padding.width.tablet};
    }
    @media ${device.laptop} {
        padding: ${layout.padding.height.laptop} ${layout.padding.width.laptop};
    }
`;
