import { useParams } from "react-router-dom";
import useValidateUser from "../../../../../Hooks/useValidateUser";
import { requestUrls } from "../../../../../Backend/requestUrls";
import useGetCustomFetch from "../../../../../Hooks/useGetCustomFetch";
import { CarWashStationType } from "../../../../../Utils/Types";
import { useEffect, useState } from "react";
import { AdminDashboardContainer } from "../../AdminDashboard/AdminDashboard.css";

export const AdminCarWashService = () => {
    const { id } = useParams();
    const { token } = useValidateUser();
    const carWashObjectRequestUrl = requestUrls.carWashStation.replace(':id', `${id}`);
    const { response: carWashResponse, fetcher: fetchCarWash } = useGetCustomFetch<CarWashStationType, string>(carWashObjectRequestUrl);

    const [carWash, setCarWash] = useState<CarWashStationType>();

    useEffect(() => {
        fetchCarWash(token);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    useEffect(() => {
        if (carWashResponse) {
            setCarWash(carWashResponse);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [carWashResponse]);

    return (
        <AdminDashboardContainer>
            <p>{carWash?.storageImageUrl}</p>
            <p>{carWash?.name}</p>
            <p>{carWash?.standardPrice}</p>
            <p>{carWash?.premiumPrice}</p>
            <p>{carWash?.address}</p>
            <p>{carWash?.rank}</p>
            <p>{carWash?.isSelfWash}</p>
            <p>{carWash?.city.id} - {carWash?.city.name}</p>
        </AdminDashboardContainer>
    )
};