import React, { FC } from "react";
import { CardItem,CardLink,CardImageWrapper, CardImage, CardInfo,CardText } from "./CarWashCardItem.css";

interface CarWashCardProps {
    label: string;
    src: string;
    text: string;
}
interface CarWashCardItemProps extends CarWashCardProps {
    children?: React.ReactNode;
}

export const CarWashCardItem: FC<CarWashCardItemProps>= (props) => {
    return (
        <CardItem>
            <CardLink>
                <CardImageWrapper isClosed={props.label === 'Open'} data-category={props.label}>
                    <CardImage src={props.src}></CardImage>
                </CardImageWrapper>
                <CardInfo>
                    <CardText>{props.text}</CardText>
                </CardInfo>
            </CardLink>
        </CardItem>
    )
}