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
import { InputField } from "../../Common/InputField/InputField";
import { Colors } from "../../../Utils/cssMedia";
import changePasswordBackgroundImage from "../../../Assets/Images/GreenCarChangePasswordBackground.png"
export const ChangePassword: FC = () => {

    const [oldPassword, setOldPassword] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");
    const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");

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
        // validate and send payload;
    }, [oldPassword, newPassword, confirmNewPassword]);
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
                        />
                        <InputField
                            type="password"
                            placeholder="New Password"
                            onChange={handleInputNewPasswordChange}
                        />
                        <InputField
                            type="password"
                            placeholder="Confirm New Password"
                            onChange={handleInputConfirmNewPasswordChange}
                        />
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
