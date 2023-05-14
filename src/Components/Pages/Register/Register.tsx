import {
    FormGeneralBackgroundColor,
    AuthenticationBackgroundImage,
    FormGeneralBox,
    FormButton,
    FormGeneralContainer,
    FormTitle,
    FormUserInputDetailsContainer,
} from "../../Common/Authentication/Authentication.css";
import React, { FC, useEffect, useState } from "react";
import { InputField, InputValidation } from "../../Common/InputField/InputField";
import registerBackgroundImage from "../../../Assets/Images/RedCarRegisterBackground.jpg";
import { Colors } from "../../../Utils/cssMedia";
import usePostCustomFetch from "../../../Hooks/usePostCustomFetch";
import { requestUrls } from "../../../Backend/requestUrls";
import {
    isNotParamEmpty,
    validateConfirmPassword,
    validateEmail,
    validatePassword,
    validateUsername
} from "../../../Utils/Validation/Validation";
import { useRedirectHome } from "../../../Hooks/useRedirectHome";

export const Register: FC = () => {
    const { response: RegisterResponse, fetcher: sendRegisterPayload } = usePostCustomFetch<any, any>(requestUrls.authRegister);
    const { navigateHome } = useRedirectHome();

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
        const usernameErrorMsg = validateUsername(username);
        const emailErrorMsg = validateEmail(email);
        const passwordErrorMsg = validatePassword(password);
        const confirmPasswordErrorMsg = validateConfirmPassword(password, confirmPassword);

        setUsernameError(usernameErrorMsg);
        setEmailError(emailErrorMsg);
        setPasswordError(passwordErrorMsg);
        setConfirmPasswordError(confirmPasswordErrorMsg);
    }, [username, email, password, confirmPassword]);

    const onRegisterButtonClick = () => {
        const isUsernameValidForPayload = !usernameError && isNotParamEmpty(username);
        const isEmailValidForPayload = !emailError && isNotParamEmpty(email);
        const isPasswordValidForPayload = !passwordError && isNotParamEmpty(password);
        const isConfirmPasswordValidForPayload = !confirmPasswordError && isNotParamEmpty(confirmPassword);
        const isFormValid = isUsernameValidForPayload && isEmailValidForPayload && isPasswordValidForPayload
            && isConfirmPasswordValidForPayload;

        if (isFormValid) {
            const payload = {
                username: username,
                email: email,
                password: password
            };

            sendRegisterPayload(payload);
            if (RegisterResponse.status === 'Success') navigateHome();
        }
    }

    return (
        <FormGeneralBox>
            <FormGeneralBackgroundColor backgroundColor={Colors.darkRed}>
                <FormGeneralContainer>
                    <FormTitle>Register</FormTitle>
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
                            type="email"
                            placeholder="Email"
                            onChange={handleInputEmailChange}
                            isValid={!emailError}
                            isEligible={isNotParamEmpty(email)}
                        />
                        {emailError && <InputValidation>{emailError}</InputValidation>}
                        <InputField
                            type="password"
                            placeholder="Password"
                            onChange={handleInputPasswordChange}
                            isValid={!passwordError}
                            isEligible={isNotParamEmpty(password)}
                        />
                        {passwordError && <InputValidation>{passwordError}</InputValidation>}
                        <InputField
                            type="password"
                            placeholder="Confirm Password"
                            onChange={handleInputConfirmPasswordChange}
                            isValid={!confirmPasswordError}
                            isEligible={isNotParamEmpty(confirmPassword)}
                        />
                        {confirmPasswordError && <InputValidation>{confirmPasswordError}</InputValidation>}
                        <FormButton onClick={onRegisterButtonClick}>
                            Create Account
                        </FormButton>
                    </FormUserInputDetailsContainer>
                </FormGeneralContainer>
            </FormGeneralBackgroundColor>
            <AuthenticationBackgroundImage
                backgroundImg={registerBackgroundImage}
            />
        </FormGeneralBox>
    );

};
