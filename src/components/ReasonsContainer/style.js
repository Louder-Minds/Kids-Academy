import styled from 'styled-components';

import { device } from '../../util/screensizes';
import { layout } from '../../util/styling_vars';

export const Container = styled.div`
    padding: ${layout.padding.height.mobile} ${layout.padding.width.mobile};
    background-color: #37375c;
    color: white;

    box-sizing: border-box;

    width: 100%;

    hr {
        background: white;
        height: 2px;
    }

    h1 {
        margin-bottom: 10px;
        font-size: 20px;
        color: white;
        font-weight: 600;
    }

    ul {
        margin: 0;
        li {
            display: flex;
            align-items: center;
            font-size: 16px;
            margin-bottom: 30px;
            font-weight: 200;

            img {
                margin-right: 15px;
                width: 15px;
            }
        }
    }

    @media ${device.tablet} {
        height: 100%;
        min-height: 700px;
        max-height: 700px;
        max-width: 50%;

        padding: ${layout.padding.height.tablet} ${layout.padding.width.tablet};

        ul li {
            margin-bottom: 30px;
        }
    }

    @media ${device.laptop} {
        h1 {
            font-size: 2em;
        }
        padding: 5%;
    }
`;
