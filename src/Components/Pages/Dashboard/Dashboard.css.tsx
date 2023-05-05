import styled from "styled-components";

type ImgProps = {
    backgroundImg?: string;
};


export const DashboardContainer = styled.div`
    box-sizing: border-box;  
    padding: 0;
    margin: 0;
    background: rgb(27, 27, 27);
  
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  
    width: 100%;
    height: 100vh;
`;

export const CarsGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 30px;
    border: solid black;
    background-color: ghostwhite;
    width: 75%;
    height: 60%;
    padding: 10px;
    border-radius: 25px;
`;

export const CardContainer = styled.div`
    background-color: white;
    width: 270px;
    height: 300px;
    margin: 10px;
    border-radius: 15px;
    color: black;
  
    :hover {
      background-color: rgb(62, 62, 62);
      color: white;
      cursor: pointer;
      transform: scale(1.1);
      transition: all 1s ease;
    }
`;

export const ImageContainer = styled.div<ImgProps>`
    height: 170px;
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



