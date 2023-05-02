import React, { FC, useState } from "react";
import {
    AuthenticationContainer,
    AuthenticationTitle,
    AuthenticationUserInputDetailsContainer,
    AuthenticationBackgroundColor,
    AuthenticationBackgroundImage,
    AuthenticationBox,
    AuthenticationButton,
} from "../../Common/Authentication/Authentication.css";
import { InputField } from "../../Common/InputField/InputField";
import loginBackgroundImage from "../../../Assets/Images/BlueCarLoginBackground.png";
import { Colors } from "../../../Utils/cssMedia";
import { useAuth } from "../../../Hooks/useAuth";

export const Login: FC = () => {
    const { logUserIn } = useAuth();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleInputUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handleInputPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const onLoginButtonClick = () => {
        if (username !== '' && password !== '') {
            logUserIn(username, password);
        }
    };

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
                        />
                        <InputField
                            type="password"
                            placeholder="Password"
                            onChange={handleInputPasswordChange}
                        />
                        <AuthenticationButton onClick={onLoginButtonClick}>Login</AuthenticationButton>
                    </AuthenticationUserInputDetailsContainer>
                </AuthenticationContainer>
            </AuthenticationBackgroundColor>
            <AuthenticationBackgroundImage
                backgroundImg={loginBackgroundImage}
            />
        </AuthenticationBox>
    );
};
