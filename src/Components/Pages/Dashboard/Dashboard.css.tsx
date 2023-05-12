import styled from "styled-components";
import { Colors } from "../../../Utils/cssMedia";

export const DashboardContainer = styled.div`
    box-sizing: border-box;  
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100vh;
`;

export const CardContainer = styled.div`
    background-color: ${Colors.brightBlack};
    width: 15rem;
    height: 18rem;
    margin: 10px;
    border-radius: 15px;
    color: ${Colors.white};
    transition: all 0.2s ease;
    padding: 1rem;
  
    :hover {
      background-color: ${Colors.carCardBlack};
      color: ${Colors.white};
      cursor: pointer;
      transform: scale(1.1);
      transition: all 0.2s ease;
    }
`;

export const ImageContainer = styled.div<{ backgroundImg?: string; }>`
    height: 12rem;
    margin-bottom: 15px;
    background-size: cover;
    border-radius: 15px 15px 0 0;
    background-image: url(${(props) => props.backgroundImg});
`;

export const CarName = styled.div`
    left: 0;
    right: 0;
    top: 65%;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    width: 95%;
    height: 21%;
`;

export const CarBrandName = styled.div`
    font-size: large;
`;

export const CarModelName = styled.div`
    font-size: small;
`;



