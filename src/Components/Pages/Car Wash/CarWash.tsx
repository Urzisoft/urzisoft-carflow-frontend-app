import React, { FC } from "react";
import { CardsSection, CardsMainTitle, CarWashBackgroundImage, CarWashButton, CarWashButtonsContainer, CarWashContainer, CarWashDetailText, CarWashTitle, CardsContainer, CardsWrapper, CardsList } from "./CarWash.css";
import { CarWashCardItem } from "./CarWashCardItem/CarWashCardItem";
import CarWashBackground from "../../../Assets/Images/CarWashBackgroundImage.jpg"
import JetPointImage from "../../../Assets/Images/JetPoint.jpeg"
import EcoservWash from "../../../Assets/Images/Ecoservwash.jpg"
import UltraProWash from "../../../Assets/Images/UltraPro.png"

export const CarWash: FC = () => {
    const scrollToCardsSection = () => {
        const cardsSection = document.getElementById("cards-section");
        if (cardsSection) {
            cardsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const carWashStationsMockup = [
        {
            thumbnail: UltraProWash,
            text: "József Attila 11 Street, Cluj-Napoca 400347",
            label: "Open",
            path: "https://www.google.com/maps/dir//ultra+pro+wash+cluj/@46.7552032,23.5791962,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47490dea8f92f4e7:0x3d9e00eb92dafb33!2m2!1d23.5975541!2d46.7598694"
        },
        {
            thumbnail: EcoservWash,
            text: "Calea Baciului nr.47, Cluj-Napoca 400230",
            label: "Open",
            path: "https://www.google.com/maps/dir//EcoservWash+cluj/@46.7673651,23.5406615,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47490ee7b2f32303:0x1a55977a0e3f0e07!2m2!1d23.553071!2d46.784147"
        },
        {
            thumbnail: JetPointImage,
            text: "Calea Baciului 2-4, Cluj-Napoca 400535",
            label: "Open",
            path: "https://www.google.com/maps/dir//Calea+Baciului+2-4,+Cluj-Napoca+400535/@46.7822163,23.4679858,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47490fbb708a6e25:0xc0b206264a50d2ba!2m2!1d23.538023!2d46.7822288"
        },
        {
            thumbnail: EcoservWash,
            text: "Calea Baciului nr.47, Cluj-Napoca 400230",
            label: "Open",
            path: "https://www.google.com/maps/dir//EcoservWash+cluj/@46.7673651,23.5406615,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47490ee7b2f32303:0x1a55977a0e3f0e07!2m2!1d23.553071!2d46.784147"
        },
        {
            thumbnail: JetPointImage,
            text: "Calea Baciului 2-4, Cluj-Napoca 400535",
            label: "Open",
            path: "https://www.google.com/maps/dir//Calea+Baciului+2-4,+Cluj-Napoca+400535/@46.7822163,23.4679858,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47490fbb708a6e25:0xc0b206264a50d2ba!2m2!1d23.538023!2d46.7822288"
        },
        {
            thumbnail: JetPointImage,
            text: "Calea Baciului 2-4, Cluj-Napoca 400535",
            label: "Open",
            path: "https://www.google.com/maps/dir//Calea+Baciului+2-4,+Cluj-Napoca+400535/@46.7822163,23.4679858,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47490fbb708a6e25:0xc0b206264a50d2ba!2m2!1d23.538023!2d46.7822288"
        },
        {
            thumbnail: JetPointImage,
            text: "Calea Baciului 2-4, Cluj-Napoca 400535",
            label: "Open",
            path: "https://www.google.com/maps/dir//Calea+Baciului+2-4,+Cluj-Napoca+400535/@46.7822163,23.4679858,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47490fbb708a6e25:0xc0b206264a50d2ba!2m2!1d23.538023!2d46.7822288"
        },
        {
            thumbnail: JetPointImage,
            text: "Calea Baciului 2-4, Cluj-Napoca 400535",
            label: "Open",
            path: "https://www.google.com/maps/dir//Calea+Baciului+2-4,+Cluj-Napoca+400535/@46.7822163,23.4679858,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47490fbb708a6e25:0xc0b206264a50d2ba!2m2!1d23.538023!2d46.7822288"
        },        {
            thumbnail: JetPointImage,
            text: "Calea Baciului 2-4, Cluj-Napoca 400535",
            label: "Open",
            path: "https://www.google.com/maps/dir//Calea+Baciului+2-4,+Cluj-Napoca+400535/@46.7822163,23.4679858,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47490fbb708a6e25:0xc0b206264a50d2ba!2m2!1d23.538023!2d46.7822288"
        },
    ];

    return (
        <>
            <CarWashContainer>
                <CarWashBackgroundImage src={CarWashBackground} />
                <CarWashTitle>KEEP YOUR CAR CLEAN</CarWashTitle>
                <CarWashDetailText>What are you waiting for?</CarWashDetailText>
                <CarWashButtonsContainer>
                    <CarWashButton onClick={scrollToCardsSection}>GET STARTED</CarWashButton>
                </CarWashButtonsContainer>
            </CarWashContainer>
            <CardsSection id="cards-section">
                <CardsMainTitle>Check out these EPIC car washes</CardsMainTitle>
                <CardsContainer>
                    <CardsWrapper>
                        <CardsList>
                            {carWashStationsMockup.map((item) => {
                                return (
                                    <CarWashCardItem
                                        src={item.thumbnail}
                                        text={item.text}
                                        label={item.label}
                                        path={item.path}
                                    />
                                )
                            })}
                        </CardsList>
                    </CardsWrapper>
                </CardsContainer>
            </CardsSection>
        </>
    );
}