import { useParams } from "react-router-dom";
import useValidateUser from "../../../../../Hooks/useValidateUser";
import { requestUrls } from "../../../../../Backend/requestUrls";
import useGetCustomFetch from "../../../../../Hooks/useGetCustomFetch";
import { CarServicesType, ModelType } from "../../../../../Utils/Types";
import { useEffect, useState } from "react";
import { AdminDashboardContainer } from "../../AdminDashboard/AdminDashboard.css";

export const AdminCarService = () => {
    const { id } = useParams();
    const { token } = useValidateUser();
    const carServiceObjectRequestUrl = requestUrls.carService.replace(':id', `${id}`);
    const { response: carServiceResponse, fetcher: fetchCarService } = useGetCustomFetch<CarServicesType, string>(carServiceObjectRequestUrl);

    const [carService, setCarService] = useState<CarServicesType>();

    useEffect(() => {
        fetchCarService(token);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    useEffect(() => {
        if (carServiceResponse) {
            setCarService(carServiceResponse);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [carServiceResponse]);

    return (
        <AdminDashboardContainer>
            <p>{carService?.storageImageUrl}</p>
            <p>{carService?.name}</p>
            <p>{carService?.description}</p>
            <p>{carService?.address}</p>
            <p>{carService?.mainBrand.id} - {carService?.mainBrand.name}</p>
            <p>{carService?.carServiceCity.id} - {carService?.carServiceCity.name}</p>
        </AdminDashboardContainer>
    )
};