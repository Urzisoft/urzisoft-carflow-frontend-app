import styled from "styled-components";
import { Breakpoints, maxWidthQuery, Colors } from "../../../Utils/cssMedia";
import fuelDetailBackgroundImage from "../../../Assets/Images/FuelDetailBackgroundImage.jpg"

type BackgroundImageProps = {
    backgroundImg?: string;
};

type LegendSquareColor = {
    squareColor?: string;
}

export const FuelContainer = styled.div`
   background-image: url(${fuelDetailBackgroundImage});
   background-size: cover;
   height: 80vh;  
   filter: brightness(0.9);
  
    ${maxWidthQuery(Breakpoints.small)} {
        display: none;
    }
`;

export const FuelMainDescription = styled.div`
    text-align: center;
    padding-top: 15vh;
    color:${Colors.black};
    font-size: 3em;
    font-weight: bold;
  
    ${maxWidthQuery(Breakpoints.medium)} {
        font-size: 2em;
    }
  
    ${maxWidthQuery(Breakpoints.small)} {
        font-size: 1.5em;
    }
`;

export const CircleContainer = styled.div`
    justify-content: space-evenly;
    flex-direction: row;
    margin-left: 9%;
    width: 100%;
    padding-top:10em;
  
     ${maxWidthQuery(Breakpoints.small)} {
        flex-direction: column;
        align-items: center;
        display: flex;
        margin-left: 0;
        padding-top:5em;
     }
`;

export const Circle = styled.div<BackgroundImageProps>`
    justify-content: space-evenly;
    width: 15vw;
    height: 15vw;
    border-radius: 50%;
    background-size: cover;
    background-image: url(${(props) => props.backgroundImg});
    filter:brightness(0.9);
    transition: box-shadow 0.1s ease, transform 0.1s ease;
    
    &:hover {
        border-radius: 49%;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.6);
        transform: scale(1.05);
    }
    ${maxWidthQuery(Breakpoints.medium)} {
        width: 20vw;
        height: 20vw;
    }
    ${maxWidthQuery(Breakpoints.small)} {
        width: 30vw;
        height: 30vw;
    }
`;

export const CircleTextContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: nowrap; 
    flex-direction: row;
  
    ${maxWidthQuery(Breakpoints.small)} {
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
    }
`;

export const CircleText = styled.div`
    justify-content: space-evenly;
    font-size: 1.5vw;
    color: ${Colors.black};
    margin: 0.5em;
    font-weight: bold;
  
    ${maxWidthQuery(Breakpoints.medium)} {
        font-size: 2.5vw;
    }
  
    ${maxWidthQuery(Breakpoints.small)} {
        font-size: 4vw;
        width: 100%;
        text-align: center;
    }
`;

export const FuelInformationContainer = styled.div`
    width:100%;
    padding-top: 5%;
    padding-bottom:10%;

    ${maxWidthQuery(Breakpoints.small)} {
        padding-left: 9%;
    }
`;

export const FuelInformation = styled.text`
    width: 80%;
    height: 30%;
    display: block;
    font-size: 1.5vw;
    color: ${Colors.black};
    padding-top: 2%;
    padding-left: 9%;
    line-height: 1.6;
  
    ${maxWidthQuery(Breakpoints.medium)} {
        font-size: 2vw;
        padding-left: 5%;
    }
  
    ${maxWidthQuery(Breakpoints.small)} {
        font-size: 4vw;
        padding-left: 2%;
    }
`;

export const GasPricesChartContainer = styled.div`
    width: 80%;
    padding-left: 10%;
    position: relative;
    background-color: white;
  
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 10%;
    }
`;

export const GasPricesWidthContainer = styled.div`
    width:100%;
    padding-bottom: 10vh;
    padding-top:4vh;
`;

export const LegendContainer = styled.div`
    position: relative;
    padding-bottom: 1px;

    ${maxWidthQuery(Breakpoints.small)} {
        padding-left: 9%;
    }
`;
export const LegendTitle = styled.div`
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    margin-left: -9%;
    color:${Colors.black};
    
    ${maxWidthQuery(Breakpoints.small)} {
        font-size:1.5rem;
    }
`;

export const LegendList = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 2rem 0;
  
    ${maxWidthQuery(Breakpoints.small)} {
      display: inline-block;
    }
`;

export const LegendListElement = styled.li`
    margin-right: 2rem;
    color: ${Colors.black};
    font-size: 1.5rem;
  
    ${maxWidthQuery(Breakpoints.small)} {
       font-size: 1.5rem;
    }
`;

export const LegendListSquare = styled.span<LegendSquareColor>`
    display: inline-block;
    width: 2rem;
    height: 2rem;
    background-color: ${(props) => props.squareColor};
    margin-right: 1rem;
  
    ${maxWidthQuery(Breakpoints.small)} {
        width:1rem;
        height:1rem;
      }
`;