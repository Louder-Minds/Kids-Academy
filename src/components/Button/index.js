import React from 'react';
import { Button } from './style';
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { colors } from '../../util/styling_vars';

const PageButton = ({pagename = '/', text = 'Bekijk de cursus', id}) => (
    <Button>

        <AniLink cover bg={`${colors.turqouise}`} to={`/${pagename.toLowerCase().replace(/\s/g, '-')}`}>
    <Button id={id}>
            {text}
    </Button>
        </AniLink>
    </Button>
);

export default PageButton;
