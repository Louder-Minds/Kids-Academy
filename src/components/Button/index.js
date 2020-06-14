import React from 'react';
import { Button } from './style';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { colors } from '../../util/styling_vars';
import { injectIntl } from 'gatsby-plugin-intl';

const PageButton = ({ intl, pagename, children }) => {
    return (
        <Button>
            <AniLink
                cover
                bg={`${colors.turqouise}`}
                to={`/${intl.locale}/${pagename.toLowerCase().replace(/\s/g, '-')}`}
            >
                {children}
            </AniLink>
        </Button>
    );
};

export default injectIntl(PageButton);
