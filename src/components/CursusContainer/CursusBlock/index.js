import React from 'react';

import { Container, StyledImg } from './style';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Button from '../../Button';
import uil from './uiltje.png';

const CursusBlock = ({ name, description, image }) => {
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
                <div className="flag" />
            </div>
            {documentToReactComponents(description.json, options)}
            <Button pagename={name} text="Bekijk de cursus" />
        </Container>
    );
};

export default CursusBlock;
