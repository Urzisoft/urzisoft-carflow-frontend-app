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
import { InputField, InputValidation } from "../../Common/InputField/InputField";
import registerBackgroundImage from "../../../Assets/Images/RedCarRegisterBackground.jpg";
import { Colors } from "../../../Utils/cssMedia";
import { validateUsername, validateEmail, validatePassword, validateConfirmPassword } from "../../../Utils/Validation/Validation";

export const Register: FC = () => {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const [usernameError, setUsernameError] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
    const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");

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
        const validateAndSendPayload = () => {
            const usernameErrorMsg = validateUsername(username);
            const emailErrorMsg = validateEmail(email);
            const passwordErrorMsg = validatePassword(password);
            const confirmPasswordErrorMsg = validateConfirmPassword(password,confirmPassword);

            setUsernameError(usernameErrorMsg);
            setEmailError(emailErrorMsg);
            setPasswordError(passwordErrorMsg);
            setConfirmPasswordError(confirmPasswordErrorMsg);
        }
        validateAndSendPayload();
    }, [username, email, password, confirmPassword]);
    
    return (
        <AuthenticationBox>
            <AuthenticationBackgroundColor backgroundColor={Colors.darkRed}>
                <AuthenticationContainer>
                    <AuthenticationTitle>Register</AuthenticationTitle>
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
                            type="email"
                            placeholder="Email"
                            onChange={handleInputEmailChange}
                            isValid={!emailError}
                            isEligible={email !== ""}
                        />
                        {emailError && <InputValidation>{emailError}</InputValidation>}
                        <InputField
                            type="password"
                            placeholder="Password"
                            onChange={handleInputPasswordChange}
                            isValid={!passwordError}
                            isEligible={password !== ""}
                        />
                        {passwordError && <InputValidation>{passwordError}</InputValidation>}
                        <InputField
                            type="password"
                            placeholder="Confirm Password"
                            onChange={handleInputConfirmPasswordChange}
                            isValid={!confirmPasswordError}
                            isEligible={confirmPassword !== ""}
                        />
                        {confirmPasswordError && <InputValidation>{confirmPasswordError}</InputValidation>}
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
