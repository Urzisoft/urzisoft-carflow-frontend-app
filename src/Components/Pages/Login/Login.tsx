import React, { FC, useEffect, useState } from "react";
import {
    FormGeneralBackgroundColor,
    AuthenticationBackgroundImage,
    FormGeneralBox,
    FormButton,
    FormGeneralContainer,
    FormTitle,
    FormUserInputDetailsContainer,
} from "../../Common/Authentication/Authentication.css";
import { InputField, InputValidation } from "../../Common/InputField/InputField";
import loginBackgroundImage from "../../../Assets/Images/BlueCarLoginBackground.png";
import { Colors } from "../../../Utils/cssMedia";
import { isNotParamEmpty, validatePassword, validateUsername } from "../../../Utils/Validation/Validation";
import { useAuth } from "../../../Hooks/useAuth";

export const Login: FC = () => {
    const { logUserIn } = useAuth();
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

    const onLoginButtonClick = () => {
        const isUsernameValidForPayload = !usernameError && isNotParamEmpty(username);
        const isPasswordValidForPayload = !passwordError && isNotParamEmpty(password);
        const isFormValid = isUsernameValidForPayload && isPasswordValidForPayload;

        if (isFormValid) {
            logUserIn(username, password);
        }
    };

    return (
        <FormGeneralBox>
            <FormGeneralBackgroundColor backgroundColor={Colors.darkBlue}>
                <FormGeneralContainer>
                    <FormTitle>Login</FormTitle>
                    <FormUserInputDetailsContainer>
                        <InputField
                            type="text"
                            placeholder="Username"
                            onChange={handleInputUsernameChange}
                            isValid={!usernameError}
                            isEligible={isNotParamEmpty(username)}
                        />
                        {usernameError && <InputValidation>{usernameError}</InputValidation>}
                        <InputField
                            type="password"
                            placeholder="Password"
                            onChange={handleInputPasswordChange}
                            isValid={!passwordError}
                            isEligible={isNotParamEmpty(password)}
                        />
                        {passwordError && <InputValidation>{passwordError}</InputValidation>}
                        <FormButton onClick={onLoginButtonClick}>Login</FormButton>
                    </FormUserInputDetailsContainer>
                </FormGeneralContainer>
            </FormGeneralBackgroundColor>
            <AuthenticationBackgroundImage
                backgroundImg={loginBackgroundImage}
            />
        </FormGeneralBox>
    );
};
