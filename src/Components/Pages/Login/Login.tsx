import React, { FC, useEffect, useState } from "react";
import {
    AuthenticationBackgroundColor,
    AuthenticationBackgroundImage,
    AuthenticationBox,
    AuthenticationButton,
    AuthenticationContainer,
    AuthenticationTitle,
    AuthenticationUserInputDetailsContainer,
} from "../../Common/Authentication/Authentication.css";
import { InputField, InputValidation } from "../../Common/InputField/InputField";
import loginBackgroundImage from "../../../Assets/Images/BlueCarLoginBackground.png";
import { Colors } from "../../../Utils/cssMedia";
import { validatePassword, validateUsername } from "../../../Utils/Validation/Validation";

export const Login: FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [usernameError, setUsernameError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");

    const handleInputUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handleInputPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    useEffect(() => {
        const usernameErrorMsg = validateUsername(username);
        const passwordErrorMsg = validatePassword(password);

        setUsernameError(usernameErrorMsg);
        setPasswordError(passwordErrorMsg);
    }, [username, password]);
    
    return (
        <AuthenticationBox>
            <AuthenticationBackgroundColor backgroundColor={Colors.darkBlue}>
                <AuthenticationContainer>
                    <AuthenticationTitle>Login</AuthenticationTitle>
                    <AuthenticationUserInputDetailsContainer>
                        <InputField
                            type="text"
                            placeholder="Username"
                            onChange={handleInputUsernameChange}
                            isValid={!usernameError}
                            isEligible={username !== ""}
                        />
                        {usernameError && <InputValidation>{usernameError}</InputValidation>}
                        <InputField
                            type="password"
                            placeholder="Password"
                            onChange={handleInputPasswordChange}
                            isValid={!passwordError}
                            isEligible={password !== ""}
                        />
                        {passwordError && <InputValidation>{passwordError}</InputValidation>}
                        <AuthenticationButton>Login</AuthenticationButton>
                    </AuthenticationUserInputDetailsContainer>
                </AuthenticationContainer>
            </AuthenticationBackgroundColor>
            <AuthenticationBackgroundImage
                backgroundImg={loginBackgroundImage}
            />
        </AuthenticationBox>
    );
};
