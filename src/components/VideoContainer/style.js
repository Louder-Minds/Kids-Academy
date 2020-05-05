import styled from 'styled-components';

import { layout } from '../../util/styling_vars';

export const Container = styled.div`
    padding: ${layout.padding.height.mobile} ${layout.padding.width.mobile};

    display: flex;
    justify-content: center;
    align-items: center;

    video {
        max-width: 100%;
        outline: none;
    }
`;
