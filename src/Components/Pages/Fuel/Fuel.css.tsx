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
   filter:brightness(0.9);
    ${maxWidthQuery(Breakpoints.small)} {
    display: none;
  }
`;


export const FuelMainDescription = styled.div`
  text-align: center;
  padding-top: 15vh;
  color:${Colors.white};
  font-size:3em;
  background-color: ${Colors.darkBlue};

  ${maxWidthQuery(Breakpoints.medium)} {
    font-size: 2em;
  }

  ${maxWidthQuery(Breakpoints.small)} {
    font-size: 1.5em;
  }
`;

export const FuelContentContainer = styled.div`
    background-color: ${Colors.darkBlue};
    color:${Colors.darkBlue};
    
`
export const CircleContainer = styled.div`
    background-color: ${Colors.darkBlue};
    justify-content: space-evenly;
    flex-direction: row;
    margin-left: 9%;
    width: 100%;
    padding-top:10em;
     ${maxWidthQuery(Breakpoints.small)} {
        flex-direction: column; // Change flex direction to column on small screens
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
  background-size: 100%;
  filter:brightness(0.9);
  transition: box-shadow 0.1s ease, transform 0.1s ease; // Add transition for box-shadow and transform

  &:hover {
    border-radius: 49%; // Adjust border-radius to make the box-shadow more visible
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.6); // Adjust the box-shadow to spread around the circle
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
    background-color: ${Colors.darkBlue};
    display: flex;
    justify-content: space-evenly;
    flex-wrap: nowrap; // Add flex-wrap property to wrap elements when there's not enough space
    flex-direction: row;
    
    
    padding-top: 3em;
    padding-bottom: 3em;

    // Add media query for small screens
    ${maxWidthQuery(Breakpoints.small)} {
        flex-direction: column; // Change flex direction to column on small screens
        align-items: center;
        flex-wrap: wrap; // Align items to center on small screens
    }
`;

export const CircleText = styled.div`
    justify-content: space-evenly;
    font-size: 1.5vw;
    color: ${Colors.white};
    margin: 0.5em; // Add margin for better spacing

    ${maxWidthQuery(Breakpoints.medium)} {
        font-size: 2.5vw;
    }

    ${maxWidthQuery(Breakpoints.small)} {
        font-size: 4vw;
        width: 100%; // Add width property to 100% on small screens
        text-align: center; // Align text to center on small screens
    }
`;

export const FuelInformationContainer = styled.div`
  background-color: ${Colors.darkBlue} ;
  width:100%;
  
  padding-top: 5%;
  padding-bottom:10%;
   ${maxWidthQuery(Breakpoints.small)} {
        padding-left: 9%;
    }
`;

export const FuelInformation = styled.text`
    background-color: ${Colors.darkBlue};
    width: 80%;
    height: 30%;
    display: block;
    font-size: 1.5vw;
    color: ${Colors.white};
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
    background-color: ${Colors.darkBlue} /* Change the color as needed */
  }
`;

export const GasPricesWidthContainer = styled.div`
    width:100%;
    background-color: ${Colors.darkBlue};
    padding-bottom: 10vh;
    padding-top:4vh;
`;

export const LegendContainer = styled.div`
  position: relative;
  background-color: ${Colors.darkBlue};
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
  color:${Colors.white};
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
  color:${Colors.white};
  font-size: 1.5rem;
  ${maxWidthQuery(Breakpoints.small)} {
    font-size:1.5rem;
    
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



