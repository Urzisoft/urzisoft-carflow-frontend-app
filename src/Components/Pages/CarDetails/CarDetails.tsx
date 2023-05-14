import React, { FC, useEffect, useState } from "react";
import { PageRoutes } from "../../../Utils/Routes";
import { Sidebar } from "../../Common/Sidebar/Sidebar";
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
    ContentGrid, ButtonWrapper
} from "./CarDetails.css";

import { useParams } from "react-router-dom";
import { requestUrls } from "../../../Backend/requestUrls";
import useGetCustomFetch from "../../../Hooks/useGetCustomFetch";
import { CarDetailsConfigType, CarType } from "../../../Utils/Types";
import useValidateUser from "../../../Hooks/useValidateUser";
import * as GiIcons from "react-icons/gi";
import * as TbIcons from "react-icons/tb";
import { FormButton } from "../../Common/Authentication/Authentication.css";
import usePostCustomFetch from "../../../Hooks/usePostCustomFetch";
import { useRedirectHome } from "../../../Hooks/useRedirectHome";

const renderCharacteristics = (CarDetailsConfig: CarDetailsConfigType[]): JSX.Element[] => {
    return CarDetailsConfig.map((item, index) => {
        return (
            <DetailsItem key={index}>
                <span style={{ marginLeft: '16px' }}>{item.icon} {item.value}</span>
            </DetailsItem>
        )
    })
};

export const CarDetails: FC = () => {
    const { id } = useParams();
    const { token } = useValidateUser();
    const carObjectRequestUrl = requestUrls.car.replace(':id', `${id}`);
    const { response: carResponse, fetcher: fetchCar } = useGetCustomFetch<CarType, string>(carObjectRequestUrl);
    const {
        fetcher: deleteCarPayload,
    } = usePostCustomFetch<any, any>(`${requestUrls.cars}/${id}`, 'DELETE');
    const { navigateHome } = useRedirectHome();

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

    const CarDetailsConfig: CarDetailsConfigType[] = [
        {
            name: 'Year',
            value: car?.year,
            icon: <FaIcons.FaCalendarAlt />
        },
        {
            name: 'Mileage',
            value: car?.mileage,
            icon: <FaIcons.FaTachometerAlt />
        },
        {
            name: 'Gearbox',
            value: car?.gearbox,
            icon: <GiIcons.GiGearStickPattern />
        },
        {
            name: 'Power',
            value: car?.power,
            icon: <FaIcons.FaHorse />
        },
        {
            name: 'Engine Size',
            value: car?.engineSize,
            icon: <TbIcons.TbEngine />
        },
        {
            name: 'Drive wheel',
            value: car?.driveWheel,
            icon: <GiIcons.GiSteeringWheel />
        },
        {
            name: 'License plate',
            value: car?.driveWheel,
            icon: <TbIcons.TbBadgeAr />
        },
        {
            name: 'Gas type',
            value: car?.gasType,
            icon: <FaIcons.FaGasPump />
        }
    ];

    const onDeleteButtonClick = () => {
        deleteCarPayload(undefined, token);
        navigateHome();
    };

    return (
        <>
            <Sidebar />
            <CarDetailContainer>
                <TitleContainer>
                    <BackButton to={PageRoutes.DASHBOARD}>
                        <FaIcons.FaChevronLeft />
                    </BackButton>
                    <BrandContainer>
                        {car?.brand.name}
                    </BrandContainer>
                    <ModelContainer>
                        {car?.model.name}
                    </ModelContainer>
                </TitleContainer>
                <hr />
                <ContentGrid>
                    <ImageContainer>
                        <Image backgroundImg={car?.storageImageUrl}></Image>
                    </ImageContainer>
                    <DetailsContainer>
                        <DetailsGrid>
                            {renderCharacteristics(CarDetailsConfig)}
                        </DetailsGrid>
                    </DetailsContainer>
                    <ButtonWrapper>
                        <FormButton onClick={onDeleteButtonClick}>Delete Car</FormButton>
                    </ButtonWrapper>
                </ContentGrid>
            </CarDetailContainer>
        </>
    )
}