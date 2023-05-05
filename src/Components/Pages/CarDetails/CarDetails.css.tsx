import { Link } from "react-router-dom";
import styled from "styled-components";
import { Breakpoints, maxWidthQuery, Colors } from "../../../Utils/cssMedia";

type ImgProps = {
    backgroundImg?: string;
};

export const CarDetailContainer = styled.div`
   height: 80vh;  
   margin: auto;
   max-width: 75%;
   margin-top: 3%;
   background-color: ${Colors.gray};
`;
export const DetailsContainer = styled.div`
    width: 50%;
    padding: 30px;
     ${maxWidthQuery(Breakpoints.small)} {
    display: none;
  }
`;

export const Description = styled.div`
    height: 80vh;
`;

export const TitleContainer = styled.div`
    height: 20%;
    width: 50%;
    font-family:    Arial, Helvetica, sans-serif;
    font-weight:    bold;
`;

export const BackButton = styled(Link)`
    color: ${Colors.brightRed};
    font-size: 1vw;
    float: left;
    margin: 3%;
    border-radius: 50%;
    transition: 0.2s;
     &:hover {
        background-color: ${Colors.black};
        border-radius: 50%;
        font-size: 1.4vw;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.6);
        transform: scale(1.05);
        transition: 0.2s;
    }
`;
export const BrandContainer = styled.div`
    height: 50%;
    margin: 2%;
    position: relative;
    left: 8%;
    top 20%;
    font-size: 1.5vw;
    color: ${Colors.black};
`;

export const ModelContainer = styled.div`
    color: ${Colors.brightRed};
    position: relative;
    left: 13%;
    font-size: 2.5vw;
    margin: 2%;
`;

export const ImageContainer = styled.div`
    width=50%
    float: left;
`;
export const Image = styled.div<ImgProps>`
  width: 35vw;
  height: 20vw;
  position: relative;
  left: 2%;
  top: 50px;
  border-radius: 3%;
  background-image: url(${(props) => props.backgroundImg});
  background-size: 100%;
  transition: 0.2s;
   &:hover {
    transform: scale(1.05);
    transition: 0.2s;
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
export const DetailsGrid = styled.div`
    display: grid;
    grid-template-columns: 80% 80%;
    gap: 30px;
`;
export const DetailsItem = styled.div`
    padding: 20px;
    font-size: 15px;
    background-color: ${Colors.openGray};
    text-align: center;
    transition: 0.2s;
    &:hover {
        transform: scale(1.05);
        transition: 0.2s;
`;
export const ContentGrid = styled.div`
    display: grid;
    grid-template-columns: auto 50%;
    justify-content: space-evenly;
    flex-direction: row;
    width: 100%;
`;