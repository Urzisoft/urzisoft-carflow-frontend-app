import React, { FC, useEffect, useState } from "react";
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
import useGetCustomFetch from "../../../Hooks/useGetCustomFetch";
import { PriceType } from "../../../Utils/Types";
import { requestUrls } from "../../../Backend/requestUrls";
import useValidateUser from "../../../Hooks/useValidateUser";
import { useAuth } from "../../../Hooks/useAuth";
import { OverlayNotification } from "../../Common/OverlayNotification/OverlayNotification";

export const Fuel: FC = () => {
    const { isLoggedIn } = useAuth();
    const { response, fetcher } = useGetCustomFetch<PriceType[], string>(requestUrls.prices);
    const { token } = useValidateUser();

    const [prices, setPrices] = useState<PriceType[]>([]);
    const [petrolPricesState, setPetrolPricesState] = useState<number[]>([]);
    const [dieselPricesState, setDieselPricesState] = useState<number[]>([]);
    const [gplPricesState, setGplPricesState] = useState<number[]>([]);
    const [priceDates, setPriceDates] = useState<string[]>([]);

    useEffect(() => {
        fetcher(token);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    useEffect(() => {
        if (response) {
            setPrices(response);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [response]);

    let petrolPrices: number[] = [];
    let gplPrices: number[] = [];
    let dateLabels: string[] = [];
    let dieselPrices: number[] = [];

    useEffect(() => {
        prices.forEach((price) => {
           if (price.fuel == 'Petrol') {
               dateLabels.push(price.date);
               petrolPrices.push(price.value);
               setPriceDates(dateLabels);
               setPetrolPricesState(petrolPrices);
           } else if (price.fuel === 'Gpl') {
               gplPrices.push(price.value);
               setGplPricesState(gplPrices);
           } else if (price.fuel === 'Diesel') {
               dieselPrices.push(price.value);
               setDieselPricesState(dieselPrices);
           }
        });
    }, [prices]);

    if (!isLoggedIn) {
        return <OverlayNotification message={'Authentication required'} />;
    }

    return (
        <>
            <Sidebar />
            <FuelContainer />
            <FuelMainDescription>Prices for Petrol - Diesel - GPL</FuelMainDescription>
            <CircleTextContainer>
                <CircleContainer>
                    <Circle backgroundImg={petrolBackgroundImage} />
                    <CircleText>Petrol price is {petrolPricesState[petrolPricesState.length - 1]} lei/liter.</CircleText>
                </CircleContainer>
                <CircleContainer>
                    <Circle backgroundImg={dieselBackgroundImage} />
                    <CircleText>Diesel price is {dieselPricesState[dieselPricesState.length - 1]} lei/liter.</CircleText>
                </CircleContainer>
                <CircleContainer>
                    <Circle backgroundImg={gplBackgroundImage} />
                    <CircleText>GPL price is {gplPricesState[gplPricesState.length - 1]} lei/liter.</CircleText>
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
                    <GasPricesChart petrolPrices={petrolPricesState} dieselPrices={dieselPricesState} gplPrices={gplPricesState} dateLabels={priceDates} />
                </GasPricesChartContainer>
            </GasPricesWidthContainer>
        </>
    );
}