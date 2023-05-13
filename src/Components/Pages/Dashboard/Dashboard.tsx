import { FC, useEffect, useState } from "react";
import { Sidebar } from "../../Common/Sidebar/Sidebar";
import {
    CarBrandName,
    CardContainer,
    CarModelName,
    CarName,
    DashboardContainer,
    ImageContainer
} from "./Dashboard.css";
import { CarType } from "../../../Utils/Types";
import { requestUrls } from "../../../Backend/requestUrls";
import useGetCustomFetch from "../../../Hooks/useGetCustomFetch";
import useValidateUser from "../../../Hooks/useValidateUser";
import { OverlayNotification } from "../../Common/OverlayNotification/OverlayNotification";
import { useAuth } from "../../../Hooks/useAuth";

export const Dashboard: FC = () => {
    const { isLoggedIn } = useAuth();
    const { response, fetcher } = useGetCustomFetch<CarType[], string>(requestUrls.cars);
    const { token } = useValidateUser();

    const [cars, setCars] = useState<CarType[]>([]);

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

    return (
        <>
            <Sidebar />
            <DashboardContainer>
                {cars.map((item) => {
                    return (
                        <CardContainer>
                            <ImageContainer backgroundImg={item.storageImageUrl}></ImageContainer>
                            <CarName>
                                <CarBrandName>{item.brand.name} {item.model.name}</CarBrandName>
                                <CarModelName>{item.generation} {item.year}</CarModelName>
                            </CarName>
                        </CardContainer>
                    );
                })}
            </DashboardContainer>
        </>
    )
}