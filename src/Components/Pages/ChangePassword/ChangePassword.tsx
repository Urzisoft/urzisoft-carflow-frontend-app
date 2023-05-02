import React, { FC, useEffect, useState } from "react";
import {
    AuthenticationBackgroundColor,
    AuthenticationBackgroundImage,
    AuthenticationBox,
    AuthenticationButton,
    AuthenticationContainer,
    AuthenticationTitle,
    AuthenticationUserInputDetailsContainer
} from "../../Common/Authentication/Authentication.css";
import { InputField, InputValidation } from "../../Common/InputField/InputField";
import { Colors } from "../../../Utils/cssMedia";
import changePasswordBackgroundImage from "../../../Assets/Images/GreenCarChangePasswordBackground.png"
import { isNotParamEmpty, validateConfirmPassword, validatePassword } from "../../../Utils/Validation/Validation";

export const ChangePassword: FC = () => {

    const [oldPassword, setOldPassword] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");
    const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");

    const [oldPasswordError, setOldPasswordError] = useState<string>("");
    const [newPasswordError, setNewPasswordError] = useState<string>("");
    const [confirmNewPasswordError, setConfirmNewPasswordError] = useState<string>("");

    const handleInputOldPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOldPassword(event.target.value);
    };

    const handleInputNewPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewPassword(event.target.value);
    };

    const handleInputConfirmNewPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmNewPassword(event.target.value);
    }

    useEffect(() => {
        const oldPasswordErrorMsg = validatePassword(oldPassword);
        const newPasswordErrorMsg = validatePassword(newPassword);
        const confirmNewPasswordErrorMsg = validateConfirmPassword(newPassword, confirmNewPassword);

        setOldPasswordError(oldPasswordErrorMsg);
        setNewPasswordError(newPasswordErrorMsg);
        setConfirmNewPasswordError(confirmNewPasswordErrorMsg);
    },[oldPassword, newPassword, confirmNewPassword]);

    return (
        <AuthenticationBox>
            <AuthenticationBackgroundColor backgroundColor={Colors.turquoise}>
                <AuthenticationContainer>
                    <AuthenticationTitle>Change Password</AuthenticationTitle>
                    <AuthenticationUserInputDetailsContainer>
                        <InputField
                            type="password"
                            placeholder="Old Password"
                            onChange={handleInputOldPasswordChange}
                            isValid={!oldPasswordError}
                            isEligible={isNotParamEmpty(oldPassword)}
                        />
                        {oldPasswordError && <InputValidation>{oldPasswordError}</InputValidation>}
                        <InputField
                            type="password"
                            placeholder="New Password"
                            onChange={handleInputNewPasswordChange}
                            isValid={!newPasswordError}
                            isEligible={isNotParamEmpty(newPassword)}
                        />
                        {newPasswordError && <InputValidation>{newPasswordError}</InputValidation>}
                        <InputField
                            type="password"
                            placeholder="Confirm New Password"
                            onChange={handleInputConfirmNewPasswordChange}
                            isValid={!confirmNewPasswordError}
                            isEligible={isNotParamEmpty(confirmNewPassword)}
                        />
                        {confirmNewPasswordError && <InputValidation>{confirmNewPasswordError}</InputValidation>}
                        <AuthenticationButton>Change Password</AuthenticationButton>
                    </AuthenticationUserInputDetailsContainer>
                </AuthenticationContainer>
            </AuthenticationBackgroundColor>
            <AuthenticationBackgroundImage
                backgroundImg={changePasswordBackgroundImage}
            />
        </AuthenticationBox>
    );

}