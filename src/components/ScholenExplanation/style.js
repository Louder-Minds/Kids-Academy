import styled from 'styled-components';
import { layout, colors } from '../../util/styling_vars';
import { device } from '../../util/screensizes';

export const Container = styled.div`
    padding: ${layout.padding.height.mobile} ${layout.padding.width.mobile};

    h2 {
        word-break: break-word;
    }

    .buttons {
        max-width: 800px;
        margin: auto;

        button {
            display: inline-block;
            width: 100%;
            border: none;
            background: none;
            margin-bottom: 5%;

            a {
                text-align: center;
                width: 100%;
                border-radius: 3px;
                display: block;
                background: ${colors.turqouise};
                width: 100%;
                color: white;
                padding: 15px 0;
            }
        }

        button:last-child {
            margin-bottom: 0;
        }
    }

    .content {
        margin: auto;

        max-width: 900px;
        margin-bottom: 5%;

        ul {
            margin: 0;

            li {
                display: flex;
                align-items: center;
                font-size: 16px;
                margin-bottom: 30px;
                font-weight: 500;
                color: ${colors.turqouise};
                text-align: justify;
                hyphens: auto;

                img {
                    margin-right: 15px;
                    width: 10px;
                }
            }

            li:last-child {
                margin-bottom: 0;
            }
        }
    }

    @media ${device.tablet} {
        padding: ${layout.padding.height.tablet} ${layout.padding.width.tablet};

        h2 {
            margin-bottom: 2.5%;
        }

        .buttons {
            display: flex;
            justify-content: space-between;

            button {
                width: 40%;
                max-width: 300px;
                margin: 0;
            }
        }
    }
`;
