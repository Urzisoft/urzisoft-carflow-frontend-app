import React, { FC } from "react";
import {
    InputBox,
    InputText,
} from "./InputField.css"

type InputFieldType = {
    type: string;
    placeholder: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

export const InputField: FC<InputFieldType> = ({ type, placeholder, onChange,
                                                    required = true }) => {
    return (
        <InputBox>
            <InputText type={type} placeholder={placeholder} required={required} onChange={onChange}></InputText>
        </InputBox>
    );
};
