import React from 'react';
import styled from 'styled-components';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Paragraph from '../Typography/Paragraph';
import { device } from '../../util/screensizes';
import Button from '../Button';

const StyledContent = styled.div`
    padding: 5%;

    @media ${device.tablet} {
        padding: 5% 2.5%;
    }

    button {
        width: 90%;
        max-width: 300px;
        margin: auto;
        display: block;
    }
`;

const options = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
        [BLOCKS.HEADING_2]: (node, children) => <h4>{children}</h4>,
    },
};

const Content = ({ content }) => (
    <StyledContent>
        {documentToReactComponents(content.json, options)}
        <Button pagename={`blog`}>Terug</Button>
    </StyledContent>
);

export default Content;
