import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span`
    font-size: 1em;
    margin-right: 10%;
`;

const Author = ({ children }) => <StyledSpan>{children}</StyledSpan>;

export default Author;
