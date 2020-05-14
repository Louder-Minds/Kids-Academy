import styled from 'styled-components';

import { colors, layout } from '../../util/styling_vars';
import { device } from '../../util/screensizes';

export const Hr = styled.hr`
    display: block;
    height: 2px;
    width: calc(100% - (${layout.padding.width.mobile} * 2));
    background-color: ${colors.blue};
    margin: auto;

    @media ${device.tablet} {
        width: calc(100% - (${layout.padding.width.tablet} * 2));
    }

    @media ${device.laptop} {
        width: calc(100% - (${layout.padding.width.laptop} * 2));
    }

    @media ${device.desktop} {
        width: calc(100% - (${layout.padding.width.desktop} * 2));
    }
`;
