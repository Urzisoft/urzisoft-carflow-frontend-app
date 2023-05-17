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

export const AddAdminCarService = () => {
    const {
        fetcher: sendPayload
    } = usePostCustomFetch<any, any>(requestUrls.carServices);
    const { token } = useValidateUser();
    const navigate = useNavigate();

    const [name, setName] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [address, setAddress] = useState<string>();
    const [mainBrandId, setMainBrandId] = useState<string>();
    const [carServiceCityId, setCarServiceCityId] = useState<string>();
    const [imageFile, setImageFile] = useState<File | null>(null);

    const handleInputNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleInputDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    const handleInputAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(event.target.value);
    };

    const handleInputMainBrandIDChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMainBrandId(event.target.value);
    };

    const handleInputCarServiceCityIDChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCarServiceCityId(event.target.value);
    };

    const handleInputFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files?.[0]) {
            setImageFile(event.target.files?.[0]);
        }
    };

    const onSendButtonClick = () => {
        if (name !== '' && description !== '') {
            const formData = new FormData();
            name && formData.append('Name', name);
            description && formData.append('Description', description);
            address && formData.append('Address', address);
            mainBrandId && formData.append('MainBrandId', mainBrandId);
            carServiceCityId && formData.append('CarServiceCityId', carServiceCityId);
            imageFile && formData.append('File', imageFile);

            sendPayload(formData, token, true);
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
                        placeholder="Address"
                        onChange={handleInputAddressChange}
                    />
                    <InputField
                        type="text"
                        placeholder="Main Brand ID"
                        onChange={handleInputMainBrandIDChange}
                    />
                    <InputField
                        type="text"
                        placeholder="Car Service City ID"
                        onChange={handleInputCarServiceCityIDChange}
                    />
                    <InputField
                        type="file"
                        isFileInput={true}
                        onChange={handleInputFileChange}
                    />
                    <FormButton onClick={onSendButtonClick}>Add a new Car Service</FormButton>
                    <FormButton onClick={() => navigate(PageRoutes.ADMIN_DASHBOARD)} backgroundColor={Colors.darkBlue}>Go back</FormButton>
                </AdminFormContainer>
            </AdminFormDashboard>
        </ExtraFormContainer>
    )
}