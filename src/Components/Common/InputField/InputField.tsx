import React, { FC } from "react";
import {
    InputBox,
    InputText,
    InputValidation
} from "./InputField.css"

type InputFieldType = {
    type: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    isValid?: boolean;
    isEligible?: boolean;
    isFileInput?: boolean
}

export const InputField: FC<InputFieldType> = ({ type, placeholder, onChange,
                                                    required = true, isValid, isEligible, isFileInput}) => {

    if (isFileInput) {
        return (
            <InputBox>
                <InputText type={type} placeholder={placeholder} required={required} onChange={onChange} isValid={isValid} isEligible={isEligible} accept={'image/png, image/jpeg'}></InputText>
            </InputBox>
        )
    }

    return (
        <InputBox>
            <InputText type={type} placeholder={placeholder} required={required} onChange={onChange} isValid={isValid} isEligible={isEligible}></InputText>
        </InputBox>
    );
};

export { InputValidation };
