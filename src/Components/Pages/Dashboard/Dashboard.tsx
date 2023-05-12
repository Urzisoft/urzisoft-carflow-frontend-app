import { FC, useEffect, useState } from "react";
import { Sidebar } from "../../Common/Sidebar/Sidebar";
import {
    CarBrandName,
    CardContainer,
    CarModelName,
    CarName,
    DashboardContainer,
    CarsGrid,
    ImageContainer
} from "./Dashboard.css";
import { Car } from "../../../Utils/Types";
import { requestUrls } from "../../../Backend/requestUrls";
import useGetCustomFetch from "../../../Hooks/useGetCustomFetch";
import useValidateUser from "../../../Hooks/useValidateUser";
import { OverlayNotification } from "../../Common/OverlayNotification/OverlayNotification";
import { useAuth } from "../../../Hooks/useAuth";
import BmwX3M from "../../../Assets/Images/BMW_x3m.jpg";

export const Dashboard: FC = () => {
    const { isLoggedIn } = useAuth();
    const { response, fetcher } = useGetCustomFetch<Car[], string>(requestUrls.cars);
    const { token } = useValidateUser();

    const [cars, setCars] = useState<Car[]>([]);

    useEffect(() => {
        fetcher(token);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    useEffect(() => {
       if (response) {
           setCars(response);
       }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [response]);

    if (!isLoggedIn) {
        return <OverlayNotification message={'Authentication required'} />;
    }

    const carsObjectMockup = [
        {
            thumbnail: BmwX3M,
            title: "BMW",
            model: "X3 2014 Diesel"
        },
        {
            thumbnail: BmwX3M,
            title: "BMW",
            model: "X3 2014 Diesel"
        },
        {
            thumbnail: BmwX3M,
            title: "BMW",
            model: "X3 2014 Diesel"
        },
    ];

    return (
        <>
            <Sidebar />
            <DashboardContainer>
                {carsObjectMockup.map((item) => {
                    return (
                        <CardContainer>
                            <ImageContainer backgroundImg={item.thumbnail}></ImageContainer>
                            <CarName>
                                <CarBrandName>{item.title}</CarBrandName>
                                <CarModelName>{item.model}</CarModelName>
                            </CarName>
                        </CardContainer>
                    );
                })}
            </DashboardContainer>
        </>
    )
}