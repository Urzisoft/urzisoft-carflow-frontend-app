import { FC, useEffect, useRef, useState } from "react";
import { Sidebar } from "../../Common/Sidebar/Sidebar";
import {
    CarBrandName,
    CardContainer,
    CarModelName,
    CarName, ContentContainer,
    DashboardContainer,
    ImageContainer, StripeTitle
} from "./Dashboard.css";
import { BrandType, CarType, CityType } from "../../../Utils/Types";
import { requestUrls } from "../../../Backend/requestUrls";
import useGetCustomFetch from "../../../Hooks/useGetCustomFetch";
import useValidateUser from "../../../Hooks/useValidateUser";
import { OverlayNotification } from "../../Common/OverlayNotification/OverlayNotification";
import { useAuth } from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { PageRoutes } from "../../../Utils/Routes";

export const Dashboard: FC = () => {
    const { isLoggedIn } = useAuth();
    const { response: carsResponse, fetcher: fetchCars } = useGetCustomFetch<CarType[], string>(requestUrls.cars);
    const { response: brandsResponse, fetcher: fetchBrands } = useGetCustomFetch<BrandType[], string>(requestUrls.brands);
    const { response: citiesResponse, fetcher: fetchCities } = useGetCustomFetch<CityType[], string>(requestUrls.cities);
    const navigate = useNavigate();
    const { token, username } = useValidateUser();

    const [cars, setCars] = useState<CarType[]>([]);
    const [brands, setBrands] = useState<BrandType[]>([]);
    const [cities, setCities] = useState<CityType[]>([]);

    const ownBrands = useRef<BrandType[]>([]);
    const brandsSet = new Set<BrandType>();

    useEffect(() => {
        fetchCars(token);
        fetchBrands(token);
        fetchCities(token);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    useEffect(() => {
       if (carsResponse) {
           setCars(carsResponse);
       }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [carsResponse]);

    useEffect(() => {
        if (brandsResponse) {
            setBrands(brandsResponse);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [brandsResponse]);

    useEffect(() => {
        if (citiesResponse) {
            setCities(citiesResponse);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [citiesResponse]);

    useEffect(() => {
        brands.forEach((brand) => {
            cars.forEach((car) => {
                if (brand.name === car.brand.name && car.username === username) {
                    brandsSet.add(brand);
                    ownBrands.current = Array.from(brandsSet);
                }
            })
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cars, brands]);

    if (!isLoggedIn) {
        return <OverlayNotification message={'Authentication required'} />;
    }

    return (
        <>
            <Sidebar />
            <ContentContainer>
                <StripeTitle>These are your cars</StripeTitle>
                <DashboardContainer>
                    {cars.map((car, index) => {
                        const finalUrl = PageRoutes.CAR_DETAILS.replace(':id', `${car.id}`);

                        const navigateToDetailPage = () => {
                            navigate(finalUrl);
                        };

                        if (car.username === username) {
                            return (
                                <CardContainer onClick={navigateToDetailPage} key={index}>
                                    <ImageContainer backgroundImg={car.storageImageUrl}></ImageContainer>
                                    <CarName>
                                        <CarBrandName>{car.brand.name} {car.model.name}</CarBrandName>
                                        <CarModelName>{car.generation} {car.year}</CarModelName>
                                    </CarName>
                                </CardContainer>
                            );
                        }

                        return null;
                    })}
                </DashboardContainer>
                <StripeTitle>These all registered brands in the app</StripeTitle>
                <DashboardContainer>
                    {brands.map((brand, index) => {
                        return (
                            <CardContainer key={index}>
                                <ImageContainer backgroundImg={brand.storageImageUrl}></ImageContainer>
                                <CarName>
                                    <CarBrandName>{brand.name}</CarBrandName>
                                </CarName>
                            </CardContainer>
                        );
                    })}
                </DashboardContainer>
                <StripeTitle>All registered brands by you</StripeTitle>
                <DashboardContainer>
                    {ownBrands.current.map((brand, index) => {
                        return (
                            <CardContainer key={index}>
                                <ImageContainer backgroundImg={brand.storageImageUrl}></ImageContainer>
                                <CarName>
                                    <CarBrandName>{brand.name}</CarBrandName>
                                </CarName>
                            </CardContainer>
                        );
                    })}
                </DashboardContainer>
                <StripeTitle>All registered Cities we have info about</StripeTitle>
                <DashboardContainer>
                    {cities.map((city, index) => {
                        const finalUrl = PageRoutes.CITY_INFO.replace(':id', `${city.id}`);

                        const navigateToDetailPage = () => {
                            navigate(finalUrl);
                        };

                        return (
                            <CardContainer onClick={navigateToDetailPage} key={index}>
                                <ImageContainer backgroundImg={city.storageImageUrl}></ImageContainer>
                                <CarName>
                                    <CarBrandName>{city.name}</CarBrandName>
                                </CarName>
                            </CardContainer>
                        );
                    })}
                </DashboardContainer>
            </ContentContainer>
        </>
    )
}