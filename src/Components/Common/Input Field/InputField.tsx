import { FC } from "react";
import {
    InputBox,
    Text,
} from "./InputField.css"

type InputFieldProps = {
    type: string;
    placeholder: string;
    required?: boolean;
}

export const InputField: FC<InputFieldProps> = ({ type, placeholder, required = true }) => {
    return (
        <InputBox>
            <Text type={type} placeholder={placeholder} required={required}></Text>
        </InputBox>
    );
};
