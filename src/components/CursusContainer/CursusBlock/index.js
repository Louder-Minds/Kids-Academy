import React from 'react';

import { Container, StyledImg, Flag } from './style';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Button from '../../Button';
import uil from './uiltje.png';
import { FormattedMessage } from 'gatsby-plugin-intl';

const CursusBlock = ({ name, description, image, english }) => {
    const options = {
        renderNode: {
            [BLOCKS.LIST_ITEM]: (node, children) => (
                <li>
                    <img src={uil} alt="lg" />
                    {children[0].props.children[0]}
                </li>
            ),
            [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
        },
    };

    return (
        <Container>
            <div className="titelcont">
                <h3>{name}</h3>
            </div>
            <div>
                <StyledImg fluid={image.fluid} />
                <Flag english={english} />
            </div>
            {documentToReactComponents(description.json, options)}
            <Button pagename={name}>
                <FormattedMessage id="cursus_button" />
            </Button>
        </Container>
    );
};

export default CursusBlock;
