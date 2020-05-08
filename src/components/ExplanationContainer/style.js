import styled from 'styled-components';
import { device } from '../../util/screensizes';
import { layout } from '../../util/styling_vars';

export const Container = styled.div`
    padding: ${layout.padding.height.mobile} ${layout.padding.width.mobile};
    color: black;

    h1 {
        font-size: 24px;
        margin-bottom: 1em;
        color: black;
        text-transform: uppercase;
    }

    div {
        display: block;

        h5 {
            font-size: 18px;
            font-weight: 500;
            margin-bottom: 0.4em;
            margin-top: 1.4em;
        }

        p {
            margin-bottom: 0.6em;
        }
    }

    img {
        max-width: 100%;
    }

    @media ${device.tablet} {
        padding: ${layout.padding.height.tablet} ${layout.padding.width.tablet};
        display: grid;
        grid-template-columns: 3fr 2fr;
        grid-column-gap: 5%;
        justify-items: center;
        align-items: center;

        img {
            width: 100%;
            display: inline-block;
        }
    }

    @media ${device.laptop} {
        padding: ${layout.padding.height.laptop} ${layout.padding.width.laptop};

        img {
            width: 100%;
        }
    }
`;
