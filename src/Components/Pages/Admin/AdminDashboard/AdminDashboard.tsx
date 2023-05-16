import useGetCustomFetch from "../../../../Hooks/useGetCustomFetch";
import { BrandType, CarServicesType, CarWashStationType, CityType, FuelType, ModelType } from "../../../../Utils/Types";
import { requestUrls } from "../../../../Backend/requestUrls";
import { useEffect, useState } from "react";
import useValidateUser from "../../../../Hooks/useValidateUser";
import {
    AdminBreaker, AdminButtonsBox, AdminContainerItem,
    AdminContainerItems,
    AdminDashboardContainer, AdminPaddingLiner,
    AdminSectionContainer,
    AdminSectionTitle
} from "./AdminDashboard.css";
import { PageRoutes } from "../../../../Utils/Routes";
import { OverlayNotification } from "../../../Common/OverlayNotification/OverlayNotification";

export const AdminDashboard = () => {
    const { response: brandsResponse, fetcher: fetchBrands } = useGetCustomFetch<BrandType[], string>(requestUrls.brands);
    const { response: modelsResponse, fetcher: fetchModels } = useGetCustomFetch<ModelType[], string>(requestUrls.models);
    const { response: carServicesResponse, fetcher: fetchCarServices } = useGetCustomFetch<CarServicesType[], string>(requestUrls.carServices);
    const { response: carWashStationsResponse, fetcher: fetchCarWashStations } = useGetCustomFetch<CarWashStationType[], string>(requestUrls.carWashStations);
    const { response: citiesResponse, fetcher: fetchCities } = useGetCustomFetch<CityType[], string>(requestUrls.cities);
    const { response: fuelsResponse, fetcher: fetchFuels } = useGetCustomFetch<FuelType[], string>(requestUrls.fuels);

    const { token, roles } = useValidateUser();

    const [brands, setBrands] = useState<BrandType[]>([]);
    const [models, setModels] = useState<ModelType[]>([]);
    const [carServices, setCarServices] = useState<CarServicesType[]>([]);
    const [carWashStations, setCarWashStations] = useState<CarWashStationType[]>([]);
    const [cities, setCities] = useState<CityType[]>([]);
    const [fuels, setFuels] = useState<FuelType[]>([]);

    useEffect(() => {
        fetchBrands(token);
        fetchModels(token);
        fetchCarServices(token);
        fetchCarWashStations(token);
        fetchCities(token);
        fetchFuels(token);

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

    const addOperationButtons = () => {
        return (
            <AdminButtonsBox>
                <AdminContainerItem>Add Item</AdminContainerItem>
            </AdminButtonsBox>
        )
    };

    if (roles !== 'Admin') return <OverlayNotification message={'You are not allowed to enter this page!'} />

    return (
        <AdminDashboardContainer>
            <AdminSectionContainer>
                <AdminSectionTitle>Brands</AdminSectionTitle>
                {brands?.map((brand) => {
                    return (
                        <>
                            <AdminContainerItems to={PageRoutes.ADD_BRAND}>
                                {brand.id} - {brand.name}
                            </AdminContainerItems>
                            <div>&nbsp;</div>
                        </>
                    )
                })}
                <div>&nbsp;</div>
                {addOperationButtons()}
            </AdminSectionContainer>
            <AdminBreaker />
            <AdminSectionContainer>
                <AdminSectionTitle>Models</AdminSectionTitle>
                {models?.map((model) => {
                    return (
                        <>
                            <AdminContainerItems to={PageRoutes.ADD_BRAND}>
                                {model.id} - {model.name}
                            </AdminContainerItems>
                            <div>&nbsp;</div>
                        </>
                    )
                })}
                <div>&nbsp;</div>
                {addOperationButtons()}
            </AdminSectionContainer>
            <AdminBreaker />
            <AdminSectionContainer>
                <AdminSectionTitle>Car Services</AdminSectionTitle>
                {carServices?.map((carService) => {
                    return (
                        <>
                            <AdminContainerItems to={PageRoutes.ADD_BRAND}>
                                {carService.id} - {carService.name} - {carService.mainBrand.name} - {carService.carServiceCity.name}
                            </AdminContainerItems>
                            <div>&nbsp;</div>
                        </>
                    )
                })}
                <div>&nbsp;</div>
                {addOperationButtons()}
            </AdminSectionContainer>
            <AdminBreaker />
            <AdminSectionContainer>
                <AdminSectionTitle>Car Wash Stations</AdminSectionTitle>
                {carWashStations?.map((carWashStation) => {
                    return (
                        <>
                            <AdminContainerItems to={PageRoutes.ADD_BRAND}>
                                {carWashStation.id} - {carWashStation.name} - {carWashStation.city.name}
                            </AdminContainerItems>
                            <div>&nbsp;</div>
                        </>
                    )
                })}
                <div>&nbsp;</div>
                {addOperationButtons()}
            </AdminSectionContainer>
            <AdminBreaker />
            <AdminSectionContainer>
                <AdminSectionTitle>Cities</AdminSectionTitle>
                {cities?.map((city) => {
                    return (
                        <>
                            <AdminContainerItems to={PageRoutes.ADD_BRAND}>
                                {city.id} - {city.name} - {city.county}
                            </AdminContainerItems>
                            <div>&nbsp;</div>
                        </>
                    )
                })}
                <div>&nbsp;</div>
                {addOperationButtons()}
            </AdminSectionContainer>
            <AdminBreaker />
            <AdminSectionContainer>
                <AdminSectionTitle>Fuels</AdminSectionTitle>
                {fuels?.map((fuel) => {
                    return (
                        <>
                            <AdminContainerItems to={PageRoutes.ADD_BRAND}>
                                {fuel.id} - {fuel.name} - {fuel.type} - {fuel.quality}
                            </AdminContainerItems>
                            <div>&nbsp;</div>
                        </>
                    )
                })}
                <div>&nbsp;</div>
                {addOperationButtons()}
            </AdminSectionContainer>
        </AdminDashboardContainer>
    )
}