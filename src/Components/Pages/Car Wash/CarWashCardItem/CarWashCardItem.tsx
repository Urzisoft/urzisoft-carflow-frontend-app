import React, { FC, useEffect, useState } from "react";
import { CardItem,CardLink,CardImageWrapper, CardImage, CardInfo,CardText } from "./CarWashCardItem.css";

interface CarWashCardProps {
    path: string;
    label: string;
    src: string;
    text: string;
}

interface CarWashCardItemProps extends CarWashCardProps {
    children?: React.ReactNode;
}
export const CarWashCardItem: FC<CarWashCardItemProps>= (props) => {
    return (
        <>
    <CardItem>
        <CardLink to={props.path}>
            <CardImageWrapper data-category={props.label}>
                <CardImage src={props.src}></CardImage>
            </CardImageWrapper>
            <CardInfo>
                <CardText>{props.text}</CardText>
            </CardInfo>
        </CardLink>
    </CardItem>
        </>
    );
}