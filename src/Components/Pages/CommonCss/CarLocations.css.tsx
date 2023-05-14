import styled from "styled-components";
import { Breakpoints, maxWidthQuery, Colors, } from "../../../Utils/cssMedia";

export const CarLocationContainer = styled.div`
    height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
    object-fit: contain;

    ${maxWidthQuery(Breakpoints.small)} {
        display: none;
    }
`;

export const CarLocationBackgroundImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -1;
    filter: brightness(0.5);
`;

export const CarLocationTitle = styled.h1`
    color: ${Colors.white};
    font-size: 100px;
    margin-top: -100px;

    ${maxWidthQuery(Breakpoints.large)} {
        font-size: 50px;
        margin-top: -100px;
        text-align: center;
    }
`;

export const CarLocationDetailText = styled.p`
    margin-top: 8px;
    color: ${Colors.white};
    font-size: 32px;
    
    ${maxWidthQuery(Breakpoints.medium)} {
        font-size: 30px;
  }
`;

export const CarLocationButtonsContainer = styled.div`
    margin-top: 32px;
`;

export const CarLocationButton = styled.button.attrs(props => ({
    onClick: props.onClick
}))`
    background-color: ${Colors.brightRed};
    bottom: 7vh;
    right: 6vw;
    padding: 10px 25px 10px 25px;
    color: ${Colors.white};
    font-weight: bold;
    text-decoration: none;
    font-size: 2.5vh;
    transition: all 300ms ease-in;
    border-radius: 0.5rem;
    border-color: ${Colors.brightRed};

    &:hover {
        background-color: ${Colors.darkRed};
        border-color: ${Colors.darkRed};
        cursor: pointer;
    }
`;

export const CardsSection = styled.div`
    background: ${Colors.white};
    padding: 1rem;
`;

export const CardsContainer = styled.div`
    flex-flow: column;
    align-items: center;
    width: 100%;
    margin: 0 auto;  
`;

export const CardsWrapper = styled.div`
    position: relative;
    margin: 50px 0 45px;
`;

export const CardsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
  
    ${maxWidthQuery(Breakpoints.medium)} {
        display: flex;
        flex-direction: column;
    }
`;