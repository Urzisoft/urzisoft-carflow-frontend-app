import { FC, useEffect, useState } from "react";
import { DashboardContainer } from "./Dashboard.css";
import { Car } from "../../../Utils/Types";
import { requestUrls } from "../../../Backend/requestUrls";
import useGetCustomFetch from "../../../Hooks/useGetCustomFetch";

export const Dashboard: FC = () => {
    const { response, loading, error, fetcher } = useGetCustomFetch<Car[], string>(requestUrls.cars);

    const [cars, setCars] = useState<Car[]>([]);

    useEffect(() => {
       fetcher();
    }, []);

    useEffect(() => {
       if (response) {
           setCars(response);
       }
    }, [response]);

    return (
        <DashboardContainer>
            {cars?.map((car) => {
                return <p>{car.generation}</p>;
            })}
        </DashboardContainer>
    )
}