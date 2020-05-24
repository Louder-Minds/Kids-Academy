import styled from 'styled-components';
import { device } from '../../util/screensizes';
import { colors, layout } from '../../util/styling_vars';

export const Container = styled.div`
    display: flex;
    background-color: #37375c;
    flex-direction: column;
    align-items: center;
    height: auto;

    padding: calc(${layout.padding.height.mobile} - 5%)
        ${layout.padding.width.mobile};

    div {
        display: inline-block;
        margin-bottom: 10%;
        text-align: center;
        span:first-child {
            font-size: 5em;
            font-weight: 100;
        }
    }

    span {
        display: block;
        color: white;
        font-size: 1.4em;
        font-weight: 300;
        text-transform: uppercase;
    }

    @media ${device.tablet} {
        flex-direction: row;
        justify-content: space-between;
        align-content: center;
        justify-items: center;
        align-items: center;

        div {
            margin-bottom: 0;
            span:first-child {
                font-size: 5em;
            }
        }

        padding: ${layout.padding.height.tablet} ${layout.padding.width.tablet};
    }

    @media ${device.laptop} {
        padding: calc(${layout.padding.height.laptop} - 2.5%)
            ${layout.padding.width.laptop};
    }
`;
