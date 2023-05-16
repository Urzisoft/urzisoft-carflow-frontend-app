import { useParams } from "react-router-dom";
import useValidateUser from "../../../../../Hooks/useValidateUser";
import { requestUrls } from "../../../../../Backend/requestUrls";
import useGetCustomFetch from "../../../../../Hooks/useGetCustomFetch";
import { FuelType, GasStationsType } from "../../../../../Utils/Types";
import { useEffect, useState } from "react";
import { AdminDashboardContainer } from "../../AdminDashboard/AdminDashboard.css";

export const AdminGasStation = () => {
    const { id } = useParams();
    const { token } = useValidateUser();
    const adminGasStationObjectRequestUrl = requestUrls.gasStation.replace(':id', `${id}`);
    const { response: carGasStationResponse, fetcher: fetchCarGasStation } = useGetCustomFetch<GasStationsType, string>(adminGasStationObjectRequestUrl);

    const [gasStation, setGasStation] = useState<GasStationsType>();

    useEffect(() => {
        fetchCarGasStation(token);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    useEffect(() => {
        if (carGasStationResponse) {
            setGasStation(carGasStationResponse);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [carGasStationResponse]);

    return (
        <AdminDashboardContainer>
            <p>{gasStation?.storageImageUrl}</p>
            <p>{gasStation?.fuel.id} - {gasStation?.fuel.name}</p>
            <p>{gasStation?.name}</p>
            <p>{gasStation?.city.id} - {gasStation?.city.name}</p>
            <p>{gasStation?.address}</p>
            <p>{gasStation?.rank}</p>
        </AdminDashboardContainer>
    )
};