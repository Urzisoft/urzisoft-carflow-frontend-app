import { useParams } from "react-router-dom";
import useValidateUser from "../../../../../Hooks/useValidateUser";
import { requestUrls } from "../../../../../Backend/requestUrls";
import useGetCustomFetch from "../../../../../Hooks/useGetCustomFetch";
import { FuelType } from "../../../../../Utils/Types";
import { useEffect, useState } from "react";
import { AdminDashboardContainer } from "../../AdminDashboard/AdminDashboard.css";

export const AdminFuel = () => {
    const { id } = useParams();
    const { token } = useValidateUser();
    const adminFuelObjectRequestUrl = requestUrls.fuel.replace(':id', `${id}`);
    const { response: carFuelResponse, fetcher: fetchCarFuel } = useGetCustomFetch<FuelType, string>(adminFuelObjectRequestUrl);

    const [fuel, setFuel] = useState<FuelType>();

    useEffect(() => {
        fetchCarFuel(token);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    useEffect(() => {
        if (carFuelResponse) {
            setFuel(carFuelResponse);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [carFuelResponse]);

    return (
        <AdminDashboardContainer>
            <p>{fuel?.name}</p>
            <p>{fuel?.description}</p>
            <p>{fuel?.type}</p>
            <p>{fuel?.quality}</p>
        </AdminDashboardContainer>
    )
};