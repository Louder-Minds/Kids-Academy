import styled from 'styled-components';

import { colors } from '../../util/styling_vars';
import { device } from '../../util/screensizes';

export const Hr = styled.hr`
    display: block;
    height: 2px;
    width: 90%;
    background-color: ${colors.blue};
    margin: auto;

    @media ${device.laptop} {
        width: 80%;
    }
`;
