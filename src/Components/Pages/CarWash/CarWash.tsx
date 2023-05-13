import React, { FC, useEffect, useState } from "react";
import {
    CardsContainer,
    CardsList,
    CardsSection,
    CardsWrapper,
    CarLocationBackgroundImage,
    CarLocationButton,
    CarLocationButtonsContainer,
    CarLocationContainer,
    CarLocationDetailText,
    CarLocationTitle
} from "../CommonCss/CarLocations.css";
import { CardLocation } from "../../Common/CarWashCardItem/CardLocation";
import CarWashBackground from "../../../Assets/Images/CarWashBackgroundImage.jpg"
import { Sidebar } from "../../Common/Sidebar/Sidebar";
import { CarWashStationType } from "../../../Utils/Types";
import { useAuth } from "../../../Hooks/useAuth";
import useGetCustomFetch from "../../../Hooks/useGetCustomFetch";
import { requestUrls } from "../../../Backend/requestUrls";
import useValidateUser from "../../../Hooks/useValidateUser";
import { OverlayNotification } from "../../Common/OverlayNotification/OverlayNotification";
import { getWashStationsStatusByCurrentTime } from "../../../Utils/generalUtils";

export const CarWash: FC = () => {
    const { isLoggedIn } = useAuth();
    const { response, fetcher } = useGetCustomFetch<CarWashStationType[], string>(requestUrls.carWashStations);
    const { token } = useValidateUser();

    const [stations, setStations] = useState<CarWashStationType[]>([]);

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

    if (!isLoggedIn) {
        return <OverlayNotification message={'Authentication required'} />;
    }

    return (
        <>
            <Sidebar />
            <CarLocationContainer>
                <CarLocationBackgroundImage src={CarWashBackground} />
                <CarLocationTitle>KEEP YOUR CAR CLEAN</CarLocationTitle>
                <CarLocationDetailText>What are you waiting for?</CarLocationDetailText>
                <CarLocationButtonsContainer>
                    <CarLocationButton onClick={scrollToCardsSection}>GET STARTED</CarLocationButton>
                </CarLocationButtonsContainer>
            </CarLocationContainer>
            <CardsSection id="cards-section">
                <CardsContainer>
                    <CardsWrapper>
                        <CardsList>
                            {stations.map((item) => {
                                return (
                                    <CardLocation
                                        src={item.storageImageUrl}
                                        text={`${item.name} - ${item.address}`}
                                        label={getWashStationsStatusByCurrentTime()}
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