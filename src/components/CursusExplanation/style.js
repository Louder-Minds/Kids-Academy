import styled from 'styled-components';

import { device } from '../../util/screensizes';
import { layout } from '../../util/styling_vars';

export const Container = styled.div`
    padding: ${layout.padding.height.mobile} ${layout.padding.width.mobile};

    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;

    h2 {
        text-align: left;
    }

    .imgbox {
        padding: 0 0 15px 15px;
        height: 100%;
        width: 100%;
        max-width: 400px;
        max-height: 400px;

        div {
            height: 100%;
            width: 100%;
            max-width: 400px;
            max-height: 400px;
            min-height: 200px !important;
            box-shadow: -15px 15px 0 #14b09c;
        }
    }

    .content {
        a {
            color: #14b09c;
            text-decoration: underline;
        }
    }

    @media ${device.tablet} {
        padding: ${layout.padding.height.tablet} ${layout.padding.width.tablet};
        grid-column-gap: 50px;
        align-items: center;
        grid-template-columns: 3fr 2fr;

        .content {
            div {
                p {
                    p:last-child {
                        margin-bottom: 0;
                    }
                }
            }
        }

        .imgbox img {
            max-height: 500px;
        }
    }

    @media ${device.laptop} {
        padding: ${layout.padding.height.laptop} ${layout.padding.width.laptop};
    }

    @media ${device.desktop} {
        padding: ${layout.padding.height.desktop} ${layout.padding.width.desktop};
    }
`;
