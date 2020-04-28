import React from 'react';
import { Container } from './style';
import CursusBlock from '../CursusBlock';

const classes = [
    'Rekenen',
    'Taal',
    'Cito Training',
    'Cambridge Chinese',
    'Courses in English',
];

const CursusGrid = () => (
    <Container>
        {classes.map((i, j) => (
            <CursusBlock key={j} name={i} />
        ))}
    </Container>
);

export default CursusGrid;
