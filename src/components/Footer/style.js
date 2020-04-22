import styled from 'styled-components';
import { device } from '../../util/screensizes';

export const Container = styled.div`
    font-weight: 200;
    background-color: #37375c;
    padding: 5%;
    color: white;
    font-size: 0.7em;
    position: relative;

    #content {
        margin: auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        justify-items: start;

        div {
            max-width: 120px;
            /* margin-right: 5%; */
            margin-bottom: 10%;
            display: inline-block;
            flex-direction: column;
            font-size: 12px;

            a {
                display: block;
            }

            span {
                display: block;
            }
        }
    }

    #copy {
        position: absolute;
        bottom: 0px;
        left: 50%;

        transform: translate(-50%);
        width: 100%;
        max-width: 100%;
        text-align: center;
        margin-bottom: 2.5%;

        span {
            font-size: 0.6em;
        }
    }

    @media ${device.tablet} {
        padding: 5%;
        div {
            width: auto;
            margin-right: 5%;
            margin-bottom: 5%;
        }

        #content {
            padding: 0 10%;
            div {
                font-size: 14px;
            }
        }

        #copy {
            span {
                font-size: 1em;
            }
        }
    }
`;
