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

export const AddAdminCity = () => {
    const {
        fetcher: sendBrandPayload
    } = usePostCustomFetch<any, any>(requestUrls.cities);
    const { token } = useValidateUser();
    const navigate = useNavigate();

    const [name, setName] = useState<string>();
    const [county, setCounty] = useState<string>();
    const [imageFile, setImageFile] = useState<File | null>(null);

    const handleInputNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleInputCountyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCounty(event.target.value);
    };

    const handleInputFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files?.[0]) {
            setImageFile(event.target.files?.[0]);
        }
    };

    const onSendButtonClick = () => {
        if (name !== '' && county !== '') {
            const formData = new FormData();
            name && formData.append('Name', name);
            county && formData.append('County', county);
            imageFile && formData.append('File', imageFile);

            sendBrandPayload(formData, token, true);
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
                        placeholder="County"
                        onChange={handleInputCountyChange}
                    />
                    <InputField
                        type="file"
                        isFileInput={true}
                        onChange={handleInputFileChange}
                    />
                    <FormButton onClick={onSendButtonClick}>Add a new City</FormButton>
                    <FormButton onClick={() => navigate(PageRoutes.ADMIN_DASHBOARD)} backgroundColor={Colors.darkBlue}>Go back</FormButton>
                </AdminFormContainer>
            </AdminFormDashboard>
        </ExtraFormContainer>
    )
}