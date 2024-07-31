import styled from "styled-components";
import { shade } from 'polished';




export const Tilte = styled.h1`
    font-size: 48px;
    color: #3A3A3A;
    max-width: 450px;
    line-height: 56.25px;
    margin-top: 80px;

`;

export const Form = styled.form`
    margin-top: 40px;
    max-width: 700px;
    display: flex;

    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #a3a3a3;

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        width: 210px;
        height: 70px;
        background-color: #04D361;
        border: 0;
        border-radius: 0px 5px 5px 0px;
        color: #FFF;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover {
            background-color: ${shade(0.2, '#04D361')}
        }
    }
`;