import React, { FC, useEffect, useState } from "react";
import { CardLocation } from "../../Common/CarWashCardItem/CardLocation";
import CarServiceBackground from "../../../Assets/Images/CarServiceBackground.jpg"
import { Sidebar } from "../../Common/Sidebar/Sidebar";
import { CarServicesType } from "../../../Utils/Types";
import { useAuth } from "../../../Hooks/useAuth";
import useGetCustomFetch from "../../../Hooks/useGetCustomFetch";
import { requestUrls } from "../../../Backend/requestUrls";
import useValidateUser from "../../../Hooks/useValidateUser";
import { OverlayNotification } from "../../Common/OverlayNotification/OverlayNotification";
import { getServicesStationStatusByCurrentTime } from "../../../Utils/generalUtils";
import {
    CardsContainer, CardsList,
    CardsSection, CardsWrapper,
    CarLocationBackgroundImage, CarLocationButton,
    CarLocationButtonsContainer, CarLocationContainer,
    CarLocationDetailText,
    CarLocationTitle
} from "../CommonCss/CarLocations.css";

export const CarServices: FC = () => {
    const { isLoggedIn } = useAuth();
    const { response, fetcher } = useGetCustomFetch<CarServicesType[], string>(requestUrls.carServices);
    const { token } = useValidateUser();

    const [stations, setStations] = useState<CarServicesType[]>([]);

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
                <CarLocationBackgroundImage src={CarServiceBackground} />
                <CarLocationTitle>KEEP YOUR CAR MODERN</CarLocationTitle>
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
                                        label={getServicesStationStatusByCurrentTime()}
                                        content={`Brand: ${item.mainBrand.name} | City: ${item.carServiceCity.name}`}
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