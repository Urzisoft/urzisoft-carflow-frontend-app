import styled from "styled-components";

export const InputBox = styled.div`
    width: 100%;
    padding-left: 1%;
    padding-right: 6%;
    margin-bottom: 9%;
`;

export const Text = styled.input`
    height: 100%;
    width: 100%;

    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 18px;
    padding: 1.5% 2% 1.5% 2%;
    transition: all 0.3 ease;
    background-color: #edefee;
    :focus {
        border-color: #011341;
    }
    :valid {
        border-color: green;
    }
`;
