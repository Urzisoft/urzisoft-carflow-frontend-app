import { AdminFormContainer, AdminFormDashboard, ExtraFormContainer } from "../../AdminDashboard/AdminDashboard.css";
import { InputField } from "../../../../Common/InputField/InputField";
import React, { useState } from "react";
import usePostCustomFetch from "../../../../../Hooks/usePostCustomFetch";
import { requestUrls } from "../../../../../Backend/requestUrls";
import useValidateUser from "../../../../../Hooks/useValidateUser";
import { FormButton } from "../../../../Common/Authentication/Authentication.css";
import { PageRoutes } from "../../../../../Utils/Routes";
import { useNavigate } from "react-router-dom";
import { Colors } from "../../../../../Utils/cssMedia";

export const AddAdminModel = () => {
    const {
        fetcher: sendPayload
    } = usePostCustomFetch<any, any>(requestUrls.models);
    const { token } = useValidateUser();
    const navigate = useNavigate();

    const [name, setName] = useState<string>();

    const handleInputNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const onSendButtonClick = () => {
        if (name !== '') {
            const payload = {
                Name: name
            };

            sendPayload(payload, token);
        }
    };

    return (
        <ExtraFormContainer>
            <AdminFormDashboard>
                <AdminFormContainer>
                    <InputField
                        type="text"
                        placeholder="Name"
                        onChange={handleInputNameChange}
                    />
                    <FormButton onClick={onSendButtonClick}>Add a new Model</FormButton>
                    <FormButton onClick={() => navigate(PageRoutes.ADMIN_DASHBOARD)} backgroundColor={Colors.darkBlue}>Go back</FormButton>
                </AdminFormContainer>
            </AdminFormDashboard>
        </ExtraFormContainer>
    )
}