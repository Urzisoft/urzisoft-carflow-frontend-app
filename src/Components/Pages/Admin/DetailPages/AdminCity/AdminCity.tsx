import { useParams } from "react-router-dom";
import useValidateUser from "../../../../../Hooks/useValidateUser";
import { requestUrls } from "../../../../../Backend/requestUrls";
import useGetCustomFetch from "../../../../../Hooks/useGetCustomFetch";
import { CityType } from "../../../../../Utils/Types";
import { useEffect, useState } from "react";
import { AdminDashboardContainer } from "../../AdminDashboard/AdminDashboard.css";

export const AdminCity = () => {
    const { id } = useParams();
    const { token } = useValidateUser();
    const adminCityObjectRequestUrl = requestUrls.city.replace(':id', `${id}`);
    const { response: carWashResponse, fetcher: fetchCarWash } = useGetCustomFetch<CityType, string>(adminCityObjectRequestUrl);

    const [city, setCity] = useState<CityType>();

    useEffect(() => {
        fetchCarWash(token);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    useEffect(() => {
        if (carWashResponse) {
            setCity(carWashResponse);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [carWashResponse]);

    return (
        <AdminDashboardContainer>
            <p>{city?.storageImageUrl}</p>
            <p>{city?.name}</p>
            <p>{city?.county}</p>
        </AdminDashboardContainer>
    )
};