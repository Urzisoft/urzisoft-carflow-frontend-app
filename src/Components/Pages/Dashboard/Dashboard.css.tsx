import styled from "styled-components";
import { Breakpoints, Colors, maxWidthQuery } from "../../../Utils/cssMedia";

export const ContentContainer = styled.div`
    margin-left: 6rem;
    margin-top: 6rem;

    ${maxWidthQuery(Breakpoints.large)} {
        margin-left: 2.5rem;
    }
`;

export const StripeTitle = styled.h2`
  
`;

export const DashboardContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`;

export const CardContainer = styled.div<{ onClick?: () => void}>`
    background-color: ${Colors.brightBlack};
    width: 15rem;
    height: auto;
    margin: 10px;
    border-radius: 15px;
    color: ${Colors.white};
    transition: all 0.2s ease;
    padding: 2rem;
    text-align: center;
  
    :hover {
      background-color: ${Colors.carCardBlack};
      color: ${Colors.white};
      cursor: pointer;
      transform: scale(1.1);
      transition: all 0.2s ease;
    }
`;

export const ImageContainer = styled.div<{ backgroundImg?: string; }>`
    height: 12em;
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



