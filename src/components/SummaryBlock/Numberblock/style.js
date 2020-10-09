import styled from 'styled-components';
import { device } from '../../../util/screensizes';
import { colors, layout } from '../../../util/styling_vars';

export const Container = styled.div`
    display: flex;
    background-color: ${colors.blue};
    flex-direction: column;
    align-items: center;
    height: auto;
    padding: calc(${layout.padding.height.mobile} - 5%) ${layout.padding.width.mobile};

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
        flex-direction: column;
        justify-content: space-between;
        align-content: center;
        justify-items: center;
        align-items: center;

        div {
            margin-bottom: 0;

            span:first-child {
                font-size: 4.6em;
                margin-bottom: -20px;
            }
        }

        padding: calc(${layout.padding.height.tablet} - 5%) ${layout.padding.width.tablet};
    }

    @media ${device.laptop} {
        padding: calc(${layout.padding.height.laptop} - 2.5%)
            calc(${layout.padding.width.laptop} - ${(props) => (props.side ? '0%' : '5%')});
    }

    @media ${device.laptop_medium} {
        flex-direction: row;
        padding: 0 !important;
        justify-content: space-between;
        min-width: 700px;
        width: fit-content;

        div {
            margin-right: 7.5%;
        }

        div:last-child {
            margin-right: 0;
        }
    }
`;
