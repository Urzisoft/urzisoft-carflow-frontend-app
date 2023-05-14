import styled from "styled-components";

export const DropdownSelectContainer = styled.div`
    position: relative;
    background-color: #E6E6E6;
    border-radius: 4px;
    margin-left: 1rem;
    width: 100%;
  
    * {
        margin: 0;
        padding: 0;
        position: relative;
        box-sizing: border-box;
    }
`;

export const DropdownSelectElement = styled.select`
    font-weight: normal;
    max-width: 100%;
    padding: 0.7rem;
    border: none;
    background-color: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-size: 1.2rem;
  
    :active {
        outline: none;
        box-shadow: none;
    }
    
    :focus {
        outline: none;
        box-shadow: none;
    }
  
    :after {
        content: "";
        position: absolute;
        top: 50%;
        width: 0;
        height: 0;
        margin-top: -2px;
        border-top: 5px solid #aaa;
        border-right: 5px solid transparent;
        border-left: 5px solid transparent;
    }
`;

export const DropdownOption = styled.option``;
