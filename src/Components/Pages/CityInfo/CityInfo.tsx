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
import { CarServicesType, CarWashStationType, CityType, GasStationsType } from "../../../Utils/Types";
import { useAuth } from "../../../Hooks/useAuth";
import useGetCustomFetch from "../../../Hooks/useGetCustomFetch";
import { requestUrls } from "../../../Backend/requestUrls";
import useValidateUser from "../../../Hooks/useValidateUser";
import { OverlayNotification } from "../../Common/OverlayNotification/OverlayNotification";
import { getServicesStationStatusByCurrentTime, getWashStationsStatusByCurrentTime } from "../../../Utils/generalUtils";
import { useParams } from "react-router-dom";
import { ContentContainer, StripeTitle } from "../Dashboard/Dashboard.css";

export const CityInfo: FC = () => {
    const { id } = useParams();
    const { isLoggedIn } = useAuth();
    const { token } = useValidateUser();
    const cityObjectRequestUrl = requestUrls.city.replace(':id', `${id}`);
    const { response: carWashResponse, fetcher: carWashFetcher } = useGetCustomFetch<CarWashStationType[], string>(requestUrls.carWashStations);
    const { response: carGasStationsResponse, fetcher: carGasStationsFetcher } = useGetCustomFetch<GasStationsType[], string>(requestUrls.gasStations);
    const { response: carServicesResponse, fetcher: carServicesFetcher } = useGetCustomFetch<CarServicesType[], string>(requestUrls.carServices);
    const { response: cityResponse, fetcher: cityFetcher } = useGetCustomFetch<CityType, string>(cityObjectRequestUrl);

    const [carWashStations, setCarWashStations] = useState<CarWashStationType[]>([]);
    const [carGasStations, setCarGasStations] = useState<GasStationsType[]>([]);
    const [carServices, setCarServices] = useState<CarServicesType[]>([]);

    const [city, setCity] = useState<CityType>();

    useEffect(() => {
        carWashFetcher(token);
        cityFetcher(token);
        carGasStationsFetcher(token);
        carServicesFetcher(token);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    useEffect(() => {
        if (carWashResponse) {
            setCarWashStations(carWashResponse);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [carWashResponse]);

    useEffect(() => {
        if (cityResponse) {
            setCity(cityResponse);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cityResponse]);

    useEffect(() => {
        if (carGasStationsResponse) {
            setCarGasStations(carGasStationsResponse);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [carGasStationsResponse]);

    useEffect(() => {
        if (carServicesResponse) {
            setCarServices(carServicesResponse);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [carServicesResponse]);

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
                <CarLocationBackgroundImage src={city?.storageImageUrl} />
                <CarLocationTitle>INFO ABOUT {city?.name}</CarLocationTitle>
                <CarLocationDetailText>Check out!</CarLocationDetailText>
                <CarLocationButtonsContainer>
                    <CarLocationButton onClick={scrollToCardsSection}>SCROLL DOWN</CarLocationButton>
                </CarLocationButtonsContainer>
            </CarLocationContainer>
            <CardsSection id="cards-section">
                <CardsContainer>
                    <CardsWrapper>
                        <ContentContainer>
                            <StripeTitle>All the wash stations from {city?.name}</StripeTitle>
                        </ContentContainer>
                        <CardsList>
                            {carWashStations.map((carWashStation) => {
                                if (carWashStation.city.name === city?.name) {
                                    return (
                                        <CardLocation
                                            src={carWashStation.storageImageUrl}
                                            text={`${carWashStation.name} - ${carWashStation.address}`}
                                            label={getWashStationsStatusByCurrentTime()}
                                            content={`City: ${carWashStation.city.name} | Price: ${carWashStation.standardPrice} EURO | Rank ${carWashStation.rank}`}
                                        />
                                    )
                                }
                            })}
                        </CardsList>
                    </CardsWrapper>
                    <CardsWrapper>
                        <ContentContainer>
                            <StripeTitle>All the gas stations from {city?.name}</StripeTitle>
                        </ContentContainer>
                        <CardsList>
                            {carGasStations.map((carGasStation) => {
                                if (carGasStation.city.name === city?.name) {
                                    return (
                                        <CardLocation
                                            src={carGasStation.storageImageUrl}
                                            text={`${carGasStation.name} - ${carGasStation.address}`}
                                            label={'Open'}
                                            content={`City: ${carGasStation.city.name} | Main Fuel: ${carGasStation.fuel.name} EURO | Rank ${carGasStation.rank}`}
                                        />
                                    )
                                }
                            })}
                        </CardsList>
                    </CardsWrapper>
                    <CardsWrapper>
                        <ContentContainer>
                            <StripeTitle>All the car services from {city?.name}</StripeTitle>
                        </ContentContainer>
                        <CardsList>
                            {carServices.map((carService) => {
                                if (carService?.carServiceCity.name === city?.name) {
                                    return (
                                        <CardLocation
                                            src={carService.storageImageUrl}
                                            text={`${carService.name} - ${carService.address}`}
                                            label={getServicesStationStatusByCurrentTime()}
                                            content={`Brand: ${carService.mainBrand.name} | City: ${carService.carServiceCity.name}`}
                                        />
                                    )
                                }
                            })}
                        </CardsList>
                    </CardsWrapper>
                </CardsContainer>
            </CardsSection>
        </>
    );
}