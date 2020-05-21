import styled from 'styled-components';
import { device } from '../../util/screensizes';

export const Container = styled.div`
    max-width: 750px;
    margin: auto;
    padding-top: 5%;

    input,
    select {
        border: 2px solid #14b09c;
        border-radius: 4px;
        margin-bottom: 5%;
        height: 36px;
    }

    select {
        width: 100%;
    }

    input:last-child {
        margin-bottom: 0 !important;
    }

    button {
        font-weight: 400;
        text-transform: uppercase;
        height: 50px;
        background: #14b09c;
        background: linear-gradient(90deg, #14b09c 0%, #14b0b4 100%);
        border: none;
        color: white;
        padding: 0 5%;
        border-radius: 3px;
        line-height: 1;
        letter-spacing: 0.5px;
        white-space: nowrap;
        text-align: center;
        display: block;
        width: 90%;
        margin: auto;
        margin-bottom: 5%;
        margin-top: 5%;
    }

    textarea {
        width: 100%;
        border: 2px solid #14b09c;
        border-radius: 3px;
    }

    label {
        display: inline-block;
        margin-bottom: 0;
        font-weight: 600;
    }

    input:last-child,
    input[type='checkbox']:last-child {
        margin-bottom: 0;
    }

    .naamkind {
        display: flex;
        flex-direction: column;

        div {
            padding: 0;

            label {
                display: block;
            }
            input {
                border: 2px solid #14b09c;
                border-radius: 4px;
                margin-bottom: 5%;
                width: 100%;
                white-space: normal;
            }
            margin-bottom: 5%;
        }
    }

    .naamverzorger {
        display: flex;
        flex-direction: column;

        div {
            padding: 0;

            label {
                display: block;
            }
            input {
                border: 2px solid #14b09c;
                border-radius: 4px;
                height: 36px;
                margin-bottom: 5%;
                width: 100%;
                white-space: normal;
            }
            margin-bottom: 5%;
        }
    }

    .textmessage {
        label {
            display: block;
        }
    }

    .dagdeel {
        input {
            display: block;
            width: 100%;
        }
    }

    div {
        padding: 5%;
    }
    hr {
        max-width: 90%;
        margin: auto;
        height: 2px;
        background: #37375c;
        border-radius: 10px;
    }
    input[type='checkbox'],
    input[type='radio'] {
        margin-right: 5%;
        margin-bottom: 0;
    }

    .interesse {
        margin-bottom: -5%;
    }

    .klas {
        margin-bottom: -5%;
    }

    .locatie {
        margin-bottom: -5%;
    }

    .betaling {
        div {
            display: flex;
            align-items: center;
            padding: 0;
            margin-bottom: 5%;
        }

        div:last-child {
            margin-bottom: 0;
        }
    }

    h1 {
        padding: 0 5%;
        margin-bottom: 0;
        text-align: center;
    }

    @media ${device.tablet} {
        .naamkind {
            flex-direction: row;
            justify-content: space-between;

            div {
                width: 45%;
                margin-bottom: 0;
            }
        }

        .naamverzorger {
            flex-direction: row;
            justify-content: space-between;
            flex-wrap: wrap;
            margin-bottom: -5%;
            div {
                min-width: 45%;
                justify-content: space-between;
            }
        }

        .klas {
            margin-bottom: -5%;
        }
    }
`;
