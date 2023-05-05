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

    if (!isLoggedIn) {
        return <OverlayNotification message={'Authentication required'} />;
    }
    return (
        <>
            <Sidebar />
            <DashboardContainer>
                {cars?.map((car) => {
                return (
                    <>
                        <CardContainer>
                            <ImageContainer backgroundImg={BmwX3M}></ImageContainer>
                            <CarName>
                                <CarBrandName>{car.brand.name}</CarBrandName>
                                <CarModelName>{car.model.name} {car.year} {car.gasType}</CarModelName>
                            </CarName>
                        </CardContainer>
                    </>
                );
            })}

               {/*<CarsGrid>*/}

               {/*</CarsGrid>*/}

            </DashboardContainer>
        </>
    )
}