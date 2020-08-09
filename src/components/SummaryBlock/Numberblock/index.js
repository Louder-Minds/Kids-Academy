import React from 'react';
import { Container } from './style';
// import 'odometer-theme-car.css'
import { FormattedMessage } from 'gatsby-plugin-intl';

const NumberBlock = ({ side = true }) => (
    <Container side={side}>
        <div>
            <span className="odometer">3</span>
            <span>
                {' '}
                <FormattedMessage id="locaties_odobalk" />
            </span>
        </div>
        <div>
            <span className="odometer">
                10 <FormattedMessage id="jaren" />
            </span>
            <span>
                {' '}
                <FormattedMessage id="ervaring_odobalk" />
            </span>
        </div>
        <div>
            <span className="odometer">2500+</span>
            <span>
                {' '}
                <FormattedMessage id="tevreden-ouders_odobalk" />
            </span>
        </div>
    </Container>
);

export default NumberBlock;
