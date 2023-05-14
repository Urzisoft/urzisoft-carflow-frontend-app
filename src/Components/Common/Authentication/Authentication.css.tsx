import styled from "styled-components";
import { Breakpoints, maxWidthQuery } from "../../../Utils/cssMedia";
import { Colors } from "../../../Utils/cssMedia";

type AuthenticationBackgroundColorProps = {
    backgroundColor?: string;
    shouldNotHaveClipPath?: boolean;
    isNotAuthScreen?: boolean;
};

type BackgroundImageProps = {
    backgroundImg: string;
};

type AuthenticationButtonProps = {
    backgroundColor?: string;
    hoverBackgroundColor?: string;
};

export const FormGeneralBox = styled.div`
    background-color: ${Colors.darkBlue};
`;

export const FormGeneralContainer = styled.div<{ maxWidth?: number, isNotAuthScreen?: boolean }>`
    max-width: ${(props) => props.maxWidth || 20}%;
    width: 100%;
    background: ${Colors.white};
    padding: 1.5% 2%;
    border-radius: 5px;
    ${(props) => props.isNotAuthScreen ? 'margin: 5rem auto;' : 'margin: 9% 10% 0;'}
    
    ${maxWidthQuery(Breakpoints.medium)} {
        max-width: 90%;
        margin-top: 40%;
        margin-left: 3%;
    }
    ${maxWidthQuery(Breakpoints.large)} {
        max-width: 90%;
        margin-top: 25%;
        margin-left: 3%;
    }
`;

export const FormTitle = styled.div`
    font-size: 30px;
    font-weight: 500;
    text-align: center;
`;

export const FormUserInputDetailsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    margin: 5% 0 3% 0;
`;

export const FormButton = styled.button<AuthenticationButtonProps>`
    height: 2.8em;
    width: 100%;
    outline: none;
    border-radius: 0.3em;
    background-color: ${(props) => props.backgroundColor || Colors.brightRed};
    font-size: 1.2em;
    border-width: 0;
    color: ${Colors.white};
    font-weight: bold;
    text-decoration: none;
    margin-top: 0.7em;

    :hover {
        transition: 5ms;
        background-color: ${(props) => props.hoverBackgroundColor || Colors.darkRed};
        cursor: pointer;
    }
`;

export const FormGeneralBackgroundColor = styled.div<AuthenticationBackgroundColorProps>`
    ${(props) => !props.shouldNotHaveClipPath ? 'clip-path: polygon(0 0, 70vw 0, 50vw 100%, 0% 100%)' : 'none'};
    background-color: ${(props) => props.backgroundColor || Colors.darkBlue};
    position: absolute;
    top: 0;
    ${(props) => !props.isNotAuthScreen ? 'bottom: 0;' : 'none'}
    width: 100%;
    z-index: 1;

    ${maxWidthQuery(Breakpoints.large)} {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        height: auto;
    }
`;

export const AuthenticationBackgroundImage = styled.div<BackgroundImageProps>`
    background-image: url(${(props) => props.backgroundImg});
    background-color: ${Colors.darkBlue};
    background-size: cover;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    margin: 0;
`;
