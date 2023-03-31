import { FC, useEffect, useState } from "react";
import { DashboardContainer } from "./Dashboard.css";
import { Car } from "../../../Utils/Types";
import { requestUrls } from "../../../Backend/requestUrls";
import useGetCustomFetch from "../../../Hooks/useGetCustomFetch";
import usePostCustomFetch from "../../../Hooks/usePostCustomFetch";

export const Dashboard: FC = () => {
    const { response, loading, error, fetcher } = useGetCustomFetch<Car[], string>(requestUrls.cars);
    const { response: carPostResponse, fetcher: addCar } = usePostCustomFetch<any, any>(requestUrls.cars);

    const [cars, setCars] = useState<Car[]>([]);

    useEffect(() => {
        const newCarObject: Car = {
            brand: {
                name: "camifdjsiugjsid",
                description: "The fdslkjfgoisdfjgt"
            },
            model: {
                name: "sodgjoifdg4"
            },
            generation: "B8sdfnsdfknsdkf.5",
            year: 2014,
            gasType: "Diesel",
            mileage: "250.000",
            gearbox: "Manual",
            power: 150,
            engineSize: 2,
            driveWheel: "frontal",
            licensePlate: "SM21CIG"
        };

        addCar(newCarObject);
    }, []);

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