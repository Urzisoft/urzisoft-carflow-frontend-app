import useGetCustomFetch from "../../../../Hooks/useGetCustomFetch";
import { BrandType, CarServicesType, CarWashStationType, ModelType } from "../../../../Utils/Types";
import { requestUrls } from "../../../../Backend/requestUrls";
import { useEffect, useState } from "react";
import useValidateUser from "../../../../Hooks/useValidateUser";
import {
    AdminBreaker,
    AdminContainerItems,
    AdminDashboardContainer,
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

    const { token, roles } = useValidateUser();

    const [brands, setBrands] = useState<BrandType[]>([]);
    const [models, setModels] = useState<ModelType[]>([]);
    const [carServices, setCarServices] = useState<CarServicesType[]>([]);
    const [carWashStations, setCarWashStations] = useState<CarWashStationType[]>([]);

    useEffect(() => {
        fetchBrands(token);
        fetchModels(token);
        fetchCarServices(token);
        fetchCarWashStations(token);

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
            </AdminSectionContainer>
        </AdminDashboardContainer>
    )
}