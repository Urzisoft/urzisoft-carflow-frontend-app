import styled from "styled-components";
import { Colors } from "../../../Utils/cssMedia";

export const InputBox = styled.div`
    width: 100%;
    padding-left: 1%;
    padding-right: 6%;
    margin-bottom: 9%;
`;

export const InputText = styled.input<{ isValid?: boolean, isEligible?: boolean }>`
    height: 100%;
    width: 100%;
    border-radius: 5px;
    border: 2px solid ${(props) => props.isEligible ? (props.isValid ? Colors.turquoise : Colors.brightRed) : Colors.white};
    font-size: 18px;
    padding: 1.5% 2% 1.5% 2%;
    transition: all 0.3s ease;
    background-color: ${Colors.openGray};   

    :focus{
        outline: none;
    }
`;

export const InputValidation = styled.p`
    color: ${Colors.brightRed} ;
    font-size: 14px;
    font-weight: bold;
    margin-top: -10px;
`;