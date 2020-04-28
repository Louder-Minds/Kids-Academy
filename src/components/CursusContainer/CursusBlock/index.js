import React from 'react';

import { Container } from './style';

import Paragraph from '../../Typography/Paragraph';

const CursusBlock = (props) => (
    <Container>
        <h3>{props.name}</h3>
        <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Paragraph>
        <div>
            <img src={'https://source.unsplash.com/300x200'} alt="cursus"></img>
        </div>
        <div id="flag" />
    </Container>
);

export default CursusBlock;
