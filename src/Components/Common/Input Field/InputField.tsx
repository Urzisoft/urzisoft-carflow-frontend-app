import React, { FC } from "react";
import {
    InputBox,
    InputText,
} from "./InputField.css"

type InputFieldProps = {
    type: string;
    placeholder: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

export const InputField: FC<InputFieldProps> = ({ type, placeholder, onChange,
                                                    required = true }) => {
    return (
        <InputBox>
            <InputText type={type} placeholder={placeholder} required={required} onChange={onChange}></InputText>
        </InputBox>
    );
};
