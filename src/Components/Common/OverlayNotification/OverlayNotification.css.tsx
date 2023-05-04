import styled from "styled-components";
import { Breakpoints, Colors, minWidthQuery } from "../../../Utils/cssMedia";

export const OverlayNotificationContainer = styled.div<{ isClosed: boolean }>`
    position: fixed;
    display: ${(props) => (props.isClosed ? 'none' : 'flex')};
    background: ${Colors.darkBlue};
    background: linear-gradient(24deg, ${Colors.darkBlue} 0%, ${Colors.turquoise} 51%);
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const OverlayNotificationTitle = styled.h1`
    color: ${Colors.white};

    ${minWidthQuery(Breakpoints.medium)} {
        font-size: 3rem;
    }
`;

export const OverlayNotificationImage = styled.img`
    width: 100%;

    ${minWidthQuery(Breakpoints.medium)} {
        width: 70%;
    }

    ${minWidthQuery(Breakpoints.large)} {
        width: 30%;
    }
`;