import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
    font-size: 1.4em;
    font-weight: 700;
    margin-bottom: 5%;
`;

const Title = ({ children }) => <StyledTitle>{children}</StyledTitle>;

export default Title;
