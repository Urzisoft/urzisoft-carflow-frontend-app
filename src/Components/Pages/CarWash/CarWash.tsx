import React, { FC, useEffect, useState } from "react";
import {
    CardsContainer,
    CardsList,
    CardsSection,
    CardsWrapper,
    CarWashBackgroundImage,
    CarWashButton,
    CarWashButtonsContainer,
    CarWashContainer,
    CarWashDetailText,
    CarWashTitle
} from "./CarWash.css";
import { CarWashCardItem } from "../../Common/CarWashCardItem/CarWashCardItem";
import CarWashBackground from "../../../Assets/Images/CarWashBackgroundImage.jpg"
import { Sidebar } from "../../Common/Sidebar/Sidebar";
import { CarWashStations } from "../../../Utils/Types";
import { useAuth } from "../../../Hooks/useAuth";
import useGetCustomFetch from "../../../Hooks/useGetCustomFetch";
import { requestUrls } from "../../../Backend/requestUrls";
import useValidateUser from "../../../Hooks/useValidateUser";
import { OverlayNotification } from "../../Common/OverlayNotification/OverlayNotification";

export const CarWash: FC = () => {
    const { isLoggedIn } = useAuth();
    const { response, fetcher } = useGetCustomFetch<CarWashStations[], string>(requestUrls.carWashStations);
    const { token } = useValidateUser();

    const [stations, setStations] = useState<CarWashStations[]>([]);

    useEffect(() => {
        fetcher(token);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    useEffect(() => {
        if (response) {
            setStations(response);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [response]);

    const scrollToCardsSection = () => {
        const cardsSection = document.getElementById("cards-section");
        if (cardsSection) {
            cardsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const getStationStatusByCurrentTime = (): string => {
        const currentHour = new Date().getHours();
        return (currentHour >= 8 && currentHour < 20) ? "Open" : "Closed";
    }

    if (!isLoggedIn) {
        return <OverlayNotification message={'Authentication required'} />;
    }

    return (
        <>
            <Sidebar />
            <CarWashContainer>
                <CarWashBackgroundImage src={CarWashBackground} />
                <CarWashTitle>KEEP YOUR CAR CLEAN</CarWashTitle>
                <CarWashDetailText>What are you waiting for?</CarWashDetailText>
                <CarWashButtonsContainer>
                    <CarWashButton onClick={scrollToCardsSection}>GET STARTED</CarWashButton>
                </CarWashButtonsContainer>
            </CarWashContainer>
            <CardsSection id="cards-section">
                <CardsContainer>
                    <CardsWrapper>
                        <CardsList>
                            {stations.map((item) => {
                                return (
                                    <CarWashCardItem
                                        src={item.storageImageUrl}
                                        text={`${item.name} ${item.address}`}
                                        label={getStationStatusByCurrentTime()}
                                        content={`City: ${item.city.name} | Price: ${item.standardPrice} EURO | Rank ${item.rank}`}
                                    />
                                )
                            })}
                        </CardsList>
                    </CardsWrapper>
                </CardsContainer>
            </CardsSection>
        </>
    );
}