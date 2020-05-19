import React from 'react';
import { Button } from './style';
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { colors } from '../../util/styling_vars';

const PageButton = ({pagename = '/', text = 'Bekijk de cursus', id}) => (
    <Button id={id}>
        <AniLink paintDrip hex={`${colors.turqouise}`} to={`/${pagename.toLowerCase().replace(/\s/g, '-')}`}>
            {text}
        </AniLink>
    </Button>
);

export default PageButton;
