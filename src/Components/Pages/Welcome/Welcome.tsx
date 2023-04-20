import {
    WelcomeContainer,
    WelcomeTitle,
    WelcomeButton,
    WelcomeText,
    BackgroundVideo,
} from "./Welcome.css";
import carVideo from "../../../Assets/Videos/CarVideo.mp4";
import { FC } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { PageRoutes } from "../../../Utils/Routes";
import { LOCAL_STORAGE_KEYS } from "../../../Utils/LocalStorage";
import { WelcomePageConfigType } from "../../../Utils/Types";

type WelcomeType = {
    config : WelcomePageConfigType
};

export const Welcome: FC < WelcomeType > = ( {config} ) => {
    const navigate = useNavigate();
    const wasWelcomePageVisited = localStorage.getItem(LOCAL_STORAGE_KEYS.wasWelcomePageVisited);

    const handleButtonClick = () => {
        localStorage.setItem(LOCAL_STORAGE_KEYS.wasWelcomePageVisited, "true");
        navigate(PageRoutes.DASHBOARD);
    };

    return wasWelcomePageVisited ? (
        <Navigate to={PageRoutes.DASHBOARD} />
    ) : (
        <WelcomeContainer>
            <BackgroundVideo autoPlay muted loop>
                <source src={carVideo} type="video/mp4" />
            </BackgroundVideo>
            <WelcomeTitle>{config.title}</WelcomeTitle>
            <WelcomeText>{config.description}</WelcomeText>
            <WelcomeButton onClick={handleButtonClick}>{config.buttonText}</WelcomeButton>
        </WelcomeContainer>
    );
};
