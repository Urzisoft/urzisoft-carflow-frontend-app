import { DropdownOption, DropdownSelectContainer, DropdownSelectElement } from "./DropdownField.css";
import React, { FC } from "react";

type DropdownOptionsType = {
    options: string[] | undefined,
    splitById: boolean;
    handleDropdownChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const DropdownField: FC<DropdownOptionsType> = ({ options, splitById, handleDropdownChange }) => {
    return (
        <DropdownSelectContainer>
            <DropdownSelectElement onChange={handleDropdownChange}>
                {options?.map((option, index) => {
                    if (splitById) {
                        const splitData = option.split('-');
                        const indexValue = splitData[0];
                        const optionValue = splitData[1];
                        return <DropdownOption key={index} value={indexValue}>{optionValue}</DropdownOption>
                    }

                    return <DropdownOption key={index} value={option}>{option}</DropdownOption>;
                })}
            </DropdownSelectElement>
        </DropdownSelectContainer>
    )
};