import styled from 'styled-components';

export const Container = styled.div`
    padding: ${(props) => (props.padding ? '5%' : '0%')};
`;
