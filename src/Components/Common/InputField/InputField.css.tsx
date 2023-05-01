import styled from "styled-components";
import { Colors } from "../../../Utils/cssMedia";

export const InputBox = styled.div`
    width: 100%;
    padding-left: 1%;
    padding-right: 6%;
    margin-bottom: 9%;
`;

export const InputText = styled.input`
    height: 100%;
    width: 100%;

    border-radius: 5px;
    border: 1px solid ${Colors.gray};
    font-size: 18px;
    padding: 1.5% 2% 1.5% 2%;
    transition: all 0.3s ease;
    background-color: ${Colors.openGray};
  
    :focus {
        border-color: ${Colors.darkBlue};
    }
  
    :valid {
        border-color: ${Colors.green};
    }
`;
