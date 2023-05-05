import styled from "styled-components";
import { Breakpoints, maxWidthQuery, Colors,} from "../../../Utils/cssMedia";



export const CarWashContainer = styled.div`
    height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
`;

export const CarWashBackgroundImage = styled.img`
    object-fit: cover;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
  
  filter: brightness(0.7);
`;

export const CarWashTitle = styled.h1`
    color: ${Colors.white};
  font-size: 100px;
  margin-top: -100px;

  ${maxWidthQuery(Breakpoints.large)} {
    font-size: 50px;
    margin-top: -100px;
    text-align: center;
  }
`;

export const CarWashDetailText = styled.p`
     margin-top: 8px;
     color: ${Colors.white};
    font-size: 32px;
  ${maxWidthQuery(Breakpoints.medium)} {
    font-size: 30px;
  }
`;

export const CarWashButtonsContainer = styled.div`
    margin-top: 32px;
`;
export const CarWashButton = styled.button.attrs(props => ({
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
`;

export const CardsMainTitle = styled.h1`
padding-top:3vw;
    text-align: center;
`;

export const CardsContainer = styled.div`
     display: flex;
  flex-flow: column;
  align-items: center;
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;  
`;

export const CardsWrapper = styled.div`
    position: relative;
  margin: 50px 0 45px;
`;

export const CardsList = styled.ul`
padding-right:30px;
    margin-bottom: 24px;
    display: flex;
  flex: 1;
  margin: 0 1rem;
  border-radius: 10px;
  ${maxWidthQuery(Breakpoints.medium)} {
    display: flex;
    flex-direction: column;
  }
`;