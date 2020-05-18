import React from 'react';
import { Container } from './style';
import 'odometer-theme-car.css'

const NumberBlock = () => (
    <Container>
        <div>
            <span className='odometer'>3</span>
            <span>LOCATIES</span>
        </div>
        <div>
            <span className='odometer'>10 jaar</span>
            <span>ERVARING</span>
        </div>
        <div>
            <span className='odometer'>2500+</span>
            <span>TEVREDEN OUDERS</span>
        </div>
    </Container>
);

export default NumberBlock;