import { FC, useEffect, useState } from "react";
import { PageRoutes } from "../../../Utils/Routes";
import { Sidebar } from "../../Common/Sidebar/Sidebar";
import BlueCarLoginBackground from "../../../Assets/Images/BlueCarLoginBackground.png";
import * as FaIcons from 'react-icons/fa'

import {
    CarDetailContainer,
    Image,
    DetailsContainer,
    TitleContainer,
    BrandContainer,
    ModelContainer,
    BackButton,
    ImageContainer,
    DetailsGrid,
    DetailsItem,
    ContentGrid
} from "./CarDetails.css";

import { CarDetailsConfig } from "../../../Utils/CarDetailsConfig";
import { useParams } from "react-router-dom";
import { requestUrls } from "../../../Backend/requestUrls";
import useGetCustomFetch from "../../../Hooks/useGetCustomFetch";
import { CarType } from "../../../Utils/Types";
import useValidateUser from "../../../Hooks/useValidateUser";

const renderCharacteristics = (): JSX.Element[] => {
    return CarDetailsConfig.map((item, index) => {
        return (
                <DetailsItem key={index}>
                    {item.icon}
                    <span style={{ marginLeft: '16px' }}>{item.value}</span>
                </DetailsItem>
        )
    })
};

export const CarDetails: FC = () => {
    const { id } = useParams();
    const { token } = useValidateUser();
    const carObjectRequestUrl = requestUrls.car.replace(':id', `${id}`);
    const { response: carResponse, fetcher: fetchCar } = useGetCustomFetch<CarType, string>(carObjectRequestUrl);

    const [car, setCar] = useState<CarType>();

    useEffect(() => {
        fetchCar(token);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    useEffect(() => {
        if (carResponse) {
            setCar(carResponse);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [carResponse]);

    console.log(car);

    return (
        <>
            <Sidebar />
            <CarDetailContainer>
                <TitleContainer>
                    <BackButton to={PageRoutes.DASHBOARD}>
                        <FaIcons.FaChevronLeft />
                    </BackButton>
                    <BrandContainer>
                        FORD
                    </BrandContainer>
                    <ModelContainer>
                        GT
                    </ModelContainer>
                </TitleContainer>
                <hr />
                <ContentGrid>
                    <ImageContainer>
                        <Image backgroundImg={BlueCarLoginBackground}></Image>
                    </ImageContainer>
                    <DetailsContainer>
                        <DetailsGrid>
                            {renderCharacteristics()}
                        </DetailsGrid>
                    </DetailsContainer>
                </ContentGrid>
            </CarDetailContainer>
        </>
    )
}