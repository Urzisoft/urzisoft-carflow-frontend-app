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

export const Welcome: FC = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        localStorage.setItem("redirect", "true");
        navigate("/dashboard");
    };

    const redirect = localStorage.getItem("redirect");

    return redirect ? (
        <Navigate to="/dashboard" />
    ) : (
        <WelcomeContainer>
            <BackgroundVideo autoPlay muted loop>
                <source src={carVideo} type="video/mp4" />
            </BackgroundVideo>
            <WelcomeTitle>CarFlow</WelcomeTitle>
            <WelcomeText>
                Provides you with the best possible vehicle management
                experience, saving you time and hassle. No more keeping track of
                piles of paperwork or manually recording maintenance
                appointments.
            </WelcomeText>
            <WelcomeButton onClick={handleButtonClick}>Continue</WelcomeButton>
        </WelcomeContainer>
    );
};
