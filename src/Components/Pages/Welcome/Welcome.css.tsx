import styled from "styled-components";
import { Breakpoints, maxWidthQuery, Colors } from "../../../Utils/cssMedia";

export const WelcomeContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export const BackgroundVideo = styled.video`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    filter: brightness(0.5);
`;

export const WelcomeTitle = styled.div`
    font-size: 7vw;
    font-weight: bold;
    margin-bottom: 20px;
    padding-top: 4vw;
    padding-left: 8vw;
    color: ${Colors.white};
    @media (max-width: 992px) {
        font-size: 7vh;
    }
`;

export const WelcomeText = styled.div`
    font-size: 2vw;
    line-height: 1.5;
    max-width: 40%;
    padding-top: 3vh;
    padding-left: 8vw;
    color: ${Colors.white};
    @media (max-width: 992px) {
        max-width: 70%;
        font-size: 3vh;
    }
`;

export const WelcomeButton = styled.button`
    background-color: ${Colors.brightRed};
    position: fixed;
    bottom: 7vh;
    right: 6vw;
    padding: 10px 25px 10px 25px;
    color: ${Colors.white};
    font-weight: bold;
    text-decoration: none;
    font-size: 2.5vh;
    transition: all 300ms ease-in;
    border-radius: 0.5rem;

    ${maxWidthQuery(Breakpoints.medium)} {
        position: fixed;
        bottom: 5vh;
        left: 50%;
        transform: translateX(-50%);
        padding: 15px;
        width: 80%;
        text-align: center;
    }

    &:hover {
        background-color: ${Colors.darkRed};
        cursor: pointer;
    }
`;
