import {
    RegisterContainer,
    RegisterTitle,
    RegisterUserInputDetailsContainer,
    RegisterBackgroundColor,
    BackgroundImage,
    RegisterButton,
    ResisterBox,
} from "./Register.css";

import React, { FC, useState } from "react";
import { InputField } from "../../Common/Input Field/InputField";

export const Register: FC = () => {
    const [fullName, setFullName] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>();
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const handleInputFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFullName(event.target.value);
    };

    const handleInputUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handleInputEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleInputPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleInputConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
    };

    return (
        <ResisterBox>
            <RegisterBackgroundColor>
                <RegisterContainer>
                    <RegisterTitle>Register</RegisterTitle>
                    <RegisterUserInputDetailsContainer>
                        <InputField type="text" placeholder="Full Name" onChange={handleInputFullNameChange} />
                        <InputField type="text" placeholder="Username" onChange={handleInputUsernameChange} />
                        <InputField type="text" placeholder="Email" onChange={handleInputEmailChange} />
                        <InputField type="password" placeholder="Password" onChange={handleInputPasswordChange} />
                        <InputField type="password" placeholder="Confirm Password" onChange={handleInputConfirmPasswordChange}/>
                        <RegisterButton>Create Account</RegisterButton>
                    </RegisterUserInputDetailsContainer>
                </RegisterContainer>
            </RegisterBackgroundColor>
            <BackgroundImage />
        </ResisterBox>
    );
};
