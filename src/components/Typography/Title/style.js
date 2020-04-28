import styled from 'styled-components';

import { colors } from '../../../util/styling_vars';
import { device } from '../../../util/screensizes';

export const H1 = styled.h1`
    color: ${colors.blue};
    font-size: 60px;
    text-align: center;
    font-weight: 700;
    margin: 2.5%;
`;

export const H2 = styled.h2`
    color: ${colors.black};
    text-align: center;
    font-size: 30px;
    margin-bottom: 5%;
`;

export const H3 = styled.h3`
    color: ${colors.black};
    font-size: 22px;
`;

export const H4 = styled.h4`
    color: ${colors.blue};
    font-size: 18px;
`;

export const H5 = styled.h5`
    color: ${colors.blue};
    font-size: 16px;
`;

export const H6 = styled.h6`
    color: ${colors.blue};
    font-size: 14px;
`;
