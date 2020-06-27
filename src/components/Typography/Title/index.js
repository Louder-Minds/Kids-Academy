import React from 'react';

import { P, H1, H2, H3, H4, H5, H6 } from './style';

const Title = ({ type, children }) => {
    switch (type) {
        case 'h1':
            return <P>{children}</P>;
        case 'h2':
            return <H2>{children}</H2>;
        case 'h3':
            return <H3>{children}</H3>;
        case 'h4':
            return <H4>{children}</H4>;
        case 'h5':
            return <H5>{children}</H5>;
        case 'h6':
            return <H6>{children}</H6>;
        default:
            return <H1>{children}</H1>;
    }
};

export default Title;
