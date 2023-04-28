import {
    AuthenticationBox,
    AuthenticationTitle,
    AuthenticationBackgroundColor,
    AuthenticationBackgroundImage,
    AuthenticationButton,
    AuthenticationContainer,
    AuthenticationUserInputDetailsContainer,
} from "../../Common/Authentication/Authentication.css";
import React, { FC, useEffect, useState } from "react";
import { InputField } from "../../Common/InputField/InputField";
import registerBackgroundImage from "../../../Assets/Images/RedCarRegisterBackground.jpg";
import { Colors } from "../../../Utils/cssMedia";

export const Register: FC = () => {
    const [fullName, setFullName] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>();
    const [confirmPassword, setConfirmPassword] = useState<string>("");

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

    useEffect(() => {
        // validate and send payload;
    }, [fullName, username, email, password, confirmPassword]);

    return (
        <AuthenticationBox>
            <AuthenticationBackgroundColor backgroundColor={Colors.darkRed}>
                <AuthenticationContainer>
                    <AuthenticationTitle>Register</AuthenticationTitle>
                    <AuthenticationUserInputDetailsContainer>
                        <InputField
                            type="text"
                            placeholder="Full Name"
                            onChange={handleInputFullNameChange}
                        />
                        <InputField
                            type="text"
                            placeholder="Username"
                            onChange={handleInputUsernameChange}
                        />
                        <InputField
                            type="text"
                            placeholder="Email"
                            onChange={handleInputEmailChange}
                        />
                        <InputField
                            type="password"
                            placeholder="Password"
                            onChange={handleInputPasswordChange}
                        />
                        <InputField
                            type="password"
                            placeholder="Confirm Password"
                            onChange={handleInputConfirmPasswordChange}
                        />
                        <AuthenticationButton>
                            Create Account
                        </AuthenticationButton>
                    </AuthenticationUserInputDetailsContainer>
                </AuthenticationContainer>
            </AuthenticationBackgroundColor>
            <AuthenticationBackgroundImage
                backgroundImg={registerBackgroundImage}
            />
        </AuthenticationBox>
    );
};
