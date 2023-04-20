import styled from "styled-components";
import BackgroundImg from "../../../Assets/Images/BlueCarRegisterBackground.png";
import {  Breakpoints, maxHeightQuery, maxWidthQuery } from "../../../Utils/cssMedia";

export const ResisterBox = styled.div`
    background-color: #011341;
`;

export const RegisterContainer = styled.div`
    max-width: 20%;
    width: 100%;
    background: white;
    padding: 1.5% 2%;
    border-radius: 5px;
    margin: 9% 10% 0;

    ${maxWidthQuery(Breakpoints.medium)} {
        max-width: 90%;
        margin-top: 40%;
        margin-left: 3%;
    }
    ${maxWidthQuery(Breakpoints.large)} {
        max-width: 90%;
        margin-top: 15%;
        margin-left: 3%;
    }
`;

export const RegisterTitle = styled.div`
    font-size: 30px;
    font-weight: 500;
    text-align: center;
`;

export const RegisterUserInputDetailsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 5% 0 3% 0;
`;

export const RegisterButton = styled.button`
    height: 2.8em;
    width: 100%;
    outline: none;
    border-radius: 0.3em;
    background-color: rgb(225, 32, 32);
    font-size: 1.2em;
    border-width: 0px;
    color: white;
    margin-left: 0.9em;
    font-weight: bold;
    text-decoration: none;
    margin-top: 0.7em;

    :hover {
        transition: 5ms;
        background-color: #ca0606;
        cursor: pointer;
    }
`;



export const BackgroundColor = styled.div`
    clip-path: polygon(0 0, 70vw 0, 50vw 100%, 0% 100%);
    background-color: #011341;
    position: absolute;
    bottom:0;
    top:0;
    width: 100%;
    z-index: 1;

    ${maxWidthQuery(Breakpoints.large)} {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        height:auto;
        
    }
    
`;

export const BackgroundImage = styled.div`
    background-image: url(${BackgroundImg});
    background-size:cover;
   position:absolute;
   z-index: -1;
   width:100%;
   height:100%;
   margin:0;
`;
