import React, { FC, useEffect, useState } from "react";
import { CardsSection, CardsMainTitle, CarWashBackgroundImage, CarWashButton, CarWashButtonsContainer, CarWashContainer, CarWashDetailText, CarWashTitle, CardsContainer, CardsWrapper, CardsList } from "./CarWash.css";
import { CarWashCardItem } from "../../Common/CarWashCardItem/CarWashCardItem";
import CarWashBackground from "../../../Assets/Images/CarWashBackgroundImage.jpg"
import JetPointImage from "../../../Assets/Images/JetPoint.jpeg"
import EcoservWash from "../../../Assets/Images/Ecoservwash.jpg"
import UltraProWash from "../../../Assets/Images/UltraPro.png"
import { Sidebar } from "../../Common/Sidebar/Sidebar";
import { Car, CarWashStations } from "../../../Utils/Types";
import { useAuth } from "../../../Hooks/useAuth";
import useGetCustomFetch from "../../../Hooks/useGetCustomFetch";
import { requestUrls } from "../../../Backend/requestUrls";
import useValidateUser from "../../../Hooks/useValidateUser";

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
                <CardsMainTitle>Check out these EPIC car washes</CardsMainTitle>
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