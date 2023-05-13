import React, { FC } from "react";
import {
    Circle,
    CircleContainer,
    CircleText,
    CircleTextContainer,
    FuelContainer,
    FuelInformation,
    FuelInformationContainer,
    FuelMainDescription,
    GasPricesChartContainer,
    GasPricesWidthContainer,
    LegendContainer,
    LegendList,
    LegendListElement,
    LegendListSquare,
    LegendTitle
} from "./Fuel.css";
import petrolBackgroundImage from "../../../Assets/Images/PetrolBackgroundImage.png";
import dieselBackgroundImage from "../../../Assets/Images/DieselBackgroundImage.png"
import gplBackgroundImage from "../../../Assets/Images/GPLBackgroundImage.png"
import GasPricesChart from './GasPricesChart';
import { Colors } from "../../../Utils/cssMedia";
import { Sidebar } from "../../Common/Sidebar/Sidebar";

export const Fuel: FC = () => {

    const petrolPrices = [4.78, 5.01, 5.47, 5.47, 5.56, 5.7, 5.82, 5.88, 5.97, 6.33, 6.19, 6.03, 6.39, 6.96, 7.95, 7.86, 8.18, 8.53, 8.58, 7.45, 7.18, 7.12, 7.67, 6.65, 6.4, 6.55, 6.53];
    const dieselPrices = [4.98, 5.19, 5.39, 5.36, 5.47, 5.55, 5.76, 5.73, 5.83, 6.22, 6.31, 6.05, 6.29, 6.84, 7.89, 8.34, 8.88, 9.16, 9.24, 8.13, 8.51, 8.51, 8.96, 7.78, 7.66, 7.4, 7.06];
    const gplPrices = [3.1, 3.26, 3.61, 3.61, 3.68, 3.79, 3.88, 3.93, 3.99, 4.25, 4.14, 4.01, 4.3, 4.76, 4.67, 4.7, 4.8, 4.9, 4.64, 4.41, 4.35, 4.81, 3.9, 3.7, 3.81, 3.71, 3.81]
    const dateLabels = [
        '01-21', '02-21', '03-21', '04-21', '05-21', '06-21', '07-21', '08-21', '09-21', '10-21', '11-21', '12-21',
        '01-22', '02-22', '03-22', '04-22', '05-22', '06-22', '07-22', '08-22', '09-22', '10-22', '11-22', '12-22',
        '01-23', '02-23', '03-23'
    ];

    return (
        <>
            <Sidebar />
            <FuelContainer />
            <FuelMainDescription>Prices for Petrol - Diesel - GPL</FuelMainDescription>
            <CircleTextContainer>
                <CircleContainer>
                    <Circle backgroundImg={petrolBackgroundImage} />
                    <CircleText>Petrol price is 6.61 lei/liter.</CircleText>
                </CircleContainer>
                <CircleContainer>
                    <Circle backgroundImg={dieselBackgroundImage} />
                    <CircleText>Diesel price is 7.06 lei/liter.</CircleText>
                </CircleContainer>
                <CircleContainer>
                    <Circle backgroundImg={gplBackgroundImage} />
                    <CircleText>GPL price is 3.81 lei/liter.</CircleText>
                </CircleContainer>
            </CircleTextContainer>
            <FuelInformationContainer>
                <FuelInformation>Updated on 3/5/2023.</FuelInformation>
                <FuelInformation>Standard fuel prices.</FuelInformation>
                <FuelInformation> Price sources: Gas stations in Bucharest: Gasoline - PETROM - Standard 95 Gasoline / Gasoline 95; Diesel - OMV - OMV Diesel; LPG - LUKOIL Romania S.R.L. - Auto LPG. We do not take responsibility for the accuracy of the data, as prices may be updated frequently and may differ from one gas station to another.</FuelInformation >
            </FuelInformationContainer>
            <LegendContainer>
                <LegendTitle>
                    Fuel Price Evolution
                </LegendTitle>
                <LegendList>
                    <LegendListElement>
                        <LegendListSquare squareColor={Colors.green}></LegendListSquare>
                        Petrol Prices
                    </LegendListElement>
                    <LegendListElement>
                        <LegendListSquare squareColor={Colors.black}></LegendListSquare>
                        Diesel Prices
                    </LegendListElement>
                    <LegendListElement>
                        <LegendListSquare squareColor={Colors.brightRed}></LegendListSquare>
                        GPL Prices
                    </LegendListElement>
                </LegendList>
            </LegendContainer>
            <GasPricesWidthContainer>
                <GasPricesChartContainer>
                    <GasPricesChart petrolPrices={petrolPrices} dieselPrices={dieselPrices} gplPrices={gplPrices} dateLabels={dateLabels} />
                </GasPricesChartContainer>
            </GasPricesWidthContainer>
        </>
    );
}