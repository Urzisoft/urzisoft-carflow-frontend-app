import { DropdownOption, DropdownSelectContainer, DropdownSelectElement } from "./DropdownField.css";
import { FC } from "react";

type DropdownOptionsType = {
    options: string[]
};

export const DropdownField: FC<DropdownOptionsType> = ({ options }) => {
    return (
        <DropdownSelectContainer>
            <DropdownSelectElement>
                {options.map((option, index) => {
                    return <DropdownOption value={`Option ${index}`}>{option}</DropdownOption>
                })}
            </DropdownSelectElement>
        </DropdownSelectContainer>
    )
};