import { FC } from "react";
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