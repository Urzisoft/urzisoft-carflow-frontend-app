import styled from "styled-components";

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
  filter: brightness(0.3);
`;

export const WelcomeTitle = styled.div`
  font-size: 7vw;
  font-weight: bold;
  margin-bottom: 20px;
  padding-top: 4vw;
  padding-left: 8vw;
  color: white;
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
  color:white;
   @media (max-width: 992px) {
    max-width: 70%;
    font-size: 3vh;
  }
`;

export const WelcomeButton = styled.button`
  background-color: #e12020;
  position: fixed;
  bottom: 7vh;
  right: 6vw;
  padding: 10px 25px 10px 25px;
  border-radius: 5px;
  color: #cccccc;
  font-weight: bold;
  text-decoration: none;
  font-size: 2.5vh;

  @media (max-width: 992px) {
    position: fixed;
    bottom: 5vh;
    left: 50%;
    transform: translateX(-50%);
    padding: 15px;
    width: 80%;
    text-align: center;
  }
`;
