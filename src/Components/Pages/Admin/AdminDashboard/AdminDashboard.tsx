import useGetCustomFetch from "../../../../Hooks/useGetCustomFetch";
import {
    BrandType,
    CarServicesType,
    CarWashStationType,
    CityType,
    FuelType,
    GasStationsType,
    ModelType
} from "../../../../Utils/Types";
import { requestUrls } from "../../../../Backend/requestUrls";
import { useEffect, useState } from "react";
import useValidateUser from "../../../../Hooks/useValidateUser";
import {
    AdminBreaker, AdminButtonsBox, AdminContainerItem,
    AdminContainerItems,
    AdminDashboardContainer,
    AdminSectionContainer,
    AdminSectionTitle
} from "./AdminDashboard.css";
import { PageRoutes } from "../../../../Utils/Routes";
import { OverlayNotification } from "../../../Common/OverlayNotification/OverlayNotification";
import { useNavigate } from "react-router-dom";

export const AdminDashboard = () => {
    const { response: brandsResponse, fetcher: fetchBrands } = useGetCustomFetch<BrandType[], string>(requestUrls.brands);
    const { response: modelsResponse, fetcher: fetchModels } = useGetCustomFetch<ModelType[], string>(requestUrls.models);
    const { response: carServicesResponse, fetcher: fetchCarServices } = useGetCustomFetch<CarServicesType[], string>(requestUrls.carServices);
    const { response: carWashStationsResponse, fetcher: fetchCarWashStations } = useGetCustomFetch<CarWashStationType[], string>(requestUrls.carWashStations);
    const { response: citiesResponse, fetcher: fetchCities } = useGetCustomFetch<CityType[], string>(requestUrls.cities);
    const { response: fuelsResponse, fetcher: fetchFuels } = useGetCustomFetch<FuelType[], string>(requestUrls.fuels);
    const { response: gasStationsResponse, fetcher: fetchGasStations } = useGetCustomFetch<GasStationsType[], string>(requestUrls.gasStations);
    const navigate = useNavigate();
    const { token, roles } = useValidateUser();

    const [brands, setBrands] = useState<BrandType[]>([]);
    const [models, setModels] = useState<ModelType[]>([]);
    const [carServices, setCarServices] = useState<CarServicesType[]>([]);
    const [carWashStations, setCarWashStations] = useState<CarWashStationType[]>([]);
    const [cities, setCities] = useState<CityType[]>([]);
    const [fuels, setFuels] = useState<FuelType[]>([]);
    const [gasStations, setGasStations] = useState<GasStationsType[]>([]);

    useEffect(() => {
        fetchBrands(token);
        fetchModels(token);
        fetchCarServices(token);
        fetchCarWashStations(token);
        fetchCities(token);
        fetchFuels(token);
        fetchGasStations(token);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    useEffect(() => {
        if (brandsResponse) {
            setBrands(brandsResponse);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [brandsResponse]);

    useEffect(() => {
        if (modelsResponse) {
            setModels(modelsResponse);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modelsResponse]);

    useEffect(() => {
        if (carServicesResponse) {
            setCarServices(carServicesResponse);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [carServicesResponse]);

    useEffect(() => {
        if (carWashStationsResponse) {
            setCarWashStations(carWashStationsResponse);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [carWashStationsResponse]);

    useEffect(() => {
        if (citiesResponse) {
            setCities(citiesResponse);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [citiesResponse]);

    useEffect(() => {
        if (fuelsResponse) {
            setFuels(fuelsResponse);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fuelsResponse]);

    useEffect(() => {
        if (gasStationsResponse) {
            setGasStations(gasStationsResponse);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gasStationsResponse]);

    const addOperationButtons = (onClick: () => void) => {
        return (
            <AdminButtonsBox>
                <AdminContainerItem onClick={onClick}>Add Item</AdminContainerItem>
            </AdminButtonsBox>
        )
    };

    if (roles !== 'Admin') return <OverlayNotification message={'You are not allowed to enter this page!'} />

    return (
        <AdminDashboardContainer>
            <AdminSectionContainer>
                <AdminSectionTitle>Brands</AdminSectionTitle>
                {brands?.map((brand) => {
                    const finalUrl = PageRoutes.ADMIN_BRANDS.replace(':id', `${brand.id}`);

                    const navigateToDetailPage = () => {
                        navigate(finalUrl);
                    };

                    return (
                        <>
                            <AdminContainerItems onClick={navigateToDetailPage}>
                                {brand.id} - {brand.name}
                            </AdminContainerItems>
                            <div>&nbsp;</div>
                        </>
                    )
                })}
                <div>&nbsp;</div>
                {addOperationButtons(() => navigate(PageRoutes.ADD_ADMIN_BRANDS))}
            </AdminSectionContainer>
            <AdminBreaker />
            <AdminSectionContainer>
                <AdminSectionTitle>Models</AdminSectionTitle>
                {models?.map((model) => {
                    const finalUrl = PageRoutes.ADMIN_MODELS.replace(':id', `${model.id}`);

                    const navigateToDetailPage = () => {
                        navigate(finalUrl);
                    };

                    return (
                        <>
                            <AdminContainerItems onClick={navigateToDetailPage}>
                                {model.id} - {model.name}
                            </AdminContainerItems>
                            <div>&nbsp;</div>
                        </>
                    )
                })}
                <div>&nbsp;</div>
                {addOperationButtons(() => navigate(PageRoutes.ADD_ADMIN_MODELS))}
            </AdminSectionContainer>
            <AdminBreaker />
            <AdminSectionContainer>
                <AdminSectionTitle>Car Services</AdminSectionTitle>
                {carServices?.map((carService) => {
                    const finalUrl = PageRoutes.ADMIN_CAR_SERVICES.replace(':id', `${carService.id}`);

                    const navigateToDetailPage = () => {
                        navigate(finalUrl);
                    };

                    return (
                        <>
                            <AdminContainerItems onClick={navigateToDetailPage}>
                                {carService.id} - {carService.name} - {carService.mainBrand.name} - {carService.carServiceCity.name}
                            </AdminContainerItems>
                            <div>&nbsp;</div>
                        </>
                    )
                })}
                <div>&nbsp;</div>
                {addOperationButtons(() => navigate(PageRoutes.ADD_ADMIN_CAR_SERVICES))}
            </AdminSectionContainer>
            <AdminBreaker />
            <AdminSectionContainer>
                <AdminSectionTitle>Car Wash Stations</AdminSectionTitle>
                {carWashStations?.map((carWashStation) => {
                    const finalUrl = PageRoutes.ADMIN_CAR_WASH_SERVICES.replace(':id', `${carWashStation.id}`);

                    const navigateToDetailPage = () => {
                        navigate(finalUrl);
                    };

                    return (
                        <>
                            <AdminContainerItems onClick={navigateToDetailPage}>
                                {carWashStation.id} - {carWashStation.name} - {carWashStation.city.name}
                            </AdminContainerItems>
                            <div>&nbsp;</div>
                        </>
                    )
                })}
                <div>&nbsp;</div>
                {addOperationButtons(() => navigate(PageRoutes.ADD_ADMIN_CAR_WASH_SERVICES))}
            </AdminSectionContainer>
            <AdminBreaker />
            <AdminSectionContainer>
                <AdminSectionTitle>Cities</AdminSectionTitle>
                {cities?.map((city) => {
                    const finalUrl = PageRoutes.ADMIN_CITIES.replace(':id', `${city.id}`);

                    const navigateToDetailPage = () => {
                        navigate(finalUrl);
                    };

                    return (
                        <>
                            <AdminContainerItems onClick={navigateToDetailPage}>
                                {city.id} - {city.name} - {city.county}
                            </AdminContainerItems>
                            <div>&nbsp;</div>
                        </>
                    )
                })}
                <div>&nbsp;</div>
                {addOperationButtons(() => navigate(PageRoutes.ADD_ADMIN_CITIES))}
            </AdminSectionContainer>
            <AdminBreaker />
            <AdminSectionContainer>
                <AdminSectionTitle>Fuels</AdminSectionTitle>
                {fuels?.map((fuel) => {
                    const finalUrl = PageRoutes.ADMIN_FUEL.replace(':id', `${fuel.id}`);

                    const navigateToDetailPage = () => {
                        navigate(finalUrl);
                    };

                    return (
                        <>
                            <AdminContainerItems onClick={navigateToDetailPage}>
                                {fuel.id} - {fuel.name} - {fuel.type} - {fuel.quality}
                            </AdminContainerItems>
                            <div>&nbsp;</div>
                        </>
                    )
                })}
                <div>&nbsp;</div>
                {addOperationButtons(() => navigate(PageRoutes.ADD_ADMIN_BRANDS))}
            </AdminSectionContainer>
            <AdminBreaker />
            <AdminSectionContainer>
                <AdminSectionTitle>Gas Stations</AdminSectionTitle>
                {gasStations?.map((gasStation) => {
                    const finalUrl = PageRoutes.ADMIN_GAS_STATION.replace(':id', `${gasStation.id}`);

                    const navigateToDetailPage = () => {
                        navigate(finalUrl);
                    };

                    return (
                        <>
                            <AdminContainerItems onClick={navigateToDetailPage}>
                                {gasStation.id} - {gasStation.name} - {gasStation.city.name}
                            </AdminContainerItems>
                            <div>&nbsp;</div>
                        </>
                    )
                })}
                <div>&nbsp;</div>
                {addOperationButtons(() => navigate(PageRoutes.ADD_ADMIN_BRANDS))}
            </AdminSectionContainer>
        </AdminDashboardContainer>
    )
}