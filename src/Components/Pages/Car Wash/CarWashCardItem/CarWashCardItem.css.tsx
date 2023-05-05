import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Breakpoints, maxWidthQuery, minWidthQuery } from "../../../../Utils/cssMedia";
import { Colors } from "../../../../Utils/cssMedia";

export const CardItem = styled.li`
  display: flex;
  flex: 1; 
  border-radius: 10px;
  ${minWidthQuery(Breakpoints.medium)} {
    display: flex; 
  }
  
`;

export const CardLink = styled(Link).attrs(props => ({ to: props.to }))`
  display: flex;
  flex-flow: column;
  width: 100%;
  margin-right:3vw;
  margin-bottom:3vw;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
  -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
  
`;

export const CardImageWrapper = styled.figure`
  position: relative;
  width: 100%;
  padding-top: 67%;
  margin-left:0;
  margin-top:0;
  margin-right:30;
  overflow: hidden;
  :after {
  content: attr(data-category);
  position: absolute;
  bottom: 0;
  margin-left: 10px;
  padding: 6px 8px;
  max-width: calc((100%) - 60px);
  font-size: 12px;
  font-weight: 700;
  color: ${Colors.white};
  background-color: ${Colors.green};
  box-sizing: border-box;
  }
`;

export const CardImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0 ;
  display: block;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  object-fit: cover;
  transition: all 0.2s linear;
  :hover {
  transform: scale(1.1);
}
`;

export const CardInfo = styled.div`
    padding: 20px 30px 30px;
`;

export const CardText = styled.h5`
    color: ${Colors.black};
  font-size: 18px;
  line-height: 24px;
`;
