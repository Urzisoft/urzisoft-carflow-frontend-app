import React, { FC } from "react";
import {
    InputBox,
    InputText,
    InputValidation
} from "./InputField.css"

type InputFieldType = {
    type: string;
    placeholder: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    isValid?: boolean;
    isEligible?: boolean;
}

export const InputField: FC<InputFieldType> = ({ type, placeholder, onChange,
                                                    required = true, isValid, isEligible}) => {
    return (
        <InputBox>
            <InputText type={type} placeholder={placeholder} required={required} onChange={onChange} isValid={isValid} isEligible={isEligible}></InputText>
        </InputBox>
    );
};

export { InputValidation };
