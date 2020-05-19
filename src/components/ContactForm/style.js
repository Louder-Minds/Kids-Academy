import styled from 'styled-components';

export const Container = styled.div`
    max-width: 500px;
    margin: auto;
    
    input {
        border: 2px solid #14B09C;
        border-radius: 4px;
        margin-bottom: 5%;
    }
    label {
        display: inline-block;
        margin-bottom: 0;
    }

    input:last-child, input[type=checkbox]:last-child {
        margin-bottom: 0;
    }
    
    .naamkind {
        label {
            display: block;
        }
    }

    .naamverzorger {
        label {
            display: block;
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