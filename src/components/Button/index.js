import React from 'react';
import { Button } from './style';

const PageButton = (props) => (
    <Button id={props.id} full={props.full}>
        {props.children}
    </Button>
);

export default PageButton;
