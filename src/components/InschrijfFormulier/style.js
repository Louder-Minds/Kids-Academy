import styled from 'styled-components';
import { device } from '../../util/screensizes';

export const Container = styled.div`
    max-width: 750px;
    margin: auto;
    padding-top: 5%;
    
    input {
        border: 2px solid #14B09C;
        border-radius: 4px;
        margin-bottom: 5%;
    }

    input:last-child {
        margin-bottom: 0 !important;
    }

    label {
        display: inline-block;
        margin-bottom: 0;
        font-weight: 600;
    }

    input:last-child, input[type=checkbox]:last-child {
        margin-bottom: 0;
    }
    
    .naamkind {
        label {
            display: block;
        }
        input {
            border: 2px solid #14B09C;
            border-radius: 4px;
            height: 36px;
            margin-bottom: 5%;
            width: 100%;
        }
    }

    .naamverzorger {
        label {
            display: block;
        }
        input {
            border: 2px solid #14B09C;
            border-radius: 4px;
            height: 36px;
            margin-bottom: 5%;
            width: 100%;
        }
    }

    .textmessage {
        label {
            display: block;
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
    input[type=checkbox], input[type=radio] {
        margin-right: 5%;
    }
`;