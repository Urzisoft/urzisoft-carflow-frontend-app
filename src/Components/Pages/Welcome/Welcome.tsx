import { WelcomeContainer, WelcomeTitle, WelcomeButton, WelcomeText, BackgroundVideo} from "./Welcome.css";
import carVideo from "./Assets/CarVideo.mp4";
import { FC } from "react";

export const Welcome: FC = () => {
  return (
    <WelcomeContainer>
      <BackgroundVideo autoPlay muted loop>
        <source src={carVideo} type="video/mp4" />
      </BackgroundVideo>
      <WelcomeTitle>CarFlow</WelcomeTitle>
      <WelcomeText>
        Provides you with the best possible vehicle management experience,
        saving you time and hassle. No more keeping track of piles of paperwork
        or manually recording maintenance appointments.
      </WelcomeText>

      <WelcomeButton as="a" href="#">
        Continue
      </WelcomeButton>
    </WelcomeContainer>
  );
};
