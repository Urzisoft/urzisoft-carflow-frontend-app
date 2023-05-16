import { FC, useState } from 'react';
import { useRedirectDashboard } from '../../../Hooks/useRedirectDashboard';
import { WelcomeButton } from "../../Pages/User/Welcome/Welcome.css";
import OverlayNotificationBackground from "../../../Assets/Images/OverlayNotification.png";
import {
    OverlayNotificationContainer,
    OverlayNotificationImage,
    OverlayNotificationTitle
} from "./OverlayNotification.css";

type OverlayNotificationType = {
    message: string;
};

export const OverlayNotification: FC<OverlayNotificationType> = ({ message }) => {
    const { navigateHome } = useRedirectDashboard();
    const [isClosed, setIsClosed] = useState<boolean>(false);

    const onButtonClick = () => {
        setIsClosed(true);
        navigateHome();
    };

    return (
        <OverlayNotificationContainer isClosed={isClosed}>
            <OverlayNotificationTitle>{ message }</OverlayNotificationTitle>
            <OverlayNotificationImage src={OverlayNotificationBackground} alt={OverlayNotificationBackground}/>
            <WelcomeButton onClick={onButtonClick}>go home</WelcomeButton>
        </OverlayNotificationContainer>
    );
};