import React from 'react';
import { Button } from './style';
import { Link } from 'gatsby';
import { colors } from '../../util/styling_vars';
import { injectIntl } from 'gatsby-plugin-intl';

const PageButton = ({ intl, pagename, children }) => {
    return (
        <Button>
            <Link
                // cover
                // bg={`${colors.turqouise}`}
                to={`/${intl.locale}/${pagename.toLowerCase().replace(/\s/g, '-')}`}
            >
                {children}
            </Link>
        </Button>
    );
};

export default injectIntl(PageButton);
