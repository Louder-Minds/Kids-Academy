import styled from 'styled-components';

import { colors } from '../../util/styling_vars';

export const Button = styled.button`
    text-transform: uppercase;
    height: 50px;
    background: ${colors.turqouise};
    background: ${colors.gradient};
    border: none;
    letter-spacing: 0.5p;
    border-radius: 4px;
    display: inline-block;
    cursor: pointer;
    color: ${colors.white};
    font-family: Arial;
    font-size: 16px;
    text-decoration: none;
    padding: 0;

    a {
        padding: 12px 30px;
        color: ${colors.white};
        display: block;
    }
`;
