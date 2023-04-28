import React, { FC, useEffect, useState } from "react";
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
import loginBackgroundImage from "../../../Assets/Images/RedCarLoginBackground.jpg";
export const Login: FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>();

    const handleInputUsernameChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setUsername(event.target.value);
    };

   const handleInputPasswordChange = (
         event: React.ChangeEvent<HTMLInputElement>
     ) => {
         setPassword(event.target.value);
     };

    useEffect(() => {
        // validate and send payload;
    }, [ username, password]);

    return (
        <AuthenticationBox>
            <AuthenticationBackgroundColor backgroundColor="#800c1c">
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
