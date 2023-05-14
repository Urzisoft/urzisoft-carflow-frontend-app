import React, { FC, useEffect, useState } from "react";
import {
    FormGeneralBackgroundColor,
    AuthenticationBackgroundImage,
    FormGeneralBox,
    FormButton,
    FormGeneralContainer,
    FormTitle,
    FormUserInputDetailsContainer
} from "../../Common/Authentication/Authentication.css";
import { InputField, InputValidation } from "../../Common/InputField/InputField";
import { Colors } from "../../../Utils/cssMedia";
import changePasswordBackgroundImage from "../../../Assets/Images/GreenCarChangePasswordBackground.png"
import { isNotParamEmpty, validateConfirmPassword, validatePassword } from "../../../Utils/Validation/Validation";
import useValidateUser from "../../../Hooks/useValidateUser";
import usePostCustomFetch from "../../../Hooks/usePostCustomFetch";
import { ChangePasswordType } from "../../../Utils/Types";
import { requestUrls } from "../../../Backend/requestUrls";
import { useRedirectHome } from "../../../Hooks/useRedirectHome";
import { Sidebar } from "../../Common/Sidebar/Sidebar";

export const ChangePassword: FC = () => {
    const { username } = useValidateUser();
    const {
        fetcher: sendChangePasswordPayload
    } = usePostCustomFetch<any, ChangePasswordType>(requestUrls.changePassword);
    const { navigateHome } = useRedirectHome();

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

    const onChangePasswordButtonClick = () => {
        const isOldPasswordValidForPayload = !oldPasswordError && isNotParamEmpty(oldPassword);
        const isNewPasswordValidForPayload = !newPasswordError && isNotParamEmpty(newPassword);
        const isFormValid = isOldPasswordValidForPayload && isNewPasswordValidForPayload;

        if (isFormValid) {
            const payload = {
                username: username,
                newPassword: newPassword
            };

            sendChangePasswordPayload(payload);
        }
        navigateHome();
    }

    return (
        <FormGeneralBox>
            <Sidebar />
            <FormGeneralBackgroundColor backgroundColor={Colors.turquoise}>
                <FormGeneralContainer>
                    <FormTitle>Change Password</FormTitle>
                    <FormUserInputDetailsContainer>
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
                        <FormButton onClick={onChangePasswordButtonClick}>Change Password</FormButton>
                    </FormUserInputDetailsContainer>
                </FormGeneralContainer>
            </FormGeneralBackgroundColor>
            <AuthenticationBackgroundImage
                backgroundImg={changePasswordBackgroundImage}
            />
        </FormGeneralBox>
    );

}
