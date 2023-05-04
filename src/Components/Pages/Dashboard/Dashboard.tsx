import { FC, useEffect, useState } from "react";
import { Sidebar } from "../../Common/Sidebar/Sidebar";
import { DashboardContainer } from "./Dashboard.css";
import { Car } from "../../../Utils/Types";
import { requestUrls } from "../../../Backend/requestUrls";
import useGetCustomFetch from "../../../Hooks/useGetCustomFetch";
import useValidateUser from "../../../Hooks/useValidateUser";
import { useAuth } from "../../../Hooks/useAuth";

export const Dashboard: FC = () => {
    const { response, loading, error, fetcher } = useGetCustomFetch<Car[], string>(requestUrls.cars);
    const { token } = useValidateUser();

    const [cars, setCars] = useState<Car[]>([]);

    useEffect(() => {
        fetcher(token);
    }, [token]);

    useEffect(() => {
       if (response) {
           setCars(response);
       }
    }, [response]);

    return (
        <>
            <Sidebar />
            <DashboardContainer>
                {cars?.map((car) => {
                return (
                    <>
                        <p>{car?.brand.name}</p>
                    </>
                );
            })}
            </DashboardContainer>
        </>
    )
}