import React from 'react';

import { Container } from './style';
import Title from '../Title';
import Paragraph from '../Paragraph';

const OpeningAbout = () => (
    <Container>
        <Title type="h2">KidsAcademy</Title>
        <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph>
        <img src={'https://source.unsplash.com/400x400'} alt={'people'} />
    </Container>
);

export default OpeningAbout;
