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
        display: block;
    }

    h5 {
        font-size: 18px;
        font-weight: 500;
        margin-top: 1.6em;
    }

    p {
        margin-bottom: 0.6em;
    }

    img {
        max-width: 100%;
    }

    @media ${device.tablet} {
        padding: ${layout.padding.height.tablet} ${layout.padding.width.tablet};
        div {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 5%;

            div {
                width: 45%;
                margin-bottom: 0;
                h5 {
                    font-size: 18px;
                    font-weight: 500;
                    margin-top: 1.4em;
                }

                p {
                    margin-bottom: 0.6em;
                }
            }
        }

        img {
            max-width: 400px;
            display: block;
            margin: auto;
        }
    }

    @media ${device.laptop} {
        padding: ${layout.padding.height.laptop} ${layout.padding.width.laptop};
    }

    @media ${device.desktop} {
        padding: ${layout.padding.height.desktop}
            ${layout.padding.width.desktop};
    }
`;
