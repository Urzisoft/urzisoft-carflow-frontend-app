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

export const AddAdminFuel = () => {
    const {
        fetcher: sendPayload
    } = usePostCustomFetch<any, any>(requestUrls.fuels);
    const { token } = useValidateUser();
    const navigate = useNavigate();

    const [name, setName] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [type, setType] = useState<string>();
    const [quality, setQuality] = useState<string>();

    const handleInputNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleInputDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    const handleInputTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setType(event.target.value);
    }

    const handleInputQualityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuality(event.target.value);
    }

    const onSendButtonClick = () => {
        if (name !== '' && description !== '' && type !== '' && quality !== '') {
            const payload = {
                Name: name,
                Description: description,
                Type: type,
                Quality: quality
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
                    <InputField
                        type="text"
                        placeholder="Description"
                        onChange={handleInputDescriptionChange}
                    />
                    <InputField
                        type="text"
                        placeholder="Type"
                        onChange={handleInputTypeChange}
                    />
                    <InputField
                        type="text"
                        placeholder="Quality"
                        onChange={handleInputQualityChange}
                    />
                    <FormButton onClick={onSendButtonClick}>Add a new fuel</FormButton>
                    <FormButton onClick={() => navigate(PageRoutes.ADMIN_DASHBOARD)} backgroundColor={Colors.darkBlue}>Go back</FormButton>
                </AdminFormContainer>
            </AdminFormDashboard>
        </ExtraFormContainer>
    )
}